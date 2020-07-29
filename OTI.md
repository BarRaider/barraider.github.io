# OBS Twitch Integration (OTI) Server
Take your stream one step forward!

**Author's website, support, and contact information:** [https://barraider.com](https://barraider.com)
(See Installation instructions below)

## Features:
- React to multiple triggers: New Followers, New Subscribers, Cheers/Bits, Redemption of Channel Points, Chat Commands
- `Animation Support` - Use along with the [OBS Tools](https://github.com/BarRaider/streamdeck-obstools) Animation plugin to easily create cool animations
- `Video Support` - Play videos on stream
- `Text File Support` - Write the name of the user into a text file and show it on stream for a more personal experience
- `Chat Messages` - Write a customizable chat message to the user
- `Audio Support` - Play sounds (or just a random sound) using [SoundPad](https://store.steampowered.com/app/629520/Soundpad/) (SoundPad trial version is NOT supported)

# INSTALLATION
Prerequisites: 
1. **Important:** You must download and install obs-websocket before using this plugin. [Click here to install]( https://github.com/Palakis/obs-websocket/releases/latest) (Choose the "Windows Installer" version at the bottom) 
2. Generate an OAuth Token by pressing [this link](https://id.twitch.tv/oauth2/authorize?client_id=y3yk54abnbukoqudvdflrnrrvrvmh3&redirect_uri=https://BarRaider.com/twitchauth&response_type=token&scope=channel_feed_read%20chat:read%20chat:edit%20whispers:read%20whispers:edit%20clips:edit%20channel_editor%20channel:moderate%20channel_commercial%20user:edit:broadcast%20bits:read%20channel_subscriptions%20channel:read:redemptions) and approving access. Keep track of the code shown in the blue box, you'll need it in step 3 below.

1. Download the latest OTI version from our [Discord](http://discord.barraider.com)
2. Unzip to a new directory
3. Open the `OTI.exe.config` to add your Twitch OAuth token and OBS WebSockets settings:
	- Put the token you got above (in the Prerequisites section) in the `TwitchOAuth` setting
	- Put the OBS WebSockets server password in the `OBSServerPassword` setting
	<img src="/images/oti1.png"/>  
4. Launch `OTI.exe` and click the logo to open the settings menu

### Download

* [Download from Discord](http://discord.barraider.com)

## I found a bug, who do I contact?
For support please contact the developer. Contact information is available at https://barraider.com

## I have a feature request, who do I contact?
Please contact the developer. Contact information is available at https://barraider.com
