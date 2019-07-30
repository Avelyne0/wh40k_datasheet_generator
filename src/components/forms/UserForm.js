import React, { useState } from 'react'
import { Form } from 'semantic-ui-react';

const UserForm = ({ submit, header }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <Form >
            <span>{header}</span>
            <Form.Input placeholder="Email" type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} />
            <Form.Input placeholder="Password" type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} />
            <Form.Button content='Submit' onClick={e => {
            e.preventDefault();
            submit({ email, password })
            setEmail('')
            setPassword('')
        }}/>
        </Form>
    )
}

export default UserForm