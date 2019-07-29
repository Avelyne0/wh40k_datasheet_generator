
import React from "react";
import { Form } from 'semantic-ui-react'


class AbilityForm extends React.Component {
  constructor() {
    super()
    this.state = {
      name: '',
      movement: '',
      weaponSkill: '',
      ballisticSkill: '',
      strength: '',
      toughness: '',
      wounds: '',
      attacks: '',
      leadership: '',
      armourSave: '',
      points: '',
      modelWeapons: [],
      modelAbilities: [],
      modelKeywords: []
    }
  }

  changeState = (key, value) => this.setState({
    [key]: value
  })


  handleSubmit = () => {
    this.props.onSubmit(this.state)
    this.setState({
      name: '',
      movement: '',
      weaponSkill: '',
      ballisticSkill: '',
      strength: '',
      toughness: '',
      wounds: '',
      attacks: '',
      leadership: '',
      armourSave: '',
      points: ''
    })
  }

  render() {
    return (
      <div>
        <h3>Add a New Model</h3>
        <Form onSubmit={this.handleSubmit} onChange={e => this.changeState(e.target.name, e.target.value)} >
          <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" />
          <Form.Input fluid label="Movement" placeholder="Mv" name="movement" />
          <Form.Input fluid label="WeaponSkill" placeholder="WS" name="weaponSkill" />
          <Form.Input fluid label="BallisticSkill" placeholder="BS" name="ballisticSkill" />
          <Form.Input fluid label="Strength" placeholder="S" name="strength" />
          <Form.Input fluid label="Toughness" placeholder="T" name="toughness" />
          <Form.Input fluid label="Wounds" placeholder="W" name="wounds" />
          <Form.Input fluid label="Attacks" placeholder="A" name="attacks" />
          <Form.Input fluid label="Leadership" placeholder="LD" name="leadership" />
          <Form.Input fluid label="ArmourSave" placeholder="SV" name="armourSave" />
          {/* add the imported forms for other stuff here */}
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default AbilityForm;

