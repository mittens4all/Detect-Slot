# Detect Slot

Minecraft Bedrock 1.21.90+ behavior pack, detects which hotbar slot a player selects and assigns the corresponding value to a scoreboard objective. You can use the scores target selector argument in your own commands.

## Installing the pack:

You may dowload the latest release from the [Releases Page](https://github.com/mittens4all/Detect-Slot/releases)

Add the Detect Slot add-on to your behavior packs on your world. Behavior packs may disable achievements, but editing the world with an NBT editor can re-enable achievements when uploading your world to a realm.

Re-enable achievements on either pc or mobile with the free NBT editor [Dovetail](https://github.com/Offroaders123/Dovetail)

## How to Use

You can target players using the scores selector argument in your commands:

```yaml
# Target players who have selected the first slot of the hotbar
execute as @a[scores={detect:slot=1}] run <command>
```

```yaml
# Target players who have selected the last slot of the hotbar
execute as @a[scores={detect:slot=9}] run <command>
```

## Author

- [@mittens4all](https://www.github.com/mittens4all)
- [Youtube](https://www.youtube.com/@mittens4all)


```js
       _                              _     _       _ _  
      (_)  _     _                   | |   | |     | | | 
 ____  _ _| |_ _| |_ _____ ____   ___| |___| |_____| | | 
|    \| (_   _|_   _) ___ |  _ \ /___)_____  (____ | | | 
| | | | | | |_  | |_| ____| | | |___ |     | / ___ | | | 
|_|_|_|_|  \__)  \__)_____)_| |_(___/      |_\_____|\_)_)
                                                         
```