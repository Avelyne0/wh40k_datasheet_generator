
import React from "react";
import { Form, Dropdown, Grid } from 'semantic-ui-react'


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

  objectToOption = (object) => ({
    text: object.name,
    key: object.id,
    value: object.name
  })

  weaponToOption = (weapon) => ({
    text: weapon.weapon_name,
    key: weapon.id,
    value: weapon.weapon_name
  })

  render() {
    return (
      <div>
        <h3>Add a New Model</h3>
        <Form onSubmit={this.handleSubmit} onChange={e => this.changeState(e.target.name, e.target.value)} >
          <Grid>
            <Grid.Row>
              <Form.Input label="Name" placeholder="Name" name="name" />
            </Grid.Row>
            <Grid.Row>
              <Form.Group widths='equal'>
                <Form.Input fluid label="Movement" placeholder="Mv" name="movement" />
                <Form.Input fluid label="WeaponSkill" placeholder="WS" name="weaponSkill" />
                <Form.Input fluid label="BallisticSkill" placeholder="BS" name="ballisticSkill" />
                <Form.Input fluid label="Strength" placeholder="S" name="strength" />
                <Form.Input fluid label="Toughness" placeholder="T" name="toughness" />
                <Form.Input fluid label="Wounds" placeholder="W" name="wounds" />
                <Form.Input fluid label="Attacks" placeholder="A" name="attacks" />
                <Form.Input fluid label="Leadership" placeholder="LD" name="leadership" />
                <Form.Input fluid label="ArmourSave" placeholder="SV" name="armourSave" />
              </Form.Group>
            </Grid.Row>
            <Grid.Row>
              <Form.Group grouped>
                <div>
                  <Dropdown placeholder='Weapons' scrolling multiple search selection options={
                    this.props.state.weapons.map(weapon => this.objectToOption(weapon))
                  } />
                  <Dropdown placeholder='Keywords' scrolling multiple search selection options={
                    this.props.state.keywords.map(keyword => this.objectToOption(keyword))
                  } />
                  <Dropdown placeholder='Abilities' scrolling multiple search selection options={
                    this.props.state.abilities.map(ability => this.objectToOption(ability))
                  } />
                </div>
              </Form.Group>
            </Grid.Row>

            <Grid.Row>
              <Form.Button>Submit</Form.Button>
            </Grid.Row>
          </Grid>
        </Form>
      </div>
    )
  }
}

export default AbilityForm;

