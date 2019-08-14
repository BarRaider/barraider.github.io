# StreamDeck OBS Tools
 Advanced OBS commands and tools to use on your Elgato Stream Deck

**Author's website and contact information:** [https://barraider.github.io](https://barraider.github.io)

## Features:
- Instant Replay Action - Click to save the last seconds of your stream to your OBS "Recordings" folder.
  - **NEW** - Instant Replay can now be set to automatically play on your stream!
  - Long-Press the button to toggle whether the Instant Replay buffer is recording or not
- Dropped Frames Alarm - Shows the current amount of dropped frames and starts alerting if it increases.
  - Choose between 3 different dropped frame types: Dropped Frames, Output Skipped Frames, Render Missed Frames
  - You can now customize the color of the alert
- OBS CPU Usage - Shows how much CPU is being utilized by OBS
- Previous Scene Action - Allows you to switch back to your previously used scene. Writes the name of the scene on the key.

# INSTALLATION
**Important:** You must download and install obs-websocket before using this plugin. [Install from here]( https://github.com/Palakis/obs-websocket/releases/download/4.6.1/obs-websocket-4.6.1-Windows-Installer.exe)

2. After installing, enable from inside OBS: Tools -> WebSockets Server Setting 
[You can keep the port as is, but It is ***highly recommended you Enable authentication and set a password***]

3. For instant replay to work, you must check the **Enable Replay Buffer** from `File->Settings->Output->Recording`
3b. To have the Instant Replay show automatically on your Stream, create a new `Media Source` in OBS. Then on the Stream Deck enable `"Auto Replay"` and input the name of that new source in the relevant setting (along with the other required fields).

## Usage
OBS must be streaming for the majority of the features to work
For instant replay to work, you must check the **Enable Replay Buffer** from `File->Settings->Output->Recording`

### Download

* [Download plugin (Discord)](https://discord.gg/sHsKXhM)

## I found a bug, who do I contact?
For support please contact the developer. Contact information is available at https://barraider.github.io

## I have a feature request, who do I contact?
Please contact the developer. Contact information is available at https://barraider.github.io

## Dependencies
* Uses StreamDeck-Tools by BarRaider: [![NuGet](https://img.shields.io/nuget/v/streamdeck-tools.svg?style=flat)](https://www.nuget.org/packages/streamdeck-tools)
* Uses [Easy-PI](https://github.com/BarRaider/streamdeck-easypi) by BarRaider - Provides seamless integration with the Stream Deck PI (Property Inspector) 