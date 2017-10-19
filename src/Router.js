import React from 'react'
import { Scene, Router, Actions } from 'react-native-router-flux'
import LoginForm from './components/LoginForm'
import PetList from './components/PetList'
import PetCreate from './components/PetCreate'

const RouterComponent = () => {
  return (
    <Router>
      <Scene hideNavBar>

        <Scene key='auth'>
          <Scene key='loginForm' component={LoginForm} title='Login' />
        </Scene>

        <Scene key='main'>
          <Scene
            key='petList'
            component={PetList}
            title='Pets'
            rightTitle='Add'
            onRight={() => Actions.petCreate()}
            initial
          />
          <Scene
            key='petCreate'
            component={PetCreate}
            title='Create Pet'
          />
        </Scene>

      </Scene>
    </Router>
  )
}

export default RouterComponent
