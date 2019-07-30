import React, { Component } from 'react'
import { Card, Container } from 'semantic-ui-react'
import Unit from '../components/Unit'
import { Link } from 'react-router-dom'


export default class UnitContainer extends Component {
  render() {
    return (
      <Container>
        {
          this.props.state.units.map(unit => <Unit as={Link} to={`/units/${unit.id}`} key={unit.id} {...unit} />)
        }
      </Container>
    )
  }
}
