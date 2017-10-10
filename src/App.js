import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import firebase from 'firebase'
import reducers from './reducers'

export default class App extends Component {
  componentWillMount () {
    const config = {
      apiKey: 'AIzaSyAzGkkgIGDgOJO0QGGgz2DPCZ0Jp6VU6bA',
      authDomain: 'manager-ce4cc.firebaseapp.com',
      databaseURL: 'https://manager-ce4cc.firebaseio.com',
      projectId: 'manager-ce4cc',
      storageBucket: 'manager-ce4cc.appspot.com',
      messagingSenderId: '716976161579'
    }
    firebase.initializeApp(config)
  }
  render () {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>
            Hello
          </Text>
        </View>
      </Provider>
    )
  }
}
