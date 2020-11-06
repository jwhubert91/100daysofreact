import React, { Component } from 'react';

export default class Register extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      contact: '',
      password: '',
      birthMonth: '',
      birthDay: '',
      birthYear: '',
      gender: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(e) {
    alert(JSON.stringify(this.state));
    e.preventDefault();
  }

  render() {
    return (
      <div className='form-container'>
        <div className='form-header'>
          <h1>Sign Up</h1>
          <p className='header-subtitle'>It's quick and easy.</p>
        </div>
        <form className='form-body'>
          <div className='row'>
            <div className='col-50'>
              <input
                type='text'
                name='firstName'
                placeholder='First name'
                value={this.state.firstName}
                onChange={this.handleChange}
              />
            </div>
            <div className='col-50 next-col'>
              <input
                type='text'
                name='lastName'
                placeholder='Last name'
                value={this.state.lastName}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className='row'>
            <div className='col-100'>
              <input
                type='text'
                name='contact'
                placeholder='Mobile number or email'
                value={this.state.contact}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className='row'>
            <div className='col-100'>
              <input
                type='password'
                name='password'
                placeholder='Password'
                value={this.state.password}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className='row'>
            <div className='label-row'>
              <label>Birthday</label>
            </div>
            <div className='inputs-row'>
              <div className='col-33'>
                <select
                  name='birthMonth'
                  value={this.state.birthMonth}
                  onChange={this.handleChange}
                >
                  <option value='July'>July</option>
                </select>
              </div>
              <div className='col-33'>
                <select
                  name='birthDay'
                  value={this.state.birthDay}
                  onChange={this.handleChange}
                >
                  <option value='6'>6</option>
                </select>
              </div>
              <div className='col-33'>
                <select
                  name='birthYear'
                  value={this.state.birthYear}
                  onChange={this.handleChange}
                >
                  <option value='1991'>1991</option>
                </select>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='label-row'>
              <label>Gender</label>
            </div>
            <div className='inputs-row'>
              <div className='col-33 gender-choice'>
                <label>Female</label>
                <input
                  type='radio'
                  name='gender'
                  value='female'
                  checked={this.state.gender === 'female'}
                  onChange={this.handleChange}
                />
              </div>
              <div className='col-33 gender-choice'>
                <label>Male</label>
                <input
                  type='radio'
                  name='gender'
                  value='male'
                  checked={this.state.gender === 'male'}
                  onChange={this.handleChange}
                />
              </div>
              <div className='col-33 gender-choice'>
                <label>Custom</label>
                <input
                  type='radio'
                  name='gender'
                  value='custom'
                  checked={this.state.gender === 'custom'}
                  onChange={this.handleChange}
                />
              </div>
            </div>
          </div>
          <div className='row'>
            <p className='terms-and-conditions'>
              By clicking Sign Up, you agree to our Terms, Data Policy and
              Cookies Policy. You may receive SMS Notifications from us and can
              opt out any time.
            </p>
          </div>
          <div className='row'>
            <button className='register-button' onClick={this.handleSubmit}>
              Sign Up
            </button>
          </div>
        </form>
      </div>
    );
  }
}
