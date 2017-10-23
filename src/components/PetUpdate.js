import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { text } from 'react-native-communications'
import PetForm from './PetForm'
import { petFormUpdate, petUpdateSave, petDelete } from '../actions'
import { Card, CardSection, Button, Input, Spinner, Confirm } from './common'

class PetUpdate extends Component {
  state = { showModal: false }

  componentWillMount () {
    _.each(this.props.pet, (value, prop) => {
      this.props.petFormUpdate({ prop, value })
    })
  }

  onSavePress = () => {
    const { name, phone, weight, checkupDate } = this.props
    this.props.petUpdateSave({ name, phone, weight, checkupDate, uid:this.props.pet.uid })
  }

  onTextPress = () => {
    const { name, phone, weight, checkupDate } = this.props
    text(phone, `Hi, I am the foster parent of ${name} who is currently ${weight}grams and growing fast. I would like to bring ${name} into the shelter on ${checkupDate} for the weekly checkup. You can reach me at ${phone} if there are any changes ${name}'s schedule.`)
  }

  onDeletePress = () => {
    this.setState({ showModal: !this.state.showModal })
  }

  onConfirmAccept = () => {
    console.log(this.props.pet);
    const { uid } = this.props.pet
    console.log({uid});
    this.props.petDelete({ uid })
  }

  onConfirmDecline = () => {
    this.setState({ showModal: false })
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
            Text Schedule
          </Button>
        </CardSection>
        <CardSection>
          <Button onPress={this.onDeletePress}>
            Delete Foster Pet
          </Button>
        </CardSection>
        <Confirm
          visible={this.state.showModal}
          onAccept={this.onConfirmAccept}
          onDecline={this.onConfirmDecline}
        >
          Are you sure you want to delete this?
        </Confirm>
      </Card>
    )
  }
}

const mapStateToProps = (state) => {
  const { name, phone, weight, checkupDate } = state.petForm
  return { name, phone, weight, checkupDate }
}

export default connect(mapStateToProps, { petFormUpdate, petUpdateSave, petDelete })(PetUpdate)
