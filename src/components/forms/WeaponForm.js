
import React from "react";
import { Form } from 'semantic-ui-react'


class AbilityForm extends React.Component {
  constructor() {
    super()
    this.state = {
      name: '',
      range: '',
      type: '',
      strength: '',
      armourPiercing: '',
      damange: '',
      ability: '',
      points: ''
    }
  }

  changeState = (key, value) => this.setState({
    [key]: value
  })


  handleSubmit = () => {
    this.props.onSubmit(this.state)
    this.setState({
      name: '',
      range: '',
      type: '',
      strength: '',
      armourPiercing: '',
      damange: '',
      ability: '',
      points: ''
    })
  }

  render() {
    return (
      <div>
        <h3>Add a New Weapon</h3>
        <Form onSubmit={this.handleSubmit} onChange={e => this.changeState(e.target.name, e.target.value)} >
          <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" />
          <Form.Input fluid label="Range" placeholder="Range" name="range" />
          <Form.Input fluid label="Type" placeholder="Type" name="type" />
          <Form.Input fluid label="Strength" placeholder="S" name="strength" />
          <Form.Input fluid label="ArmourPiercing" placeholder="AP" name="armourPiercing" />
          <Form.Input fluid label="Damage" placeholder="D" name="damage" />
          <Form.Input fluid label="Ability" placeholder="Ability" name="ability" />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default AbilityForm;

