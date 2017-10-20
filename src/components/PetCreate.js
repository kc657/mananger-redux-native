import React, { Component } from 'react'
import { Picker, Text } from 'react-native'
import { connect } from 'react-redux'
import { petFormUpdate, petFormSave } from '../actions'
import { Card, CardSection, Button, Input, Spinner } from './common'

class PetCreate extends Component {

  onButtonPress = () => {
    const { name, phone, shift } = this.props
    this.props.petFormSave({ name, phone, shift: shift || 'Monday' })
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

        <CardSection style={{ flexDirection: 'column' }}>
          <Text style={styles.pickerTextStyle}>Foster Date</Text>
          <Picker
            selectedValue={this.props.shift}
            onValueChange={(day) => this.props.petFormUpdate({ prop: 'shift', value: day})}
          >
            <Picker.Item label="Monday" value="Monday" />
            <Picker.Item label="Tuesday" value="Tuesday" />
            <Picker.Item label="Wednesday" value="Wednesday" />
            <Picker.Item label="Thursday" value="Thursday" />
            <Picker.Item label="Friday" value="Friday" />
            <Picker.Item label="Saturday" value="Saturday" />
            <Picker.Item label="Sunday" value="Sunday" />
          </Picker>
        </CardSection>

        <CardSection>
          <Button onPress={this.onButtonPress}>
            Create
          </Button>
        </CardSection>
      </Card>
    )
  }
}

const styles = {
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.petForm
  return { name, phone, shift }
}

export default connect(mapStateToProps, { petFormUpdate, petFormSave })(PetCreate)
