###### [For the rest of my projects and contact information, [click here](https://barraider.com) ]

<img src="/images/spotlogo.png" height="63" width="120"/> 
# Spotify Plugin for the Elgato Stream Deck

## Installation
Please follow these step-by-step instructions to create your own Client Id and Client Secret. These are required to authenticate the plugin.  
**Remember:** Never share your Client Id or Secret with anyone!!!

### ***If you skip a step or not do it exactly as indicated IT WILL NOT WORK!***

1. Open <a href="https://developer.spotify.com/dashboard/" target="_blank">https://developer.spotify.com/dashboard/</a> and Login with the account you have **Spotify Premium** on.  
2. Choose to "Create an App" from the Dashboard.  
    <img src="/images/spotauth1.png"/>  
3. If you see the LEFT image go to 3.a, if you see the RIGHT image go to 3.b  

| 3a | 3b |  
| ![](/images/spotauth2b.png)  |  ![](/images/spotauth2.png) |  

   3a. If you see the LEFT picture above, Give your app a unique name and description (It can be your name or anything else you prefer). Select both checkboxes at the bottom and click CREATE. Then <b>Move to step 6</b>  
   3b. If you see the RIGHT picture above. Give your app a unique name and description (It can be your name or anything else you prefer). Choose `Desktop Application` from the checkboxes. Then press the `Next` button.      
4. We are creating a `Non-Commercial` app, so choose that option.  
    <img src="/images/spotauth3.png"/>  
5. Accept the terms related to creating Non-Commercial apps. Enable all 3 checkboxes and press `Submit`  
    <img src="/images/spotauth4.png"/>  
6. Congrats! You created an app. Now press `Edit Settings` to add important additional details.  
    <img src="/images/spotauth5.png"/>  
7. Enter the following URL in the `Website` field. (ensure you copy/type it out correctly without any spaces)  
   * Website URL: **https://spotauth.github.io** (see image below **before** proceeding to Step 8a)
	<img src="/images/spotapp1.png"/>  
8. Enter the same URL in the `Redirect URIs` field. (ensure you copy/type it out correctly without any spaces)  
   * Redirect URIs: **https://spotauth.github.io** (see image below **before** proceeding to Step 8b)  
    <img src="/images/spotapp2.png"/>  
8b. Once you have entered the URL into the Redirect URIs field, ensure you click `Add` before proceeding.  
   * At this point, your settings should look like so. (see image below **before** proceeding to Step 9)  
   <img src="/images/spotapp3.png"/>  
9. Verify that the Website and Redirect URIs look exactly like the  image below and press `Save`. NOTE: The Save button may reappear. Press it again until you get back to the app dashboard.  
    <img src="/images/spotauth7.png"/>  
10. On the left side you should now be able to reveal the Client Id and Client Secret. Copy-Paste both to the relevant fields in the plugin. Make sure you do not copy any additional spaces.  
**Remember:** Never share your Client Id or Secret with anyone!!!  
    <img src="/images/spotauth8.png"/>  
11. That's It! Continue with the instructions in the plugin.  

### **DONATIONS**  
A lot of time, effort (and coffee) went into making this plugin work again. Donations are unnecessary but very much appreciated (and will help buy MORE coffee :)).  
    <b><a href="https://paypal.me/BarRaider">BarRaider's Paypal</a></b>


### COMMON ISSUES
- I get a `INVALID_CLIENT: Invalid Client URI`
	- See step 7 above...

<hr/>

[If you still have problems, feel free to contact me using the methods below]

### Please follow me for the latest project updates and twitch streams:  
<div align="center">
<a href="https://www.twitch.tv/barraider/" alt="@BarRaider"><img src="/images/twitch.png" height="32" width="32"/></a> 
<a href="https://twitter.com/realBarRaider" alt="@realBarRaider"><img src="/images/brtwit.png" height="32" width="32"/></a> 
</div>

### For help, ideas and feature requests join my [Discord channel](http://discord.barraider.com) <a href="http://discord.barraider.com"><img src="/images/discord.png" class="discord-img" height="32" width="32"></a>

