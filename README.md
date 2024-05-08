# Group Project: A Mobile App Focusing on Recycling Solutions

<br>
<br>

## Overview

<br>
<br>

## Installation

### Prerequisite
Ensure you have the following installed:
- [Node.js](https://nodejs.org/en/)

### Installing iOS Simulator or Android Emulator
For compatibility reasons, we recommend using the virtual device `iPhone 15 Pro Max with iOS 17.4` simulator on Macs, or the virtual device `Pixel 7a with API 34` Android emulator on both Macs and Windows.

#### iOS Simulator:
The iOS Simulator is a tool within Xcode that allows developers to test and debug iOS applications on Macs.
1. **Install Xcode:** Download and install Xcode from Mac App Store.
2. **Open Xcode:** Go to `Xcode > Settings > Platforms`, and install `iOS 17.4` from the list.

#### Android Emulator:
The Android Emulator is a tool within the Android Studio that allows developers to test and debug Android applications on Macs or Windows.
1. **Install Android Studio:** Download and install [Android Studio](https://developer.android.com/studio).
2. **Open Android Studio:** Go to `Configure > Virtual Device Manager`, and select `Pixel 7a API 34` from the list.
<br>
<br>

>**For Mobile Phone Users:** 
>- Install the Expo Go app on an iPhone 12 Pro Max or newer, or on a Pixel 7a or newer Android device, for compatibility reasons. Then, scan the QR code generated after starting the app.
>- Ensure your mobile phone and computer are connected to the same Wi-Fi network. Also, confirm that you have granted the Expo Go app Local Network permission in your device's settings app. Alternatively, consider using the tunnel connection option if connectivity issues persist.
<br>
<br>

### Cloning the Repository
To clone the repository, use the following command:
```bash
git clone https://github.com/UOA-CS732-SE750-Students-2024/project-group-happy-herons.git
```

### Installing Dependencies
After cloning the project, install the dependencies using npm:
```bash
cd Group-Happy-Herons-Project
npm install
```

### Starting the Application
After installing the dependencies, you can start the application with the following command:
```bash
npx expo start
```

And then, for iOS Simulator or Android Emulator, press `i` or `a` respectively to open the application in the respective simulator.

If everything is set up *correctly*, the application should appear in your *iOS Simulator* or *Android Emulator* shortly.
<br>
<br>

## Architecture

<br>
<br>

## Technologies Used

### Map and Marker
The Map and Marker components are responsible for rendering clothing recycling bins or major donation sites around Auckland with markers. These components are indispensable for displaying available clothing recycling resources in an integrated approach. They address the common problems highlighted in Reddit and Facebook discussions, where users are unable to find nearby recycle bins or donation sites.

The component primarily utilizes the React Native Maps library, identified as @react-native-maps. This library includes a MapView component for rendering maps within React Native applications. It supports various props to customize its appearance and behavior, such as "region" for controlling the displayed area of the map, and "onRegionChangeComplete" for handling events when the user stops moving the map. Additionally, it integrates the Marker component, which displays markers on the map at specified geographic coordinates, as demonstrated in the snippet below.
 ```bash
const MapScreen = () => {
  const [region, setRegion] = useState({
    latitude: -36.856331419193694,
    latitudeDelta: 0.5496386844501089,
    longitude: 174.7978861257434,
    longitudeDelta: 0.5907618999481201,
  });
...
const showingLocationsOfClothingBins = () => {
    return locationsOfClothingBins.map((item) => {
      return (
        <Marker
          key={item.id}
          coordinate={item.location}
          title={item.title}
          description={item.description}
          testData={`${item.id}`}
        />
      );
    });
  };
...
<MapView
          className="w-full h-[400px]"
          provider={PROVIDER_GOOGLE}
          region={region}
          onRegionChangeComplete={onRegionChange}
        >
          {showLocations()}
        </MapView>
```

### Tailwind CSS
We use NativeWind library to integrate Tailwind CSS directly into React Native. This library provides a universal styling system that facilitates a consistent design scheme across both web application using React and mobile applications using React Native.
To use this library, run the following command:
```bash
npm install nativewind
npm install --save-dev tailwindcss@3.3.2
```
To setup Tailwind CSS in the project, create a `tailwind.config.js` file in the root directory and modify `babel.config.js` to add the Babel plugin for Tailwind CSS. 
<br>
<br>

## Testing
In this project, unit testing is included to ensure the proper functioning of components and the correct rendering of content. We primarily use the `jest-expo` package, which is a Jest preset that mocks the native components of the Expo SDK and handles most of the configuration automatically.

In the Map and Marker section, our primary goal is to ensure that the components render without crashing and that the map and markers are displayed as expected.

The configuration for jest-expo is specified in the `jest.config.js` file, which sets the preset and module name mapper for the project. The test files are located in the `__tests__` directory, with each component having its own test file. For instance, the `MapScreen.test.js` file contains test cases specifically for the MapScreen component.

<br>
<br>

## Deploy Solution
<br>
<br>

## Project Management

<br>
<br>


## Authors - Team Happy Herons
[Xiangnan Lu](https://github.com/UOA-CS732-SE750-Students-2024/project-group-happy-herons/tree/ImgR), 
[Zheyang Cao](https://github.com/UOA-CS732-SE750-Students-2024/project-group-happy-herons/tree/database), 
[Jinquan Wen](https://github.com/UOA-CS732-SE750-Students-2024/project-group-happy-herons/tree/estore), 
[Xin Yue](https://github.com/UOA-CS732-SE750-Students-2024/project-group-happy-herons/tree/homeui), 
[Ze Yin](https://github.com/UOA-CS732-SE750-Students-2024/project-group-happy-herons/tree/mapandmarker), 
[Yan Li](https://github.com/UOA-CS732-SE750-Students-2024/project-group-happy-herons/tree/bins)
<br>
<br>

