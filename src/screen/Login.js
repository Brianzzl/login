import React ,{useState}from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'


import axios from 'axios'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

    const submitHandler = async (e) => {
    e.preventDefault()
    console.log('submit')
    let user = {
      reg_email:email,
      psw:password
    }
    const result = axios.post('/garage/login',user)
    console.log(result)
  }
  return (
    <div style={{
  width:'100vw',
  height:"80vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
}}
>


<Form onSubmit={submitHandler}>
  <Form.Group controlId="formBasicEmail">
    <h1>Login</h1>
    <p>Don't have an account <Link to='register'>
            Register
          </Link> </p>

    {/* <Form.Label >Email </Form.Label>
    <Form.Control type="email" placeholder="Enter email" /> */}

  </Form.Group>

        <Form.Group controlId='companyName'>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type='email'

            value={email}
            onChange={(e) => setEmail(e.target.value)}></Form.Control>
        </Form.Group>
        <Form.Group controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}></Form.Control>
        </Form.Group>
    <Form.Text className="text-muted">
      By continue, you agree to accept our privacy and terms of service
    </Form.Text>
  <Button variant="primary" type="submit" style={{
    width:"45vw"
  }}>
    Submit
  </Button>
</Form>

  {/* <h1>forgot Password</h1>
    <Form.Group controlId="">
    <Form.Label>Email</Form.Label>
    <Form.Control type="password"  />
    <Button>Send</Button>
  </Form.Group> */}

    </div>
  )
}

export default Login
