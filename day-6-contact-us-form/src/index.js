import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import ContactForm from './components/ContactForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='col-md-6 offset-md-3'>
          <Header />
          <ContactForm />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
