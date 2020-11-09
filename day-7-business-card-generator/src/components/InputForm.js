import React, { Component } from 'react';

export default class InputForm extends Component {
  constructor() {
    super();
    this.state = {
      fullName: '',
      title: '',
      email: '',
      phone: '',
      imageUrl: '',
      streetNo: '',
      city: '',
      locationState: '',
      fax: '',
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <main className='inputFormContainer'>
        <p className='inputFormText'>
          Hello, my name is{' '}
          <input
            type='text'
            placeholder='full name'
            value={this.state.fullName}
            onChange={this.handleChange}
            name='fullName'
          />{' '}
          and I am a{' '}
          <input
            type='text'
            placeholder='professional title'
            value={this.state.title}
            onChange={this.handleChange}
            name='title'
          />
          . My email address is{' '}
          <input
            type='email'
            placeholder='email address'
            value={this.state.email}
            onChange={this.handleChange}
            name='email'
          />{' '}
          and the best phone number to reach me is{' '}
          <input
            type='phone'
            placeholder='phone #'
            value={this.state.phone}
            onChange={this.handleChange}
            name='phone'
          />
          .
        </p>
        <p className='inputFormText'>
          Here is the link to a really great picture of me
          {' (make sure the url ends in .png, .jpg, or .jpeg)'}:{' '}
          <input
            type='text'
            placeholder='headshot URL'
            value={this.state.imageUrl}
            onChange={this.handleChange}
            name='imageUrl'
          />
        </p>
        <label>The rest is optional...</label>
        <p className='inputFormText'>
          By the way, if you're looking for me, you can find me at{' '}
          <input
            type='text'
            placeholder='street no.'
            value={this.state.streetNo}
            onChange={this.handleChange}
            name='streetNo'
          />{' '}
          in{' '}
          <input
            type='text'
            placeholder='city'
            value={this.state.city}
            onChange={this.handleChange}
            name='city'
          />
          ,{' '}
          <input
            type='text'
            placeholder='state/province'
            value={this.state.locationState}
            onChange={this.handleChange}
            name='locationState'
          />
          . Please visit my website at:{' '}
          <input
            type='text'
            placeholder='company URL'
            value={this.state.websiteUrl}
            onChange={this.handleChange}
            name='websiteURL'
          />
          , and if you're really old fashioned you can send me a fax here:
          <input
            type='phone'
            placeholder='fax #'
            value={this.state.fax}
            onChange={this.handleChange}
            name='fax'
          />
          .
        </p>
        <div className='button-container'>
          <button className='create-bizcard-button'>Create</button>
        </div>
      </main>
    );
  }
}
