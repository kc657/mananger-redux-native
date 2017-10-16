import React, { Component } from 'react'
import {Text} from 'react-native'
import  { connect } from 'react-redux' //bridge react and redux using this package
import { emailChanged, passwordChanged, loginUser } from '../actions'
import { Card, CardSection, Button, Input, Spinner } from './common'

class LoginForm extends Component {
  onEmailChange = (text) => {
    this.props.emailChanged(text)
  }

  onPasswordChange = (text) => {
    this.props.passwordChanged(text)
  }

  onButtonPress = () => {
    const {email, password} = this.props
    this.props.loginUser({email, password})
  }

  renderButton = () => {
    if (this.props.loading) {
        return (
          <Spinner size="large" />
        )
    }
    return (
      <Button onPress={this.onButtonPress}>
        Login
      </Button>
    )
  }


  render () {
    return (
      <Card>
        <CardSection>
          <Input
            label='Email'
            placeholder='email@example.com'
            onChangeText={this.onEmailChange}
            value={this.props.email}
          />
        </CardSection>

        <CardSection>
          <Input
            label='Password'
            placeholder='password'
            isPassword
            onChangeText={this.onPasswordChange}
            value={this.props.password}
        />
        </CardSection>

        <Text style={styles.errorTextStyle}>
          {this.props.error}
        </Text>

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    )
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
}

const mapStateToProps = ({auth}) => {
  const { email, password, error, loading } = auth
  return { email, password, error, loading}
}

export default connect(mapStateToProps, {
  emailChanged, passwordChanged, loginUser
})(LoginForm)
