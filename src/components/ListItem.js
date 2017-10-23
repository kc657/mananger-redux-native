import React, { Component } from 'react'
import { Text, View, Image, TouchableWithoutFeedback } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { Card, CardSection, Button, Input, Spinner } from './common'

class ListItem extends Component {

  onRowPress = () => {
    Actions.petUpdate({pet: this.props.pet})
  }

  render () {
    const {
      headerContainerStyle,
      headerTextStyle,
      petImageStyle
    } = styles
    const { name, weight } = this.props.pet

    return (
      <TouchableWithoutFeedback onPress={this.onRowPress}>
        <View>
          <Card>
            <CardSection>
              <View style={headerContainerStyle}>
                <Text style={headerTextStyle}>{name}</Text>
                <Text>{weight} grams</Text>
              </View>
            </CardSection>
            <CardSection>
              <Image
                source={{uri: 'https://i.imgur.com/kfw89CG.jpg'}}
                style={petImageStyle}
                />
            </CardSection>
          </Card>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = {
  headerTextStyle: {
    fontSize: 18
  },
  headerContainerStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  petImageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
}

export default ListItem
