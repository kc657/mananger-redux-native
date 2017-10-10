import React, { Component } from 'react'
import { Card, CardSection, Button, Input } from './common'

export default class LoginForm extends Component {
  render () {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="email@example.com"
          />
        </CardSection>

        <CardSection>
        <Input
          label="Password"
          placeholder="password"
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
