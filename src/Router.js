import React from 'react'
import { Scene, Router } from 'react-native-router-flux'
import LoginForm from './components/LoginForm'
import PetList from './components/PetList'

const RouterComponent = () => {
  return (
    <Router>
      <Scene hideNavBar>
        <Scene key='auth'>
          <Scene key='loginForm' component={LoginForm} title='Login' />
        </Scene>
        <Scene key='main'>
          <Scene
            rightTitle='Add'
            onRight={() => console.log('right!')}
            key='petList'
            component={PetList}
            title='Pets'
            initial/>
        </Scene>
      </Scene>
    </Router>
  )
}

export default RouterComponent
