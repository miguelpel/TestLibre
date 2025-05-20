
This app was build using EXPO.

To run the app, you'll need access to the expo build, and have an Android device connected to your PC, with the application EAS installed.

link to the expo build:
https://expo.dev/accounts/mpel/projects/leTestLibre/builds/e5916fc7-b8df-4666-a373-457b3a5b3487

Link for a device:
https://expo.dev/accounts/mpel/projects/leTestLibre/builds/e5916fc7-b8df-4666-a373-457b3a5b3487


To run development build, you'll need to start a developpment server.

First install all teh dependencies:
``npm i``

And then lounch the development server:
``npx expo start``


Alternatively, Use EAS CLI
Your teammate can also download and install the development build using EAS CLI. They have to make sure that they are signed from the Expo account associated with the development build and then can run the following command:
``eas build:run --profile development``

Build process:

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

To create a .apk:
In eas.json, make sure that developmentClient is set to true under build.development profile.
Then, run the eas build command with android as the platform and development as the build profile:

You want to build a development client build for platforms: Android
However, we detected that you don't have expo-dev-client installed for your project.
You'll need to install expo-dev-client manually:
npx expo install expo-dev-client

build:
``eas build --platform android --profile development``


Using Expo Orbit

install expo Orbit:
https://expo.dev/orbit

Expo Orbit allows for seamless installation of the development build on an Android device. To use this method:
- Connect our Android device to our local machine using USB.
- Open the Orbit menu bar app.
- Select the Device in the Orbit app.

On the Expo dashboard, under Build artifact, click the Open with Orbit.