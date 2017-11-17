# Kitchensink/Boilerplate for Cordova-PhoneGap-Babel-React-Hotloader-Webpack-Framework7-Firestore-FontAwesome
![](https://img.shields.io/github/issues/vonubisch/Cordova-PhoneGap-Babel-React-Hotloader-Webpack-Framework7-Firestore-FontAwesome.svg) ![](https://img.shields.io/github/forks/vonubisch/Cordova-PhoneGap-Babel-React-Hotloader-Webpack-Framework7-Firestore-FontAwesome.svg) ![](https://img.shields.io/github/stars/vonubisch/Cordova-PhoneGap-Babel-React-Hotloader-Webpack-Framework7-Firestore-FontAwesome.svg) ![](https://img.shields.io/github/license/vonubisch/Cordova-PhoneGap-Babel-React-Hotloader-Webpack-Framework7-Firestore-FontAwesome.svg)

Template for ready-to-use hybrid mobile apps with native look.

## Preview
Android                    |  iOS
:-------------------------:|:-------------------------:
![Material](https://raw.github.com/vonubisch/Cordova-PhoneGap-Babel-React-Hotloader-Webpack-Framework7-Firestore-FontAwesome/master/res/demo/preview-android.png)  |  ![iOS](https://raw.github.com/vonubisch/Cordova-PhoneGap-Babel-React-Hotloader-Webpack-Framework7-Firestore-FontAwesome/master/res/demo/preview-ios.png)

## Tools
- [NodeJS](https://nodejs.org/) - *see all of below*
- [Apache Cordova](https://cordova.apache.org/) - *to compile to iOS and Android Apps*
- [Adobe PhoneGap](https://phonegap.com/) - *some juicy Cordova tools*
- [React](https://reactjs.org/) - *DOM ninja*
- [React Hotloading](https://github.com/gaearon/react-hot-loader) - *No more F5*
- [Babel](https://github.com/babel/babel) - *for sexy JS*
- [Firestore](https://firebase.google.com/docs/firestore/) - *store files and data*
- [Webpack](https://github.com/webpack/webpack) - *Pack it up*
- [ESlint](https://github.com/eslint/eslint) - *only pretty code*
- [Framework7](https://github.com/bencompton/framework7-react) - *CSS framework native iOS/Android*
- [FontAwesome](https://github.com/FortAwesome/Font-Awesome) - *good old icons*

## Start application
Setup Firestore configuration in `/src/config/firebase.config.js`

Initialize project in folder `my-app`:
```
git clone git@github.com:vonubisch/Cordova-PhoneGap-Babel-React-Hotloader-Webpack-Framework7-Firestore-FontAwesome.git my-app
```
Install dependencies:
```
npm install
```
Compile and start server:
```
npm run start
```
Open browser at:
```
http://localhost:8080
```
## Build app for production
Add Cordova platforms:
```
cordova platform add android
cordova platform add ios
cordova platform add browser
```
Build app:
```
npm run build [ -- ios || android]
npm run prepare -- ios
npm run prepare -- android
```
Now your `config.xml` switches file to production mode.
It will build the app bundle to `www` using Webpack and run `cordova build` for you.

Start PhoneGap server:
`phonegap serve`

Now you can use the [PhoneGap Developer App](http://docs.phonegap.com/getting-started/2-install-mobile-app/) or browser to view your app.
Use [PhoneGap Build](https://build.phonegap.com/) `CLI` or `Cloud` tools to build for production.

## Repo's used
- [framework7-react-app-template](https://github.com/bencompton/framework7-react-app-template)
- [phonegap-template-react-hot-loader](https://github.com/phonegap/phonegap-template-react-hot-loader)