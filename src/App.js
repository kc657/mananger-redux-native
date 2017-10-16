import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import firebase from 'firebase'
import reducers from './reducers'
import LoginForm from './components/LoginForm'

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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))

    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    )
  }
}
