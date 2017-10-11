import React, { Component } from 'react'
import  { connect } from 'react-redux' //bridge react and redux using this package
import { emailChanged } from '../actions'
import { Card, CardSection, Button, Input } from './common'

class LoginForm extends Component {
  onEmailChange = (text) => {
    this.props.emailChanged(text)
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
        />
        </CardSection>

        <CardSection>
          <Button>
            Login
          </Button>
        </CardSection>
      </Card>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    email: state.auth.email
  }
}

export default connect(mapStateToProps, {emailChanged})(LoginForm)
