---
id: universal-links
title:  Implementing iOS Universal Links and Android App Links
---

Universal & App Links are a great way to connect content across your various media platforms.
This also allows a user to more deeply engage with content within your app.

## Clarification of Terms
What are Universal Links, App Links and Deep Links?

**Deep Links** allow you to navigate users to specific screens in your app.

[React Native Documentation for deep links](https://facebook.github.io/react-native/docs/linking).

We implement the steps listed in the React Native documentation so that both iOS and Android can open deep links in our app.
There is some native code to be implemented, but the main thing to be wary of is the javascript code so that our app can listen for incoming links.


**Universal Links & App Links** allow you to link a website to an app. This allows you to navigate to an app from a websites url if that app is installed on your device.


We'll need to make sure that our app is listening for incoming links.

These are the lifecycle methods that you will need to add to your root App Class or alternatively you could create a `Linking Provider` as well:

```
componentDidMount() {
    Linking.addEventListener('url', this._handleOpenURL);
    Linking.getInitialURL().then((url) => {
      if (url) {
        this._handleOpenURL({ url });
      }
    });
  }

  componentWillUnmount() {
    Linking.removeEventListener('url');
  }
```

This code handles the incoming link then runs a function that will navigate to the screen that corresponds to that
link. This will be different for each app, based on which CMS you use and how that's being served to the app, but for
NewSpring Church that looks like this:

```
navigate = (rawUrl) => {
    if (!rawUrl) return;
    const url = URL.parse(rawUrl);
    const route = url.pathname.substring(1);
    const args = querystring.parse(url.query);
    this.props.navigate(route, args);
  };

  _handleOpenURL = async (rawUrl) => {
    const urlArray = rawUrl.url.split(/[\s/]+/);
    const urlSlug = urlArray[urlArray.length - 1];
    const {
      data: { contentItemFromSlug } = {},
    } = await this.props.client.query({
      query: GET_CONTENT_ITEM_BY_SLUG,
      variables: { slug: urlSlug },
    });
    if (contentItemFromSlug) {
      const newUrl = `newspringchurchapp://AppStackNavigator/ContentSingle?itemId=${
        contentItemFromSlug.id
      }`;
      this.navigate(newUrl);
    }
  };

  render() {
    return this.props.children;
  }
```

NewSpring went with the Provider approach or this solution.


## iOS Native Code
Within the ios folder of the app package, we will need to add some code to `ios/_yourchurch_churchapp.entitlements`.

After the `<string>` tag add:
```
<key>com.apple.developer.associated-domains</key>
<array>
    <string>applinks:_yourchurchwebsitehere_</string>
</array>
```

This will allow iOS to associate your app with your website. It points to a file called an `apple-app-site-association`.
You'll need to add one to the root of your website or in a `.well-known` folder.
The documentation on that file is [here](https://developer.apple.com/library/archive/documentation/General/Conceptual/AppSearch/UniversalLinks.html)

The important thing for this is knowing your appID and to know what paths on the website you want to be able to open in the app.
You can test this link [here](https://search.developer.apple.com/appsearch-validation-tool/)

Once you get those 2 things set up, you're good to go on iOS!

## Android Native Code

Android is a little more difficult to set up than iOS, mainly because most of the association between app and site are handle app side instead of
site side.

The great thing is that there is a great tool within android studio that helps us get this right.

Within Android Studio, navigate to the tools:
![alt_text](/docs/assets/universal-links/Android_Tool.png)

Next, select the App Links Assistant:
![alt_text](/docs/assets/universal-links/AppLinksAssistant.png)

There is great documentation for how to use the App Links Assistant [here](https://developer.android.com/studio/write/app-link-indexing)

Once you finish with the assistant you should have an assetlinks.json file that you will need to put in your `.well-known` folder at the root of your site.