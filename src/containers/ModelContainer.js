import React, { Component } from 'react'
import { Card } from 'semantic-ui-react'
import Model from '../components/Model'

export default class ModelContainer extends Component {
  render() {
    return (
      <Card.Group itemsPerRow={6}>
        {
          this.props.models.map(model => <Model {...model} />)
        }
      </Card.Group>
    )
  }
}
