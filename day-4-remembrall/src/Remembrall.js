import React, { Component } from 'react';
import remWhite from './img/remembrall_white.gif';
import remRed from './img/remembrall_red.gif';

export default class Remembrall extends Component {
  render() {
    const gif = this.props.dataRemembered ? remRed : remWhite;
    return (
      <div className='remembrall-container'>
        <img src={gif} alt={'nothing remembered'} />
        <p className='remembrall-status'>
          You have {this.props.dataRemembered ? 'something' : 'nothing'} to
          remember.
        </p>
      </div>
    );
  }
}
