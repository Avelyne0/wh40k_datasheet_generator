
import React from "react";
import { Form, Dropdown } from 'semantic-ui-react'


class UnitForm extends React.Component {
  constructor() {
    super()
    this.state = {
      name: '',
      composition: '',
      model_ids: [],
      faction_keyword_ids: [],
      ability_ids: []
    }
  }

  changeState = (key, value) => this.setState({
    [key]: value
  })


  handleSubmit = () => {
    this.props.onSubmit(this.state)
    this.setState({
      name: '',
      composition: ''
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
        <h3>Add a New Unit</h3>
        <Form onSubmit={this.handleSubmit}  >
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Unit Name" name="name" onChange={e => this.changeState(e.target.name, e.target.value)} />
            <Form.Input fluid label="Composition" placeholder="Unit Composition" name="composition" onChange={e => this.changeState(e.target.name, e.target.value)}/>
            <div>
              <Dropdown placeholder='Models' name="model_ids" scrolling multiple search selection options={
               this.props.state.models.map(model => this.objectToOption(model))
                } onChange={(e, { name, value }) => this.setState({ [name]: value})}/>
              <Dropdown placeholder='Faction Keywords' name="faction_keyword_ids" scrolling multiple search selection options={
               this.props.state.faction_keywords.map(factionKeyword => this.objectToOption(factionKeyword))
                } onChange={(e, { name, value }) => this.setState({ [name]: value})}/>
              <Dropdown placeholder='Abilities' name="ability_ids" scrolling multiple search selection options={
               this.props.state.abilities.map(ability => this.objectToOption(ability))
                } onChange={(e, { name, value }) => this.setState({ [name]: value})}/>
            </div>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default UnitForm;

