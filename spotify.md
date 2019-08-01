###### [For the rest of my projects and contact information, [click here](https://barraider.github.io) ]

<img src="/images/spotlogo.png" height="63" width="120"/> 
# Spotify Plugin for the Elgato Stream Deck

## New in v1.7
* `Playlist Start` action now shows the image of the playlist on the Stream Deck key!
* `Play/Pause` key allows to customize both the play and the pause images
* Customizable images for Shuffle button
* Customizable images for Repeat button
* Shuffle support in Multi Action
* Reduced frequency of authentication requests
* Introduced a caching mechanism that should reduce the amount of API calls to Spotify

## Current Features:
- Plugin is now split into multiple actions. This was done as part of a major overhaul to reduce loading time
- When adding a song to a playlist will now check if the song does not already exist
- Mute/Unmute now remembers the volume level before it was muted and sets it back when pressed again
- Brand new installation wizard pops up when a new approval code is needed
- New Play / Pause support as part of Multi-Action
- Plugin will stop working and display error if account is not premium
- Time to load plugin is now greatly reduced
- All actions now support adding a custom image
- The Play/Pause toggle key now shows the currently playing song's cover image and title
- Added new action "Save song to Playlist" which (if the name wasn't clear enough..) saves the current song to a playlist of your choice
- Ability to enable/disable showing song's cover image, title, elapsed time on the Play/Pause toggle key
- "Start Playlist" action was renamed to "Playlist Start" and moved higher up in the actions list
- The "Playlist Start" action now supports choosing a device to start playing on (It is highly recommended that the "device" setting is set)

### Usage

Please note, to use this plugin you need to authorize this app to communicate with your Spotify account. After installing the plugin, drag it to your Stream Deck and click on the button to enable the setup wizard.

Choosing a Device in the Play, Play/Pause Toggle or "Start Playlist" actions is **REQUIRED**. Failure to do so may result in not being able to control Spotify until you manually start playing on the device.
### Help! Nothing happens when I click the buttons
If you have multiple devices configured in Spotify, and none of them are playing, you will need to first choose which device to control. Make sure Spotify is loaded on the device you want to control (and preferably playing) and drag a new Spotify action to your Stream Deck. Choose the "Play" action and then choose that device under the "Device" field. If done correctly, the key's icon on Stream Deck should change. Click the button on your Stream Deck and it will start playing on the chosen device.
[If you still have problems, feel free to contact me using the methods below]

### Please follow me for the latest project updates and twitch streams:  
<div align="center">
<a href="https://www.twitch.tv/barraider/" alt="@BarRaider"><img src="/images/twitch.png" height="32" width="32"/></a> 
<a href="https://twitter.com/realBarRaider" alt="@realBarRaider"><img src="/images/brtwit.png" height="32" width="32"/></a> 
</div>
### For help, ideas and feature requests join my [Discord channel](https://discord.gg/sHsKXhM) <a href="https://discord.gg/sHsKXhM"><img src="/images/discord.png" class="discord-img"></a>

### Download

* Plugin is now available to download straight from the Stream Deck store (Press the "More Actions" button on the Bottom-Right of the Stream Deck app).

