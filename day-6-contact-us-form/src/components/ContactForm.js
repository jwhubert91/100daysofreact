import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

function ContactForm() {
  const [state, setState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [result, setResult] = useState(null);

  const sendEmail = (event) => {
    event.preventDefault();
    axios
      .post('/send', { ...state })
      .then((response) => {
        setResult(response.data);
        setState({ name: '', email: '', subject: '', message: '' });
      })
      .catch((err) => {
        setResult({
          success: false,
          message: 'Something went wrong. Try again later.',
        });
        console.error(err);
      });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setState({
      ...state,
      [name]: value,
    });
  };

  return (
    <div>
      {result && (
        <p className={`${result.success} ? 'success' : 'error'}`}>
          {result.message}
        </p>
      )}
      <form onSubmit={sendEmail}>
        {/* name */}
        <Form.Group controlId='name'>
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type='text'
            name='name'
            value={state.name}
            placeholder='Enter your full name'
            onChange={handleChange}
          />
          {/* email address */}
          <Form.Group controlId='email'>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type='email'
              name='email'
              value={state.email}
              placeholder='Type your email address'
              onChange={handleChange}
            />
          </Form.Group>
          {/* subject */}
          <Form.Group controlId='subject'>
            <Form.Label>Subject</Form.Label>
            <Form.Control
              type='text'
              name='subject'
              value={state.subject}
              placeholder='Type a subject here'
              onChange={handleChange}
            />
          </Form.Group>
          {/* message */}
          <Form.Group controlId='message'>
            <Form.Label>Message</Form.Label>
            <Form.Control
              type='text'
              name='message'
              value={state.message}
              placeholder='Enter your message'
              onChange={handleChange}
              cols='5'
            />
          </Form.Group>
          <Button variant='primary' type='submit'>
            Send
          </Button>
        </Form.Group>
      </form>
    </div>
  );
}

export default ContactForm;
