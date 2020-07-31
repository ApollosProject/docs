---
id: weekend-experience
title: Implementing the Weekend Experience
sidebar_label: Implementing the Weekend Experience
---

The Weekend experience is comprised of a number of different components that come together to form what we call the Weekend Experience. This guide aims to equip you to
- Understand the focus and scope of each of those components
- Walk you through how to configure the new components with the “Apollos Defaults”
- Guide the developer through modifying the default implementation of the new components to fit the needs of their church.

## New Components

**Features** are composable blocks that can be added to either ContentItems or content feeds. We ship with three different Features. ScriptureFeature, TextFeature, and ActionListFeature

- Text Feature
  - Shows a shareable block of text
- Scripture Feature
  - Shows one or more blocks of Scripture
- Action List Feature
  - Shows a list of 0+ actions that a user could take.
  - Right now only shows ContentItems.
  - Possible actions configured by “Action List Algorithms”

<img src="/img/weekend-experience/image1.png" width="240"/> <img src="/img/weekend-experience/image9.png" width="240"/> <img src="/img/weekend-experience/image12.png" width="240"/>

**Live Content Items.** Specific content items can now be displayed as “Live” when the live stream is playing. These content items will launch the livestream when the play button is tapped, rather than playing whatever media is attached to the Content Item.

<img src="/img/weekend-experience/image3.png" width="240"/>

## Implementing New Components

### Text Feature

The text feature in core is controlled entirely by a `TextFeatures` field in Core. In order to get a text feature to show up on a content item, you must add a new Custom Attribute to the Content Item Channel that houses your “weekend” content items. To add the Attribute, start by visiting the CMS Configuration panel in Rock

![alt_text](/img/weekend-experience/image6.png)

Visit the Content Channel Types

![alt_text](/img/weekend-experience/image2.png)

Select the Content Channel you want to add Features support for. In our case, “Sermon”

![alt_text](/img/weekend-experience/image7.png)

Open the “Item Attributes” panel, and select the Plus bottom at the lower right.

![alt_text](/img/weekend-experience/image10.png)

Now define the properties for your custom item attribute. The name can be whatever you want, the Key should be “TextFeatures”. The type should be “Key Value List”.  Once you are done, hit save in this modal, and hit save on the Content Type detail screen.

![alt_text](/img/weekend-experience/image8.png)

Now, it’s time to use your new custom attribute. On any sermon item (or whatever you added the Text Feature to) and add a new Key Value pair, and add your content to the “Value” field. The key field will be used in the future to support either custom ordering or as a header.

![alt_text](/img/weekend-experience/image11.png)

### Scripture Feature

The scripture feature can be added to a content item in entirely the same way as the Text Feature. However:

1. You have to give the attribute the key of ScriptureFeatures instead of TextFeatures
2. You can enter multiple scripture references (John 3:16, Luke Matthew 5:3-6) instead of entering the text you want to see.

![alt_text](/img/weekend-experience/image4.png)

## ActionListFeature

The action list feature is, at its core, a list of different actions. Right now all the actions that are implemented focus on opening different content items, but in the future we plan on adding support for linking to scripture or webviews. The content that shows up inside an ActionListFeature is decided by one of several “algorithms”. One or more algorithms can drive a single card.

Three algorithms are used by default in the home feed for core.

*   PERSONA_FEED
    *   Picks three items from a user’s persona feed.
*   CONTENT_CHANNEL
    *   Picks three items from a content channel. The content channel used is determined by setting the ROCK_MAPPINGS.HOME_FEATURE_CHANNEL_ID field
*   SERMON_CHILDREN
    *   This pulls all active children from the most recent sermon. You can use this algorithm to progressively show users new content throughout the week related to a given sermon.


## Live Content Items

The “live” status of Content Items are driven by two pieces of data. The logic is as follows, by default: If a sermon is live, and the content item is the **most recently active **content item, the item will show a live badge and open the livestream when tapped. The livestream `isLive` attribute is driven the same way as before. To configure what a “sermon” is, create a ContentChannel that all your sermons will be posted in, and then add the ID of that channel to your config.yml in the `ROCK_MAPPINGS.SERMON_CHANNEL_ID` field.

![alt_text](/img/weekend-experience/image5.png)
