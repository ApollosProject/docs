---
id: content-personalization
title: Rock Content Personalization
---

An attempt to answer the question: What I need to do (step by step) on my Rock instance to make it compatible with content personalization.

## What is Content Personalization?
This is the beginning of personalizing content in the Apollos Project app. Essentially, this consists of creating personas, setting up content channel type item attributes and tagging content items. In doing so, we will be tying certain pieces of content to certain types of people. The app will then show the appropriate content to the appropriate people when appropriate.

## Set Up Personas
First things first, we need to have some personas set up that our content can be tied to. I’m using the term “personas” because we’re talking about groups of people, but these are really just what Rock calls “data views.” I’ll show you how to set one up now.

From the home screen, choose Tools > Data Views.

![Figure 1](/docs/assets/content-personalization/Figure1.png)


Choose “Add Category” then “Add Top-Level” to add another folder to hold your personas. I called mine “App Personas.” It’s not required, but feel free to give it a description and a sweet Font Awesome icon. I chose that very cool phone icon. Is that too meta for personas for an app? 🤷‍♂️

Make sure you save that.

![Figure 2](/docs/assets/content-personalization/Figure2.png)

Next, click on the category you just created and the “+ Data View” button will come alive. Click on that.

![Figure 3](/docs/assets/content-personalization/Figure3.png)

This is where you will enter in all the information to define your persona. As you can see below I’ve created a persona for anyone who has been baptized. The types and ways that you can combine person data to drill down into super specific personas is almost endless. Play around with this and you’ll soon find there is so much power here. Have fun and try to not get too carried away!

Make sure that the “Category” shows the category that you created earlier. Then just click “Save” and you’ve created your first persona. Congratulations!

![Figure 4](/docs/assets/content-personalization/Figure4.png)

Next, we’ll see how to set up your content channels to be able to tie content to your newly created personas.

## Set Up Content Channel Type Item Attributes
The next thing we want to do is to make it so that our content items can be “attached” or tied to a persona or personas. To do that, we are going to set up item attributes on each of the content channel types that you’ll want to use. I’ll show you how to do one, but you’ll have to do the rest. 😉

First, choose “Content Channel Types” from the Admin > CMS Configuration menu.

![Figure 5](/docs/assets/content-personalization/Figure5.png)

Next, choose the Content Channel Type that you’d like to set up. In this example, we’re going to use “Devotional Series.”

![Figure 6](/docs/assets/content-personalization/Figure6.png)

Expand “Item Attributes” and click the ➕ at the bottom of the grid to add another one.

![Figure 7](/docs/assets/content-personalization/Figure7.png)

Give the item attribute a name. I chose “Persona” here, but you could call it “Data View” or “George’s Boot” or pretty much whatever you wanted to. Choose “DataViews” from the “Field Type” drop down, choose “Person” as the Entity Type and give that a save.

Pro Tip: You’ll have to save twice, once on the modal and once on the Content Channel Type itself for the changes to stick.

![Figure 8](/docs/assets/content-personalization/Figure8.png)

There you go! Your Content Channel Type is all set up to be able to assign a persona/data view to it. Let’s do that now.

## Set Up Content Channel Items
Choose “Content Channels” from the Admin > CMS Configuration menu.

![Figure 9](/docs/assets/content-personalization/Figure9.png)

Choose the content channel of the type that you set up the persona on. In our case here we made it easy and called our content channels the same thing as the type they are. So we’ll choose the “Devotional Series” content channel.

![Figure 10](/docs/assets/content-personalization/Figure10.png)

Choose any old content item you’d like. I’m gonna choose the Jeremiah devotional series.

![Figure 11](/docs/assets/content-personalization/Figure11.png)

You’ll see at the bottom of your content item there is now what looks like a text box titled with whatever you called the item attribute. I titled mine “Persona,” remember? When you click in the box it displays a drop down of all of the data views / personas tied to the Person entity type (because we told the item attribute to only look at Person data views).

![Figure 12](/docs/assets/content-personalization/Figure12.png)

When you choose a data view it displays in the box as shown below. Because we chose the “Data Views” as the attribute field type you can choose as many data views as you would like to here.

![Figure 13](/docs/assets/content-personalization/Figure13.png)

That’s it! Now you have a piece of content tied to a persona / data view. Do that for as many pieces of content you have and you’ll be all done.
