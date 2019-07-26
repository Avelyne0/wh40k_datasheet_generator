
import React from "react";
import { Form } from 'semantic-ui-react'


class AbilityForm extends React.Component {
  constructor() {
    super()
    this.state = {
      name: '',
      content: ''
    }
  }

  changeState = (key, value) => this.setState({
    [key]: value
  })


  handleSubmit = () => {
    this.props.onSubmit(this.state)
    this.setState({
      name: '',
      content: ''
    })
  }

  render() {
    return (
      <div>
        <h3>Add a New Ability</h3>
        <Form onSubmit={this.handleSubmit} onChange={e => this.changeState(e.target.name, e.target.value)} >
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Ability Name" name="name" />
            <Form.Input fluid label="Content" placeholder="Ability Content" name="content" />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default AbilityForm;

