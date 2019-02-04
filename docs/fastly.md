---
id: fastly
title: Setting Up Fastly CDN
---

This will describe how to set up your own custom Fastly CDN Caching Layer.

## Fastly

We've chosen to demonstrate and document Fastly because it's free up to $50 in traffic, but with a little work you could use any CDN you choose.

Step one is to create a new account at [fastly.com/signup](https://www.fastly.com/signup).

![Sign Up](/docs/assets/fastly/signup.png)

After you confirm your email address, click "CREATE YOUR FIRST SERVICE".

![Create your first service](/docs/assets/fastly/first-service.png)

Enter the domain name of your API (this is found in your `.env.production` file under the `APP_DATA_URL` key) and the hostname of the server your API is hosted on.

![Service Details](/docs/assets/fastly/details.png)

Almost done with Fastly. Now just make sure you set "Override host" with your domain name from above and the Fallback TTL to 0. This will insure that unless specified, nothing will be cached.

![Settings](/docs/assets/fastly/settings.png)

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

The last thing we need to do to configure GraphQL is change Apollo to use `GET` requests for queries. `POST` is still fine for mutations since those won't be cached anyway.

Your `httpLink.js` file on your client package should add the following changes:

```js
import { Platform } from 'react-native';
import { createUploadLink } from 'apollo-upload-client';
import Config from 'react-native-config';
import { split } from 'apollo-link';
import { createHttpLink } from 'apollo-link-http';
import { getMainDefinition } from 'apollo-utilities';

let uri = Config.APP_DATA_URL;
const androidUri = Config.ANDROID_URL || '10.0.2.2';

// Android's emulator requires localhost network traffic to go through 10.0.2.2
if (Platform.OS === 'android') uri = uri.replace('localhost', androidUri);

export default split(
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return kind === 'OperationDefinition' && operation === 'mutation';
  },
  createUploadLink({ uri }),
  createHttpLink({
    uri,
    useGETForQueries: true,
  })
);
```

Set your `.env.production` file to have your new data URL and you should be all set!

```
...
APP_DATA_URL=<YOUR_FASTLY_URL>
...
```

You can get this URL by clicking "Test the domain" on your Fastly configuration page.

![Fastly URL](/docs/assets/fastly/fastly_url.png)
