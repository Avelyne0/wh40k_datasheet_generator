import React, { useState } from 'react'
import { Form } from 'semantic-ui-react';

const SignupForm = ({ submit, header }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <Form>
            <span>{header}</span>
            <Form.Input placeholder="Email" type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} />
            <Form.Input placeholder="Password" type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} />
            <Form.Button content='Submit' onClick={() => {
                console.log('submit')
                submit({ email, password })
            }}/>
        </Form>
    )
}

export default SignupForm