---
id: one-signal
title: Setting Up Push Notifications with OneSignal
---

This will attempt to answer the question: How do I enable push notifications using OneSignal on my Rock instance?

## Get the files and put them where they need to go
* Clone down the `apollos-onesignal` repo [here](https://github.com/ApollosProject/apollos-onesignal).
* Copy the `apollosProject.OneSignal.dll` and `apollosProject.OneSignal.pdb` from the `/bin` folder.
* Paste them in the `Rockweb/bin` folder of your Rock instance.

## Rock Setup
* Inside Rock, go to `Admin > Communications > Communication Transports`.
* You should see an option for One Signal. If not, you may need to restart your Rock server. Either way, Rock should detect that the new DLL is there and automatically add the transport to the list on that page. Click on that transport.
* You will need to change the `Active` flag to `Yes` and add the One Signal `App Id` and `REST API Keys`. You can find these on the OneSignal website on the `Settings` page under `Keys & IDs`.

![Rock Transport Settings](/docs/docs/assets/one-signal/rock-transport-settings.png)

![OneSignal Transport Settings](/docs/docs/assets/one-signal/one-signal-settings.png)

* Go to `Admin > Communications > Communication Mediums`
* Click on Push Notifications
* Make sure the `Active` flag is set to `Yes` and set the `Transport Container` to `One Signal`.

![Rock Medium Settings](/docs/docs/assets/one-signal/rock-medium-settings.png)

Now you’re all set to send push notifications through Rock!
