---
id: prayer
title: Prayer
---

🙏 Prayer on Apollos
--------------------

Prayer on Apollos is built using our extensible **feature** system. Features are composable blocks that can be added to different parts of an Apollos app such as within feeds or embedded inside of one-off content experiences. This guide aims to help you:

*   Understand how prayer is built and how we intend for you to use it
*   How to quickly construct the core Daily Prayer experience
*   How you might be able to extend Prayer for your specific app



![](https://public.3.basecamp.com/p/sk4HdLcFXbBgRNhiaGkW2guN/blobs/BAh7CEkiCGdpZAY6BkVUSSIoZ2lkOi8vYmMzL0Jsb2IvMjE2ODU2NTE4P2V4cGlyZXNfaW4GOwBUSSIMcHVycG9zZQY7AFRJIgtwdWJsaWMGOwBUSSIPZXhwaXJlc19hdAY7AFQw--f5c65d295df064229533c5f5f45a4ad271847cb9/preview)

----

On the frontend, there are two main parts to the prayer experience:  
 
### Prayer List Feature
![](https://public.3.basecamp.com/p/sk4HdLcFXbBgRNhiaGkW2guN/attachments/afe36ac0-b045-11ea-a303-ecf4bbd6f9a0/download/image.png)
The **Prayer List Feature** is a horizontal, scrollable list of user avatars that represent prayers. Taping on the "+" plus symbol allows you to start adding your own prayer, and tapping on any of the user avatars opens that specific prayer.  

### Praying Experience
![](https://public.3.basecamp.com/p/sk4HdLcFXbBgRNhiaGkW2guN/attachments/a7200ab0-b045-11ea-b939-a0369f740dfa/download/image.png)
The **Praying Experience** is a guided flow with an optional onboarding screen, a prayer compose screen, a post-submission screen, and a horizontal slider of prayers that you can pray for.  

  
These two pieces are driven off of the Apollos feature system. This way, you are able to choose where and how prayer should show up, what backend data source to populate prayers, and how prayers should be selected (an app could even have multiple prayer experiences with different logic).  
  
# Schema
 
The entirety of the Prayer GraphQL schema is:

```gql
type PrayerRequest implements Node {
  id: ID!
  text: String!
  requestor: Person
  isAnonymous: Boolean
  isPrayed: Boolean
}
 
type PrayerListFeature implements Feature & Node {
  id: ID!
  order: Int
  isCard: Boolean
  title: String
  subtitle: String
  prayers: \[PrayerRequest\]
}
 
extend type Mutation {
  addPrayer(text: String!, isAnonymous: Boolean): PrayerRequest
}
 
extend enum InteractionAction {
  PRAY
}
```

  
Lastly, the first time someone prays for a prayer that you have submitted, you will receive a push notification (with a configurable message) letting you know that the community is praying for you. Other push notifications could be sent via interactions and workflows within Rock.  

* * *

  
  

The Core Prayer Experience: Daily Prayer
========================================

Out of the box, Apollos comes with a daily prayer experience built on top of the Prayer Requests feature-set found within [Rock RMS](https://www.rockrms.com/). Daily Prayer is an intentionally ephemeral experience. You can request prayer daily, and pray for others from the past 24 hours. Embrace and think of it like Instagram Stories. Compared to typical prayer lists, we're aiming for:

*   A short-lived experience that encourages people to be more vulnerable and open
*   People come back daily to re-engage
*   Simplified user expectations and increased feeling of safety
*   There's no risk of "old" prayers making the experience bad
*   Less chance for abuse, any potential abuse is limited to 1 day

To enable this feature on your app, you will need to create a prayer list feature and add it to somewhere that you display features. For daily prayer, we suggest a prominent placement on your home screen. To do this, you can amend the following feature definition to your apollos-church-api config.yaml file:  
  
```yaml
HOME\_FEATURES:
  - algorithms: \[DAILY\_PRAYER\]
    type: PrayerList
    isCard: false
    title: Daily Prayer
    subtitle: My prayer feature subtitle
```

  
You can control the look and feel of the feature with isCard, title, and subtitle props. The DAILY\_PRAYER algorithm also supports a limit argument if you want to change the number of prayers shown at once:  
  
```yaml
HOME\_FEATURES:
  - algorithms
      - type: DAILY\_PRAYER
        arguments:
          limit: 5
    type: PrayerList
```
  
When you refresh your app, you should see the Prayer feature show up on your home screen.  

* * *

  
  

Further customizing the experience
==================================

  
### Customizing the Prayer components
The Prayer experience is fully self-contained. It doesn't even have a dependency on react-navigation. Rendering the \`PrayerFeature\` is all you need in order to create a prayer experience.  
  
If you'd like to pass in custom props to the PrayerFeature or the PrayingExperience, you can do so by overwriting the default feature resolver by using the additionalFeatures prop when you render a FeatureFeed:  
  
```js
import {
  FeaturesFeedConnected,
  PrayerListFeatureConnected,
} from '@apollosproject/ui-connected';

const CustomizedPrayerFeature = () => (
  <PrayerListFeatureConnected
    OnboardingComponent={MyCustomOnboardingComponent}
  />
);

const MyFeaturesComponent = () => (
  <FeaturesFeedConnected
    additionalFeatures={{
      PrayerListFeature: CustomizedPrayerFeature,
    }}
  />
);
```
  
Most of the experience can also be easily customized using the Apollos theming and styled system. In fact, you can make the same customization as above using the theme overrides system:  
  
```js
// in your app's theme/propOverrides.js
export {
  'ui-prayer.PrayingExperienceConnected': {
    OnboardingComponent: MyCustomOnboardingComponent
  },
}
```
  
And then anytime the PrayingExperience component is rendered anywhere within the app, it will utilize your custom onboarding component.  
  
### Customizing visuals and theme  
The praying experience supports both light and dark modes. You can override this behavior and force a dark or light theme mode using the same override system as above:  
  
```js
// in your app's theme/propOverrides.js
export {
  'ui-prayer.PrayingExperienceConnected': {
    themeType: 'light',
  },
}
```
  
There are also numerous styled components defined in the ui-prayer package that you can customize. Search the package for "styled" or "withTheme" calls to see different components that you are able to customize.  
  
### Custom prayer selection algorithms  
Using the features system, you can easily add your own algorithms (can even mix and match!) for selecting prayers to show within a prayer feature.  
  
For example, let's create a daily prayer feed that's limited to prayers that are just from users at your current campus.  
  
First: You'll need to create your own \`Feature\` datasource that extends our core datasource, and add your custom algorithm to it:

```js
import { Features } from '@apollosproject/data-connector-rock';

export default class MyFeatureDataSource extends Features.dataSource {
  // create your custom aglorithm:
  async dailyGroupPrayerAlgorithm({ limit = 10 } = {}) {
    const { Auth, PrayerRequest } = this.context.dataSources;

    // get the current user's campus
    const { primaryCampusId } = await Auth.getCurrentPerson();

    // get daily prayer cursor
    const { PrayerRequest } = this.context.dataSources;
    let cursor = await PrayerRequest.byDailyPrayerFeed();

    // add group filter
    cursor = cursor.andFilter(\`CampusId eq ${primaryCampusId}\`);

    return cursor.top(limit).get();    
  }

  // add your custom algorithm:
  ACTION\_ALGORITHMS: {
    ...this.ACTION\_ALGORITHMS,
    DAILY\_GROUP\_PRAYER: this.dailyGroupPrayerAlgorithm,
  },
}
```
  
Then, you can use your new algorithm wherever you render features:

```yaml
HOME\_FEATURES:
  - algorithms: \[DAILY\_GROUP\_PRAYER\]
    type: PrayerList
```
  
As long as your algorithm returns objects that your PrayerRequest resolver understands, your algorithm can take on whatever logic you want!
