
import React from "react";
import { Form } from 'semantic-ui-react'


class AbilityForm extends React.Component {
  constructor() {
    super()
    this.state = {
      name: '',
      composition: '',
      unitModels: [],
      unitFactionKeywords: [],
      unitAbilities: []
    }
  }

  changeState = (key, value) => this.setState({
    [key]: value
  })


  handleSubmit = () => {
    this.props.onSubmit(this.state)
    this.setState({
      name: '',
      composition: '',
      unitModels: [],
      unitFactionKeywords: [],
      unitAbilities: []
    })
  }

  render() {
    return (
      <div>
        <h3>Add a New Unit</h3>
        <Form onSubmit={this.handleSubmit} onChange={e => this.changeState(e.target.name, e.target.value)} >
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Unit Name" name="name" />
            <Form.Input fluid label="Composition" placeholder="Unit Composition" name="composition" />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default AbilityForm;

