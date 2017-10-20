import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Text, View } from 'react-native'
import { petFetch } from '../actions'

class PetList extends Component {

  componentWillMount () {
    this.props.petFetch()
  }

  render () {
    return (
      <View>
        <Text>Hello World</Text>
        <Text>Hello World</Text>
        <Text>Hello World</Text>
        <Text>Hello World</Text>
        <Text>Hello World</Text>
        <Text>Hello World</Text>
      </View>
    )
  }
}

export default connect(null, { petFetch })(PetList)
