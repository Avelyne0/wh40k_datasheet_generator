import React from 'react'
import UserForm from './forms/UserForm'
import { NavLink } from 'react-router-dom';


const Navbar = ({ user, signUp, logIn, logOut }) => {
  return (
    <div style={{ borderBottom: '2px solid black', paddingBottom: '10px', marginBottom: '12px' }}>
      <NavLink
        style={{ marginRight: '10px' }}
        to="/"
      >
        Datasheet Library
      </NavLink>
      <NavLink
        style={{ marginRight: '10px' }}
        to="/"
      >
        New Datasheet
      </NavLink>
      <NavLink>
        {
          user ? <div><button onClick={logOut}>Log out</button></div> :
            <>
              <UserForm submit={signUp} header={'Sign up'} />
              or
                        <UserForm submit={logIn} header={'Log in'} />
            </>
        }
      </NavLink>
    </div>

  )
}

export default Navbar

