import React, { Component } from 'react'
import { connect } from 'react-redux'
import { petFormUpdate } from '../actions'
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
            value={this.props.name}
            onChangeText={(text) => this.props.petFormUpdate({ prop: 'name', value: text})}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Phone"
            placeholder="555-555-5555"
            value={this.props.phone}
            onChangeText={(text) => this.props.petFormUpdate({ prop: 'phone', value: text})}
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

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.petForm
  return { name, phone, shift }
}

export default connect(mapStateToProps, { petFormUpdate })(PetCreate)
