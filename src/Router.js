import React from 'react'
import { Scene, Router } from 'react-native-router-flux'
import LoginForm from './components/LoginForm'
import EmployeeList from './components/EmployeeList'

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
            key='employeeList'
            component={EmployeeList}
            title='Employees'

            initial/>
        </Scene>
      </Scene>
    </Router>
  )
}

export default RouterComponent
