# RNBugRepro1

## Context:
- this is a React Native reproducer app, demonstrating calling a C++ api from JS and custom JS events being emitted from the native side
- app runs fine on Android API 27 (Oreo 8.1) and up
- app also runs fine on iOS 18.x
- app runs on React Native 0.76, with New Architecture enabled
- the native turbo module was scaffolded using `npx create-react-native-library@latest react-native-calcturbo`
- a custom event was then added following this doc: https://github.com/reactwg/react-native-new-architecture/blob/main/docs/turbo-modules.md

## Bug report
### Behavior

- when deploying to an Android **API 26** simulator or device the app crashes upon startup with:
  ```
  java_vm_ext.cc:504] JNI DETECTED ERROR IN APPLICATION: JNI IsAssignableFrom called with pending exception java.lang.NoSuchMethodError: no non-static method "Lcom/calcturbo/CalcturboModule;.setEventEmitterCallback(Lcom/facebook/react/bridge/CxxCallbackImpl;)V"
  ```
### Remarks
  - the crashes started happening when adding the support for events
  - before events were added the app started just fine on API 26 and the native C++ functions could be called from JS

### To reproduce on mac with android simulator
  - prerequisites: Android SDK 35 was installed and RN apps can be built on your mac

  - clone the git repo

  - `cd ./ReproducerApp`

  - if not installed yet, install yarn with `npm i -g yarn`

  - `yarn`

  - start an android simulator with api 26 (Oreo 8.0)

  - `npx react-native run-android`
    - should build and then crash the app on the simulator with errors mentioned above

  - switch to another android simulator with api 27 (Oreo 8.1)

  - `npx react-native run-android`
  - should build and run fine
