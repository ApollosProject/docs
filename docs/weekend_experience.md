---
id: weekend-experience
title: Implementing the Weekend Experience
sidebar_label: Implementing the Weekend Experience
---

# Implementing The Weekend Experience

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
