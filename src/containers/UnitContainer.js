import React, { Component } from 'react'
import { Card } from 'semantic-ui-react'
import Unit from '../components/Unit'

export default class UnitContainer extends Component {
  render() {
    return (
      <Card.Group itemsPerRow={6}>
        {
          this.props.units.map(unit => <Unit {...unit} />)
        }
      </Card.Group>
    )
  }
}
