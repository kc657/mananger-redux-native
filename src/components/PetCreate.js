import React, { Component } from 'react'
import { connect } from 'react-redux'
import { petFormUpdate, petFormSave } from '../actions'
import { Card, CardSection, Button, Input, Spinner } from './common'
import PetForm from './PetForm'

class PetCreate extends Component {

  onButtonPress = () => {
    const { name, phone, checkupDate } = this.props
    this.props.petFormSave({ name, phone, checkupDate: checkupDate || 'Monday' })
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
  const { name, phone, checkupDate } = state.petForm
  return { name, phone, checkupDate }
}

export default connect(mapStateToProps, { petFormUpdate, petFormSave })(PetCreate)
