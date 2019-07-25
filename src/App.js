
import React, { Component } from 'react'
import './App.css';
import API from './adapters/API'
import Unit from './components/Unit'

export default class App extends Component {

  state = {
    allAbilities: [],
    allFactionKeywords: [],
    allKeywords: [],
    allModels: [],
    allUnits: [],
    allUsers: [],
    allWargearOptions: [],
    allWeapons: []

  }

  componentDidMount() {
    API.getAllModels()
      .then(allModels => this.setState({ allModels }))
  }


  render() {

    const models = this.state.allModels.map(model => ({ ...model}))
    return (
      <div className="App">
                <Unit models={models} />
    </div>
    )
  }
}

