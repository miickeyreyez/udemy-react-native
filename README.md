# Installing cli
- npm i -g react-native-cli

# Installing react devtools
- sudo npm install -g react-devtools@3 -unsafe-perm=true
- npm install -d react-devtools

# Creating a new project
- npx react-native init project_name

# Running the project
- npx react-native run-ios
- npx react-native run-android

# List android emulators
- emulator -list-avds
- adb devices

# Run emulator
- emulator -avd Pixel_3a_API_30_x86

# Run device
- adb -s device_name reverse tcp:8081 tcp:8081


# Scroll view: load all info in memory
# Flat list: load only visible information and re-render
