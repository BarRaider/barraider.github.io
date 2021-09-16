# StreamDeck OBS Tools
 Advanced OBS commands and tools to use on your Elgato Stream Deck

**Author's website and contact information:** [https://barraider.com](https://barraider.com)

# INSTALLATION
1. As a prerequisite, you must download and install obs-websocket v4.9.1 before using this plugin. [Click here to install]( https://github.com/Palakis/obs-websocket/releases/tag/4.9.1) (Choose the "Windows Installer" version at the bottom) 

<b><font color='red'>DO NOT INSTALL OBS-WEBSOCKET VERSION 5.0 OR LATER, IT WILL NOT WORK!</font></b>

2. After installing, enable from inside OBS: `Tools -> WebSockets Server Setting`  
2b. **NOTE:** The latest versions of OBS Websocket requires setting a password. Please set one in the same place stated above.  
[You can keep the port as is]  

3. For instant replay to work, you must check the **Enable Replay Buffer** from `File->Settings->Output->Recording`    
3b. To have the Instant Replay show automatically on your Stream, create a new `Media Source` in OBS. Then on the Stream Deck enable `"Auto Replay"` and input the name of that new source in the relevant setting (along with the other required fields).

4. After  following the steps above, drag one of the OBS Tools actions on to your Stream Deck and follow the setup wizard's instructions. (You'll need the port and password set in step 2)

## Features:
- `Smart Scene Switcher`  - Easily switch scenes between Preview/Studio (if enabled)  and Live modes. 
  - Shows a border on the scene indicating if it's in preview or live
  - **See a Preview of how the scene will look on the Stream Deck key**
- `Source Animation` action! Create cool transitions and effects for your sources with one click!! 
    - Phases allow multi-phased animations, without the need of a multi-action
	- Easily create animation with the `RECORD` feature: 1. Place source at starting position, then press 'Record'. 2. Move/Modify source to end result and then press 'End Recording' => The plugin will automatically calculate and input the changes.
	- Import/Export Settings allows you to share your animations (or keep a backup)
    - Options to hide source/remove filter at various stages
- `Studio Mode Toggle` action allows you to quickly toggle Studio/Preview mode on and off.
- `Instant Replay` Action - Click to save the last seconds of your stream to your OBS "Recordings" folder.
  - Long-Press the button to toggle whether the Instant Replay buffer is recording or not
- `Video Player` allows using the same source to display different media files
- Support for modifying the speed of Videos/Instant Replay (great when you want to do a slow mo)
- `Source Volume` allows increasing/decreasing/setting the volume of an audio source
- `Dropped Frames Alarm` - Shows the current amount of dropped frames and starts alerting if it increases.
  - Choose between 3 different dropped frame types: Dropped Frames, Output Skipped Frames, Render Missed Frames
  - You can now customize the color of the alert
- OBS `CPU Usage` - Shows how much CPU is being utilized by OBS
- `Previous Scene` Action - Allows you to switch back to your previously used scene. Writes the name of the scene on the key.
- ***Twitch Integration***
	- Let your chat to type !replay and trigger an instant replay which is shown on stream
    - Instant Replay can now also create a Twitch Clip for you, and post it on chat
    - Instant Replay can now create a Twitch Clip even if the replay buffer is off
- `Browser Sources` can now be modified using the Stream Deck
- `Remote Recording Toggle` to toggle recording from a remote PC (if your Stream Deck is not connected to your Streaming PC)
- `Remote Streaming Toggle` to stop/start streaming from a remote PC (if your Stream Deck is not connected to your Streaming PC)
- `Set Transition` allows you to modify the default scene transition from the Stream Deck
- `Filter Toggle` allows you to enable/disable filters on a source from the Stream Deck.



## Usage
OBS must be streaming for some of the features to work.  
For instant replay to work, you must check the **Enable Replay Buffer** from `File->Settings->Output->Recording`

### Download

* [Download plugin (Discord)](http://discord.barraider.com)

## I found a bug, who do I contact?
For support please contact the developer. Contact information is available at https://barraider.com

## I have a feature request, who do I contact?
Please contact the developer. Contact information is available at https://barraider.com

## Dependencies
* Uses StreamDeck-Tools by BarRaider: [![NuGet](https://img.shields.io/nuget/v/streamdeck-tools.svg?style=flat)](https://www.nuget.org/packages/streamdeck-tools)
* Uses [Easy-PI](https://github.com/BarRaider/streamdeck-easypi) by BarRaider - Provides seamless integration with the Stream Deck PI (Property Inspector) 