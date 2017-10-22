import React, { Component } from 'react'
import { connect } from 'react-redux'
import { petFormUpdate, petFormSave } from '../actions'
import { Card, CardSection, Button, Input, Spinner } from './common'
import PetForm from './PetForm'

class PetCreate extends Component {

  onButtonPress = () => {
    const { name, phone, shift } = this.props
    this.props.petFormSave({ name, phone, shift: shift || 'Monday' })
  }

  render () {
    return(
      <Card>
        <PetForm {...this.props} />
        <CardSection>
          <Button onPress={this.onButtonPress}>
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

export default connect(mapStateToProps, { petFormUpdate, petFormSave })(PetCreate)
