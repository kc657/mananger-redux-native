import React, { Component } from 'react'
import { View, Text, Picker } from 'react-native'
import { connect } from 'react-redux'
import { petFormUpdate } from '../actions'
import { Card, CardSection, Button, Input, Spinner } from './common'

class PetForm extends Component {
  render () {
    return (
      <View>
        <CardSection>
          <Input
            label='Pet Name'
            placeholder='Zeus'
            value={this.props.name}
            onChangeText={(text) => this.props.petFormUpdate({ prop: 'name', value: text})}
        />
        </CardSection>

        <CardSection>
          <Input
            label='Pet Weight'
            placeholder='Weight in Grams'
            value={this.props.weight}
            keyboardType='number-pad'
            onChangeText={(text) => this.props.petFormUpdate({ prop: 'weight', value: text})}
        />
        </CardSection>

        <CardSection>
          <Input
            label='Your Phone'
            placeholder='555-555-5555'
            value={this.props.phone}
            keyboardType='phone-pad'
            onChangeText={(text) => this.props.petFormUpdate({ prop: 'phone', value: text})}
        />
        </CardSection>

        <CardSection style={{ flexDirection: 'column' }}>
          <Text style={styles.pickerTextStyle}>Foster Checkup Date</Text>
          <Picker
            selectedValue={this.props.checkupDate}
            onValueChange={(day) => this.props.petFormUpdate({ prop: 'checkupDate', value: day})}
        >
            <Picker.Item label='Monday' value='Monday' />
            <Picker.Item label='Tuesday' value='Tuesday' />
            <Picker.Item label='Wednesday' value='Wednesday' />
            <Picker.Item label='Thursday' value='Thursday' />
            <Picker.Item label='Friday' value='Friday' />
            <Picker.Item label='Saturday' value='Saturday' />
            <Picker.Item label='Sunday' value='Sunday' />
          </Picker>
        </CardSection>
      </View>
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
  const { name, phone, checkupDate, weight } = state.petForm
  return { name, phone, checkupDate, weight }
}

export default connect(mapStateToProps, { petFormUpdate })(PetForm)
