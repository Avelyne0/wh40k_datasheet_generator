
import React from "react";
import { Form, Dropdown } from 'semantic-ui-react'


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

   objectToOption = (object) => ({
    text: object.name,
    key: object.id,
    value: object.name
   })
   
  render() {
    return (
      <div>
        <h3>Add a New Unit</h3>
        <Form onSubmit={this.handleSubmit} onChange={e => this.changeState(e.target.name, e.target.value)} >
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Unit Name" name="name" />
            <Form.Input fluid label="Composition" placeholder="Unit Composition" name="composition" />
            <div>
              <Dropdown placeholder='Models' scrolling multiple search selection options={
               this.props.state.models.map(model => this.objectToOption(model))
                } />
              <Dropdown placeholder='Faction Keywords' scrolling multiple search selection options={
               this.props.state.faction_keywords.map(factionKeyword => this.objectToOption(factionKeyword))
                } />
              <Dropdown placeholder='Abilities' scrolling multiple search selection options={
               this.props.state.abilities.map(ability => this.objectToOption(ability))
                } />
            </div>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default AbilityForm;

