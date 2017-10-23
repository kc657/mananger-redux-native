# [Faster Foster](https://www.youtube.com/watch?v=e2WpYP1qI_o) (Click Here For Video Demo)


Faster Foster is a React Native/Redux application that runs on both iOS and Android. I recently joined a foster care program at [Berkeley Humane](https://berkeleyhumane.org/Foster) where I picked up two amazing kittens named Zeus and Hera. The shelter required foster volunteers to keep a record of the kittens' weight and communicate it with the shelter on a regular basis. In addition, I also had to set up checkups at the shelter on a regular basis. I wanted to create an application that can expedite this process for both the volunteer and Berkeley Humane. The end goal of this application is to help volunteer quickly input the information, communicate it efficiently with the shelter, and give shelter the data in a visual format.

The current MVP has these following features:
- Authentication using Google's Firebase
- User can add foster pets to their personal list and input information such as weight and scheduled checkup dates
- User can edit the weight on a daily basis
- User can send a text message with all the information about the pet neatly formatted with one-click (texting is not supported in Xcode simulator)
- User can delete the pet from their list once it has been successfully adopted

Theses are the features I will implement next:
- Send the data to Berkeley Humane about the pet in a visual format
- Write an algorithm that detects large deviation of weight and notifies the shelter if such deviation occurs
- Allow users to input their own photos of the pet (currently a static image)


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

Clone this repository onto your local machine:
```
$ git clone https://github.com/kc657/mananger-redux-native.git
```
CD into the directory and run NPM install:
```
$ npm install
```
Start the iOS application with Xcode:
```
$ react-native run-ios
```

## Built With
* [React Native](https://facebook.github.io/react-native/)
* [Redux](http://redux.js.org/)
* [Firebase](https://firebase.google.com/)
* [React-Thunk](https://github.com/gaearon/redux-thunk)
* [React Native Router Flux](https://github.com/aksonov/react-native-router-flux)
* [React Redux](https://github.com/reactjs/react-redux)
* [React Native Communications](https://github.com/anarchicknight/react-native-communications)


## Authors

* **Kevin Chen** - *Full Stack Developer* - [Personal Webpage](https://compilekev.in)<span/>/[LinkedIn](https://www.linkedin.com/in/kc657)
