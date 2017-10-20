import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Text, View, ListView } from 'react-native'
import { petFetch } from '../actions'
import ListItem from './ListItem'

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

  renderRow = (pet) => {
    return <ListItem pet={pet} />
  }

  render () {
    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
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
