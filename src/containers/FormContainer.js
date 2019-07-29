import React, { Component } from 'react'
import API from '../adapters/API';

import AbilityForm from '../components/forms/AbilityForm';
import FactionKeywordForm from '../components/forms/FactionKeywordForm';
import KeywordForm from '../components/forms/KeywordForm';
import WargearOptionForm from '../components/forms/WargearOptionForm';
import WeaponForm from '../components/forms/WeaponForm';

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
        <AbilityForm onSubmit={this.addNewObject({}, 'abilities')} />
        <FactionKeywordForm onSubmit={this.addNewObject({}, 'faction_keywords')} />
        <KeywordForm onSubmit={this.addNewObject({}, 'keywords')} />
        <WargearOptionForm onSubmit={this.addNewObject({}, 'wargear_options')} />
        <WeaponForm onSubmit={this.addNewObject({}, 'weapons')} />
      </div>
    )
  }
}
