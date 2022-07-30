import React, { useRef, useState } from 'react'
import { Form, Button, Card, Container, Alert } from 'react-bootstrap'
import { useAuth } from './AuthContext'
import { Link, useNavigate } from "react-router-dom"

const Signup = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const { signup } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [greeting, setGreeting] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault()
        if(passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords do not match')
        }
        try {
            setError('')
            setLoading(true);
            await signup(emailRef.current.value, passwordRef.current.value)
            navigate('/', {replace: true});
        } catch {
            setError('Failed to create an account')
        }
        if(!error && setGreeting('Account created successfully'))
        setLoading(false);
    }

    return (
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
    <div className='w-100' style={{ maxWidth: '400px' }} >
    <Card>
        <Card.Body>
            <h2 className='text-center mb-3'>Sign Up</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            {greeting && <Alert variant="success">{greeting}</Alert>}
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
                <Form.Group id="password-confirm" className='mb-3'>
                    <Form.Label>
                        Confirm Password
                    </Form.Label>
                    <Form.Control placeholder="Enter your Password again" type="password" ref={passwordConfirmRef} required />
                </Form.Group>
                <Button disabled={loading} className='w-100' type="submit">Sign Up</Button>
            </Form>    
        </Card.Body>
    </Card>
    <div className='w-100 text-center mt-2'>
        Already have an account? <Link to="/login">Log In</Link>
    </div>
    </div>
    </Container>
  )
}

export default Signup