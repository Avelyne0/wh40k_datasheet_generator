
import React from "react";
import { Form, Dropdown, Grid } from 'semantic-ui-react'


class ModelForm extends React.Component {
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
      weapon_ids: [],
      ability_ids: [],
      keyword_ids: []
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
    value: object.id
  })

  render() {
    return (
      <div>
        <h3>Add a New Model</h3>
        <Form onSubmit={this.handleSubmit} >
          <Grid>
            <Grid.Row>
              <Form.Input label="Name" placeholder="Name" name="name" onChange={e => this.changeState(e.target.name, e.target.value)}/>
            </Grid.Row>
            <Grid.Row>
              <Form.Group widths='equal' onChange={e => this.changeState(e.target.name, e.target.value)}>
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
                  <Dropdown placeholder='Weapons' name="weapon_ids" scrolling multiple search selection options={
                    this.props.state.weapons.map(weapon => this.objectToOption(weapon))
                  } onChange={(e, { name, value }) => this.setState({ [name]: value})}/>
                  <Dropdown placeholder='Keywords' name="keyword_ids" scrolling multiple search selection options={
                    this.props.state.keywords.map(keyword => this.objectToOption(keyword))
                  } onChange={(e, { name, value }) => this.setState({ [name]: value})} />
                  <Dropdown placeholder='Abilities' name="ability_ids" scrolling multiple search selection options={
                    this.props.state.abilities.map(ability => this.objectToOption(ability))
                  } onChange={(e, { name, value }) => this.setState({ [name]: value})} />
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

export default ModelForm;

