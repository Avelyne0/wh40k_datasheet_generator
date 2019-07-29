import React, { Component } from 'react'
import './App.css';
import API from '../adapters/API'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
// import Unit from '../components/Unit'
import Navbar from '../components/NavBar';
import UnitForm from '../components/forms/UnitForm'
import ModelForm from '../components/forms/ModelForm'
import UnitContainer from './UnitContainer';
import ModelContainer from './ModelContainer';
import FormContainer from './FormContainer';

export default class App extends Component {

  state = {
    abilities: [],
    faction_keywords: [],
    keywords: [],
    models: [],
    units: [],
    // users: [],
    wargear_options: [],
    weapons: [],
    user: undefined
  }



  componentDidMount() {
    API.validateUser()
      .then(data => {
        // if (data.error) {
        //   console.error(data.error)
        //   // display some error
        //   // this.props.history.push('/login')
        // } else {
          this.setState({ data })
          // this.props.history.push('/dashboard')
        // }
      })
      .then(this.setEverythingToState())
  }
  
  setEverythingToState = () => {
    API.getEverything()
        .then(everything => this.setState(everything))
    }

  signUp = user => {
    API.signUp(user)
      .then(user => this.setState({ user }))
  }

  logIn = user => {
    // console.log(user)
    API.logIn(user)
      .then(user => this.setState({ user }))
  }

  logOut = () => {
    API.clearToken()
    this.setState({ user: undefined })
  }


  render() {

    // const models = this.state.allModels.map(model => ({ ...model }))

    return (
      <Router>

      <div className="app">
      <Navbar user={this.state.user} signUp={this.signUp} logIn={this.logIn} logOut={this.logOut} />
        {/* <Route exact path="/" component={App} /> */}
        <Route exact path="/units" component={UnitContainer} />
        <Route exact path="/units/new" component={UnitForm} />
        <Route exact path="/models" component={ModelContainer} />
        <Route exact path="/models/new" component={ModelForm} />
        <Route exact path="/rules/new" component={FormContainer} />
      </div>
      </Router>
    )
  }
}

