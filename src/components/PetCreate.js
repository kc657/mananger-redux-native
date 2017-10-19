import React, { Component } from 'react'
import { Card, CardSection, Button, Input, Spinner } from './common'

class PetCreate extends Component {
  onNameChange = () => {
    
  }

  render () {
    return(
      <Card>
        <CardSection>
          <Input
            label="Name"
            placeholder="Zeus"
          />
        </CardSection>

        <CardSection>
          <Input
            label="Phone"
            placeholder="555-555-5555"
          />
        </CardSection>

        <CardSection>
        </CardSection>

        <CardSection>
          <Button>
            Create
          </Button>
        </CardSection>
      </Card>
    )
  }
}

export default PetCreate
