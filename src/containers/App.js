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

import { Grid, Container } from 'semantic-ui-react'
import ModelShowContainer from './ModelShowContainer';
import UnitShowContainer from './UnitShowContainer';



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
      .then(user => {
        this.setState({ user })
      })
      this.setEverythingToState()
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
    API.logIn(user)
      .then(user => this.setState({ user }))
  }

  logOut = () => {
    API.clearToken()
    this.setState({ user: undefined })
  }

  addObject = (object, url) => {
    API.postObject(object, url).then(() => this.setEverythingToState())
  }

  findModel = id => this.state.models.find(p => p.id === parseInt(id))
  findUnit = id => this.state.units.find(p => p.id === parseInt(id))

  render() {
    const renderUnitContainer = (props) => {
      return <UnitContainer {...props} state={this.state} />
    }
    const renderUnitForm = (props) => {
      return <UnitForm {...props} onSubmit={unit => this.addObject({unit}, 'units')} state={this.state} />
    }
    const renderUnitShowContainer = (props) => {
      return <UnitShowContainer loading={!this.findUnit(props.match.params.id)} {...this.findUnit(props.match.params.id)} state={this.state} />
    }
    const renderModelContainer = (props) => {
      return <ModelContainer {...props} state={this.state} />
    }
    const renderModelForm = (props) => {
      return <ModelForm {...props} onSubmit={model => this.addObject({model}, 'models')} state={this.state} />
    }
    const renderModelShowContainer = (props) => {
      return <ModelShowContainer loading={!this.findModel(props.match.params.id)} {...this.findModel(props.match.params.id)} state={this.state} />
    }
    const renderFormContainer = (props) => {
      return <FormContainer {...props} state={this.state} />
    }

    return (
      <Router>
        <Grid>
          <Grid.Column width={3}>
            <Navbar user={this.state.user} signUp={this.signUp} logIn={this.logIn} logOut={this.logOut} />
          </Grid.Column>

          <Grid.Column stretched width={12}>
            <Container>
              <Route exact path="/units" render={renderUnitContainer} />
              <Route exact path="/units/new" component={renderUnitForm} />
              <Route exact path={"/units/:id"} component={renderUnitShowContainer} />
              <Route exact path="/models" component={renderModelContainer} />
              <Route exact path="/new/model" component={renderModelForm} />
              <Route exact path="/rules/new" component={renderFormContainer} />
              <Route exact path={"/models/:id"} component={renderModelShowContainer} />
            </Container>
          </Grid.Column>
        </Grid>
      </Router>
    )
  }
}

