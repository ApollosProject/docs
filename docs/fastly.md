---
id: fastly
title: Setting Up Fastly CDN
---

This will describe how to set up your own custom Fastly CDN Caching Layer.

## Fastly

We've chosen to demonstrate and document Fastly because it's free up to $50 in traffic, but with a little work you could use any CDN you choose.

Step one is to create a new account at [fastly.com/signup](https://www.fastly.com/signup).

![Sign Up](/img/fastly/signup.png)

After you confirm your email address, click "CREATE YOUR FIRST SERVICE".

![Create your first service](/img/fastly/first-service.png)

Add a any domain name you want in the format `<name>.global.ssl.fastly.net`. Just can't use anything dot seperated. Next, add the hostname of the server your API is hosted on. [See this doc](https://docs.fastly.com/guides/tls/setting-up-free-tls) for more details.

![Service Details](/img/fastly/details.png)

Almost done with Fastly. Now just make sure you set "Override host" with your domain name from above and the Fallback TTL to 0. This will insure that unless specified, nothing will be cached.

![Settings](/img/fastly/settings.png)

## GraphQL

Now that Fastly is set up, we need to configure the GraphQL layer to send `cache-control` headers with it's responses. Add the following key to your `server.js` file:

```js
cacheControl: {
  stripFormattedExtensions: false,
  calculateHttpHeaders: true,
  defaultMaxAge: 600,
},
```

You can use whatever default `maxAge` you see fit. It's in seconds. This will be the TTL (time to live) of your queries unless you specify otherwise.

Now you can add headers to your queries:

```
type Person implements Node @cacheControl(maxAge: 0) {
  id: ID!
  firstName: String!
  lastName: String!
  ...
```

Set your `.env.production` file to have your new data URL (the domain you set from above) and you should be all set!

```
...
APP_DATA_URL=<YOUR_FASTLY_URL>
...
```

You can get this URL by clicking "Test the domain" on your Fastly configuration page.

![Fastly URL](/img/fastly/fastly_url.png)
