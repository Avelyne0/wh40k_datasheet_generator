import React, { Component } from 'react'
import API from '../adapters/API';
import AbilityForm from '../components/forms/AbilityForm';

export default class FormContainer extends Component {

  addNewObject = (object, url) => {
    API.postObject(object, url)
      .then(object => this.setState({
        object: [...this.state.object, object]
      }))
  }
  render() {
    return (
      <div>
        <AbilityForm onSubmit={this.addNewObject({}, 'ability')} />
      </div>
    )
  }
}
