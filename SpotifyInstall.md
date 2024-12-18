##### [For the rest of my projects and contact information, [click here](https://barraider.com/)]
<img src="/images/spotlogo.png" height="63" width="120"/>

# Spotify Plugin for the Elgato Stream Deck

## Installation
Please follow the step-by-step instructions below to create your own Spotify Developer Application. (**Client ID** & **Client Secret**)<br>

**Reminder:** Do **NOT** share your Client ID or Client Secret with anybody!

### ***The plugin WILL NOT WORK if you skip a step! Follow the steps slowly, ensuring everything is done!***

1. Open <a href="https://developer.spotify.com/dashboard/" target="_blank">https://developer.spotify.com/dashboard/</a> and Login with your account. (**Spotify Premium** is required)

2. Choose to "Create An App" on the Developer Dashboard.<br>
    <img src="/images/spotauth1.png"/><br>

3. Give your App a unique name and description. (these can be set to anything of your choice)<br>

    Select the checkboxes at the bottom and click **CREATE**.<br>
    <img src="/images/spotauth2b.png"/><br>
    
4. Congrats! You have created your App! Now click `Edit Settings` to add a few necessary details.<br>
    <img src="/images/spotauth5.png"/><br>
    
5. Enter `http://localhost:4202` in the `Website` field. (copy & paste the url to ensure it's correct)<br>
    <img src="/images/spotapp1b.png"/><br>
    
6. Enter `http://localhost:4202` in the `Redirect URIs` field and then click `Add` before proceeding.<br>
    <img src="/images/spotapp2b.png"/><br>
    
7. Compare your App settings with ours below. If the `Website` or `Redirect URI` is any different, make changes before saving.<br>
    <img src="/images/spotapp3b.png"/><br>
    
   **Note:** The `Save` button *may* reappear. If it does, click it again to save your changes and return to the Dashboard.
   
8. On the left hand side, you'll now be able to reveal your **Client ID** and **Client Secret** which you'll now need.<br>
    <img src="/images/spotauth8.png"/><br>
    
    Copy & Paste both the **Client ID** and **Client Secret** into the relevant fields in the plugin's Setup Wizard.<br>
    
    **Reminder:** Do **NOT** share your Client ID or Client Secret with anybody!
    
9. That's it! Continue with the instructions in the plugin's Setup Wizard.

10. Once the **entire** setup is complete, ensure you have the `Play/Pause` action on your Stream Deck and your device is selected!<br>

Failing to do so will result in an alert (⚠️) symbol when the key is pressed, or a red connection symbol as shown in the image below.<br>
    <img src="/images/spothelp3.png"/><br>

Please note, if you don't see your device listed... play a track inside of Spotify on the device and whilst it's playing click the "Reload devices" button under the Play/Pause key.

### COMMON ISSUES

1. I get `INVALID_CLIENT: Invalid Client URI` when I try to view my Approval Code. **Why?!**

    Please see **Step 6** above...
    
2. My device isn't displaying in the Device dropdown. **Why?!**

    Play a track on the device of your choice, and *then* hit `reload devices` and it *should* then appear.
    
Please note, not __ALL__ devices will be recognised, simply because Spotify's API doesn't support them. For example, [SONOS](https://www.sonos.com/en-us/home).

## **DONATIONS**

A lot of time, effort (and coffee) went into making this plugin work again. Donations are unnecessary but very much appreciated (and will help buy MORE coffee :)).<br>
    <b><a href="https://patreon.com/BarRaider">BarRaider's Patreon</a></b><br>
    
<hr>

[If you still have problems, feel free to contact me using the methods below]

### Please follow me for the latest project updates and twitch streams:  
<div align="center">
<a href="https://www.twitch.tv/barraider/" alt="@BarRaider"><img src="/images/twitch.png" height="32" width="32"/></a> 
<a href="https://twitter.com/realBarRaider" alt="@realBarRaider"><img src="/images/brtwit.png" height="32" width="32"/></a> 
</div>

### For help, ideas and feature requests join my [Discord channel](http://discord.barraider.com) <a href="http://discord.barraider.com"><img src="/images/discord.png" class="discord-img" height="32" width="32"></a>
