import React from 'react'
import UserForm from './forms/UserForm'
import { NavLink } from 'react-router-dom';
import { Menu, Icon } from 'semantic-ui-react'


const Navbar = ({ user, signUp, logIn, logOut }) => {
  return (
    
      <Menu fluid vertical tabular>
        <Menu.Item as={NavLink} to="/" name="Home">
          <Icon name="home" size="large" />
          <p>Datasheet Generator</p>
        </Menu.Item>
        <Menu.Item as={NavLink} to="/units" name="units">
          <Icon name="home" size="large" />
          <p>Unit Library</p>
        </Menu.Item>
        <Menu.Item as={NavLink} to="/units/new" name="new unit">
          <Icon name="home" size="large" />
          <p>New Unit</p>
        </Menu.Item>
        <Menu.Item as={NavLink} to="/models" name="models">
          <Icon name="dashboard" size="large" />
          <p>Model Library</p>
        </Menu.Item>
        <Menu.Item as={NavLink} to="/models/new" name="new model">
          <Icon name="home" size="large" />
          <p>New Model</p>
        </Menu.Item>
        <Menu.Item as={NavLink} to="/" name="user">
        {
          user ? <div><button onClick={logOut}>Log out</button></div> :
            <>
              <UserForm submit={signUp} header={'Sign up'} />
              or
              <UserForm submit={logIn} header={'Log in'} />
            </>
        }
        </Menu.Item>
      </Menu>
  )
}

export default Navbar

