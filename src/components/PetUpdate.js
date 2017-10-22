import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PetForm from './PetForm'
import { petFormUpdate, petUpdateSave } from '../actions'
import { Card, CardSection, Button, Input, Spinner } from './common'

class PetUpdate extends Component {

  componentWillMount () {
    _.each(this.props.pet, (value, prop) => {
      this.props.petFormUpdate({ prop, value })
    })
  }

  onButtonPress = () => {
    const { name, phone, shift } = this.props
    this.props.petUpdateSave({ name, phone, shift, uid:this.props.pet.uid })
  }

  render () {
    return (
      <Card>
        <PetForm />
        <CardSection>
          <Button onPress={this.onButtonPress}>
            Save Changes
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

export default connect(mapStateToProps, { petFormUpdate, petUpdateSave })(PetUpdate)
