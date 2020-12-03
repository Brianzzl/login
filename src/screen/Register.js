import React,{useState} from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import FormContainer from './FormContainer'
import axios from 'axios'


const Register = () => {
  const [companyName, setCompanyName]=useState('')
  const [contactName, setContactName]=useState('')
  const [email, setEmail]=useState('')
  const [phone, setPhone]=useState(null)
  const [password, setPassword]=useState('')
  const [password2, setPassword2]=useState('')

  const submitHandler =(e)=>{
     e.preventDefault()
     console.log('click')
    const user={
      company_name:companyName,
      reg_email: email,
      reg_phone : phone,
      psw: password,
      psw_confirm: password2,
      business_num: contactName
    }
    axios.post('/garage/register',user)
  }
  return (
 <FormContainer>
      <h1>Sign Up</h1>
      {/* {error && <Message variant='danger'>{error}</Message>} */}

      <Form
      onSubmit={submitHandler}
      >
        <Form.Group controlId='companyName'>
          <Form.Label>Company Name</Form.Label>
          <Form.Control
            type='companyName'

            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}></Form.Control>
        </Form.Group>
        <Form.Group controlId='contactName'>
          <Form.Label>contactName</Form.Label>
          <Form.Control
            type='contactName'

            value={contactName}
            onChange={(e) => setContactName(e.target.value)}></Form.Control>
        </Form.Group>
        <Form.Group controlId='email'>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type='email'

            value={email}
            onChange={(e) => setEmail(e.target.value)}></Form.Control>
        </Form.Group>
        <Form.Group controlId='phone'>
          <Form.Label>phoneNumber </Form.Label>
          <Form.Control
            type='phone'

            value={phone}
            onChange={(e) => setPhone(e.target.value)}></Form.Control>
        </Form.Group>

        <Form.Group controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'

            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
            }}></Form.Control>
        </Form.Group>
        <Form.Group controlId='password2'>
          <Form.Label>
            Confirm Password</Form.Label>
          <Form.Control
            type='password2'

            value={password2}
            onChange={(e) => {
              setPassword2(e.target.value)
            }}></Form.Control>
        </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Agree to accept our privacy and terms of service "/>
  </Form.Group>
        <Button style={{
          width:'45vw'
        }} type='submit' variant='primary'>
          Sign Up
        </Button>
      </Form>

      <Row className='py-3'>
        <Col>
          New Customer?
          {/* <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>
            Register
          </Link> */}
        </Col>
      </Row>
    </FormContainer>
  )
}

export default Register
