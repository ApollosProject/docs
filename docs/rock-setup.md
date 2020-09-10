---
id: rock-setup
title: Rock Setup
---

This guide describes how to setup your Rock Environment

## Creating an API user

(todo)

## Unlocking Rock Endpoints

In order for user authentication to work, we need to open up a single Rock REST endpoint. The `People/GetCurrentPerson` endpoint is used extesivly by Apollos to perform user authentication, and needs to be opened up so any user can call that endpoint (not just our API user.)

### Steps to Unlock

1. Visit the Admin Tools -> Security Page
   ![step1](/docs/assets/rock-setup/cu-step1.png)
2. Click on the "Rest Controllers" block
   ![step2](/docs/assets/rock-setup/cu-step2.png)
3. Find and open the People Controller. It might not be on the first page.
   ![step3](/docs/assets/rock-setup/cu-step3.png)
4. From the People Controller, select the `GetCurrentPerson` endpoint security settings.
   ![step4](/docs/assets/rock-setup/cu-step4.png)
5. From the "View" tab, select "Add Role"
   ![step5](/docs/assets/rock-setup/cu-step5.png)
6. Select "All Users" from the dropdown.
   ![step6](/docs/assets/rock-setup/cu-step6.png)
7. With "All Users" and the "View" checkbox checked, click "Add"
   ![step7](/docs/assets/rock-setup/cu-step7.png)

## Configuring Content Channels

(todo)
