import React, { Component } from 'react'
import { connect } from 'react-redux'
import PetForm from './PetForm'
import { Card, CardSection, Button, Input, Spinner } from './common'

class PetUpdate extends Component {
  render () {
    return (
      <Card>
        <PetForm />
        <CardSection>
          <Button>
            Save Changes
          </Button>
        </CardSection>
      </Card>
    )
  }
}

export default connect(null, { })(PetUpdate)
