import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default class EditExercise extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      description: '',
      duration: 0,
      date: new Date(),
      users: [],
    };
    this.onChange = this.onChange.bind(this);
    this.onDateChange = this.onDateChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/exercises/' + this.props.match.params.id)
      .then((res) => {
        this.setState({
          username: res.data.username,
          description: res.data.description,
          duration: res.data.duration,
          date: new Date(res.data.date),
        });
      })
      .catch((err) => {
        console.log(err);
      });
    axios.get('http://localhost:5000/users').then((res) => {
      if (res.data.length > 0) {
        this.setState({
          users: res.data.map((user) => user.username),
        });
      }
    });
  }

  onChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  onDateChange(date) {
    this.setState({ date: date });
  }

  onSubmit(e) {
    e.preventDefault();
    const exercise = {
      username: this.state.username,
      description: this.state.description,
      duration: this.state.duration,
      date: this.state.date,
    };
    axios
      .post(
        'http://localhost:5000/exercises/update/' + this.props.match.params.id,
        exercise
      )
      .then((res) => console.log(res.data));
    console.log(exercise);
    window.location = '/';
  }

  render() {
    return (
      <div>
        <h3>Edit Exercise Log</h3>
        <form onSubmit={this.onSubmit}>
          <div className='form-group'>
            <label>Username: </label>
            <select
              name='username'
              value={this.state.username}
              onChange={this.onChange}
              className='form-control'
              required
            >
              {this.state.users.map((user) => {
                return (
                  <option key={user} value={user}>
                    {user}
                  </option>
                );
              })}
            </select>
          </div>
          <div className='form-group'>
            <label>Description:</label>
            <input
              type='text'
              name='description'
              value={this.state.description}
              onChange={this.onChange}
              className='form-control'
            />
          </div>
          <div className='form-group'>
            <label>Duration (in minutes):</label>
            <input
              type='text'
              name='duration'
              value={this.state.duration}
              onChange={this.onChange}
              className='form-control'
            />
          </div>
          <div className='form-group'>
            <label>Date:</label>
            <br />
            <DatePicker
              selected={this.state.date}
              onChange={this.onDateChange}
              className='form-control'
              name='date'
            />
          </div>
          <div className='form-group'>
            <input
              type='submit'
              value='Edit Exercise'
              className='btn btn-primary'
            />
          </div>
        </form>
      </div>
    );
  }
}
