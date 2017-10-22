import React, { Component } from 'react'
import { Text, View, TouchableWithoutFeedback } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { CardSection } from './common'

class ListItem extends Component {

  onRowPress = () => {
    Actions.petUpdate({pet: this.props.pet})
  }

  render () {
    const { name } = this.props.pet

    return (
      <TouchableWithoutFeedback onPress={this.onRowPress}>
        <View>
          <CardSection>
            <Text style={styles.titleStyle}>
              {name}
            </Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
}

export default ListItem
