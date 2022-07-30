import React, { useState, useRef } from 'react'
import { Form, Button, Card, Container, Alert } from 'react-bootstrap'
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from './AuthContext';

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault()
    try {
        setError('')
        setLoading(true);
        await login(emailRef.current.value, passwordRef.current.value)
        navigate('/', {replace: true});
    } catch {
        setError('Failed to sign in')
    }
    setLoading(false);
}

  return (
  <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
  <div className='w-100' style={{ maxWidth: '400px' }} >
  <Card>
      <Card.Body>
          <h2 className='text-center mb-3'>Log In</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}> 
              <Form.Group id="email" className='mb-3'>
                  <Form.Label>
                      Email
                  </Form.Label>
                  <Form.Control placeholder="Enter your Email" type="email" ref={emailRef} required />
              </Form.Group>
              <Form.Group id="password" className='mb-3'>
                  <Form.Label>
                      Password
                  </Form.Label>
                  <Form.Control placeholder="Enter your Password" type="password" ref={passwordRef} required />
              </Form.Group>
              <Button disabled={loading} className='w-100' type="submit">Log In</Button>
          </Form>  
          <div className='w-100 text-center mt-3'>
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
      </Card.Body>
  </Card>
  <div className='w-100 text-center mt-2'>
      Create a new account? <Link to="/signup"> Sign Up </Link>
  </div>
  </div>
  </Container>
)
}

export default Login