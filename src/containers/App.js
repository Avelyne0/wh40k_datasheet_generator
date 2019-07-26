import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import './App.css';
import API from '../adapters/API'
// import Unit from '../components/Unit'
import Navbar from '../components/NavBar';

export default class App extends Component {

  state = {
    allAbilities: [],
    allFactionKeywords: [],
    allKeywords: [],
    allModels: [],
    allUnits: [],
    allUsers: [],
    allWargearOptions: [],
    allWeapons: [],
    user: undefined
  }

  componentDidMount() {
    API.validateUser()
      .then(data => {
        if (data.error) {
          console.error(data.error)
          // display some error
          // this.props.history.push('/login')
        } else {
          this.setState({ user: data })
          // this.props.history.push('/dashboard')
        }
      })
    // API.getAllModels()
    //   .then(allModels => this.setState({ allModels }))
  }

  signUp = user => {
    API.signUp(user)
      .then(user => this.setState({ user }))
  }

  logIn = user => {
    API.logIn(user)
      .then(user => this.setState({ user }))
  }

  logOut = () => {
    API.clearToken()
    this.setState({ user: undefined })
  }


  render() {

    const models = this.state.allModels.map(model => ({ ...model }))

    return (
      <div className="App">
        <Navbar user={this.state.user} signUp={this.signUp} logIn={this.logIn} logOut={this.logOut} />
        {/* <Unit models={models} /> */}
      </div>
    )
  }
}

