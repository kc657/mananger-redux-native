import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Text, View, ListView } from 'react-native'
import { petFetch } from '../actions'

class PetList extends Component {

  componentWillMount () {
    this.props.petFetch()

    this.createDataSource(this.props)
  }

  componentWillReceiveProps (nextProps) {
    this.createDataSource(nextProps)
  }

  createDataSource = ({ pets }) => {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })

    this.dataSource = ds.cloneWithRows(pets)
  }

  render () {
    console.log(this.props);
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

const mapStateToProps = (state) => {
  const pets = _.map(state.pets, (val, uid) => {
    return { ...val, uid }
  })

  return { pets }
}

export default connect(mapStateToProps, { petFetch })(PetList)
