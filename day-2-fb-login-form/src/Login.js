import React, { Component } from 'react';
import { Card, Button, Form } from 'react-bootstrap';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      contact: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
    console.log(this.state);
  }

  render() {
    return (
      <div className='text-center'>
        <Card className='sign-in-card'>
          <Card.Body>
            <Form className='sign-in-form'>
              <Form.Group>
                <input
                  className='form-control'
                  type='text'
                  placeholder='Email or Phone Number'
                  name='contact'
                  onChange={this.handleChange}
                  value={this.state.contact}
                />
              </Form.Group>
              <Form.Group>
                <input
                  className='form-control'
                  type='password'
                  placeholder='Password'
                  name='password'
                  onChange={this.handleChange}
                  value={this.state.password}
                />
              </Form.Group>
              <Form.Group>
                <Button
                  variant='primary'
                  className='bg-fb-blue'
                  size='lg'
                  block
                >
                  Log In
                </Button>
              </Form.Group>
              <p>
                <a href='#'>Forgot password?</a>
              </p>
              <hr />
              <Button variant='success' className='btn btn-lg bg-fb-green'>
                Create New Account
              </Button>
            </Form>
          </Card.Body>
        </Card>
        <p className='celebrity-prompt'>
          <a href='#'>
            <strong>Create a Page</strong>
          </a>{' '}
          for a celebrity, band or business.
        </p>
      </div>
    );
  }
}
