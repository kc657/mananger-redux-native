import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { text } from 'react-native-communications'
import PetForm from './PetForm'
import { petFormUpdate, petUpdateSave } from '../actions'
import { Card, CardSection, Button, Input, Spinner, Confirm } from './common'

class PetUpdate extends Component {
  state = { showModal: false }

  componentWillMount () {
    _.each(this.props.pet, (value, prop) => {
      this.props.petFormUpdate({ prop, value })
    })
  }

  onSavePress = () => {
    const { name, phone, shift } = this.props
    this.props.petUpdateSave({ name, phone, shift, uid:this.props.pet.uid })
  }

  onTextPress = () => {
    const { name, phone, shift } = this.props
    text(phone, `I can drop off ${name} on ${shift}.`)
  }

  onDeletePress = () => {
    this.setState({ showModal: !this.state.showModal })
  }

  render () {
    return (
      <Card>
        <PetForm />
        <CardSection>
          <Button onPress={this.onSavePress}>
            Save Changes
          </Button>
        </CardSection>
        <CardSection>
          <Button onPress={this.onTextPress}>
            Foster Drop Off
          </Button>
        </CardSection>
        <CardSection>
          <Button onPress={this.onDeletePress}>
            Delete Foster Pet
          </Button>
        </CardSection>
        <Confirm visible={this.state.showModal}>
          Are you sure you want to delete this?
        </Confirm>
      </Card>
    )
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.petForm
  return { name, phone, shift }
}

export default connect(mapStateToProps, { petFormUpdate, petUpdateSave })(PetUpdate)
