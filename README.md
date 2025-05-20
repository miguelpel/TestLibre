

Using Expo Orbit

install expo Orbit:
https://expo.dev/orbit

Expo Orbit allows for seamless installation of the development build on an Android device. To use this method:
- Connect our Android device to our local machine using USB.
- Open the Orbit menu bar app.
- Select the Device in the Orbit app.


link to expo builds:
https://expo.dev/accounts/mpel/projects/leTestLibre/builds

https://expo.dev/accounts/mpel/projects/leTestLibre/builds/e5916fc7-b8df-4666-a373-457b3a5b3487


Use EAS CLI
Your teammate can also download and install the development build using EAS CLI. They have to make sure that they are signed from the Expo account associated with the development build and then can run the following command:
eas build:run --profile development


eas.json:
```
{
    "build": {
      "development": {
        "developmentClient": true,
        "distribution": "internal"
      },
      "preview": {
        "distribution": "internal"
      },
      "production": {}
    }
}
```

Eject:


To create a .apk:
In eas.json, make sure that developmentClient is set to true under build.development profile.
Then, run the eas build command with android as the platform and development as the build profile:

You want to build a development client build for platforms: Android
However, we detected that you don't have expo-dev-client installed for your project.
You'll need to install expo-dev-client manually:
npx expo install expo-dev-client

build:
eas build --platform android --profile development

On the Expo dashboard, under Build artifact, click the Open with Orbit.

Run development build:
npx expo start
