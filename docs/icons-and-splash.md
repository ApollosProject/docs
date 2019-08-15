---
id: icons-and-splash
title: Icons and Splash Screens
---

[Apply Pixels](https://applypixels.com/) is a great repository of Photoshop and Sketch design resources.

Or, you can simple Google "generate iOS icons" or "generate Android splash screens" to find free resources. Just be warned, free resources are not guarenteed in their quality.

# iOS
## First, open up Images.xcassets to view the available assets
1. Open up your Xcode project
2. Navigate to Images.xcassets in the Navigator on the left hand side

## The assets you have to interact with are the following:
* **apollos.icon-1024:** 1x should be a 1024x1024 png image of your icon. When you create your icon, make sure to also export a png that is 2x (2048x2048) and 3x (3072x3072). Drag your png's into the Xcode app in the appropriate image slot.
* **AppIcon:** This is the App Icon that will be displayed within iOS and the App Store. Apple has some pretty extensive requirements for sizing, so just read through their [documentation](https://developer.apple.com/design/human-interface-guidelines/ios/icons-and-images/app-icon/) or use a helper online.
* **splash_bg:** 1x should be a 721x721 png image to be used as the background of your Splash Screen that shows when your app is first launched. This can be a solid color or gradient, but don't worry about including your logo or icon in this image. For best practices, include a 2x and 3x image, although this is not required.
* **splash-icon:** 1x should be the smallest sized icon that you want displayed on a splash screen. This exact size can be configured later, so just decide on a resolution that meets your organization's standard. For best practices, include a 2x and 3x image, although this is not required.

## Lay out your Splash Screen in LaunchScreen.xib
Inside of the LaunchScreen.xib file, you'll be able to lay out the way that your splash screen looks. By default, the Apollos App includes the `splash_bg` from Images.xcassets as the background image, and `splash-icon` from the Images.xcassets.

From within Xcode, you can update this screen and the assets used on it. Of course, it is suggested to adhere to Apple's [documentation](https://developer.apple.com/design/human-interface-guidelines/ios/icons-and-images/launch-screen/) on the subject.

## So, why isn't it showing up?
Sometimes, caching issues with the simulators can take place. When looking at the LaunchScreen.xib, make sure that the image preview appears the way you intend for it to, then close out all simulators. Run a Clean command [`Cmd + Shift + k`] and then a Run command [`Cmd + R`].

If your Splash Screen still doesn't show up the way you are expecting it to, try changing the device type of the simulator or closing Xcode and reopening the project.


# Android
## First, open up `res` to view the available assets
`android => app => src => main => res`

Inside this directory, you have access to all kinds of Android configuration for splash screens and icons. Read more through articles and documentation.

The following are the main pieces to worry about when adding your own branding to the Apollos structure:

1. Sizing
    * mdpi = 1x
    * hdpi = 1.5x
    * xhdpi = 2x
    * xxhdpi = 3x
    * xxxhdpi = 4x

2. File Types
    * **splash_icon.png:** the image that appears over the colored background for the splash screen
    * **ic_launcher[.png][.webp]:** the app icon that is displayed throughout the Android OS
    * **values => colors.xml:** xml file that houses the color that will be displayed in the background whenever the `splash_icon.png` is used

# PLEASE NOTE:
## Dealing with sizing for App Icons and screen resolutions is a lot to keep up with and changes frequently. Use available resources online (free or paid) to make this easier on yourself. While you will still have to manually put the assets into your project, finding resources to handle sizing will significantly decrease the time this process takes
## And when in doubt, look at the platform's documentation for best practices.