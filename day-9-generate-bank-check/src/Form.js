import React, { Component } from 'react';

export default class Form extends Component {
  render(props) {
    const { data, handleChange } = this.props;
    return (
      <div>
        <form>
          <p>Please fill in all fields below to complete registration.</p>
          <div className='fields-container'>
            <div className='field-row'>
              <div className='col-25'>
                <label>Check Date</label>
              </div>
              <div className='col-75'>
                <input
                  type='date'
                  name='checkDate'
                  onChange={handleChange}
                  value={data.checkDate}
                />
              </div>
            </div>
            <div className='field-row'>
              <div className='col-25'>
                <label>Sender Name</label>
              </div>
              <div className='col-75'>
                <input
                  type='text'
                  name='senderName'
                  onChange={handleChange}
                  value={data.senderName}
                />
              </div>
            </div>
            <div className='field-row'>
              <div className='col-25'>
                <label>Sender Bank</label>
              </div>
              <div className='col-75'>
                <input
                  type='text'
                  name='bankName'
                  onChange={handleChange}
                  value={data.bankName}
                />
              </div>
            </div>
            <div className='field-row'>
              <div className='col-25'>
                <label>Account Type</label>
              </div>
              <div className='col-75'>
                <select
                  name='accountType'
                  onChange={handleChange}
                  value={data.accountType}
                >
                  <option value='Savings'>Savings</option>
                  <option value='Checking'>Checking</option>
                  <option value='BusinessSavings'>Business Savings</option>
                  <option value='BusinessChecking'>Business Checking</option>
                </select>
              </div>
            </div>
            <div className='field-row'>
              <div className='col-25'>
                <label>Account Number</label>
              </div>
              <div className='col-75'>
                <input
                  type='number'
                  name='accountNumber'
                  onChange={handleChange}
                  value={data.accountNumber}
                />
              </div>
            </div>
            <div className='field-row'>
              <div className='col-25'>
                <label>Transit Number</label>
              </div>
              <div className='col-75'>
                <input
                  type='number'
                  name='transitNumber'
                  onChange={handleChange}
                  value={data.transitNumber}
                />
              </div>
            </div>
            <div className='field-row'>
              <div className='col-25'>
                <label>Sender Address</label>
              </div>
              <div className='col-75'>
                <input
                  type='text'
                  name='address'
                  onChange={handleChange}
                  value={data.address}
                />
              </div>
            </div>
            <div className='field-row'>
              <div className='col-25'>
                <label>City</label>
              </div>
              <div className='col-75'>
                <input
                  type='text'
                  name='city'
                  onChange={handleChange}
                  value={data.city}
                />
              </div>
            </div>
            <div className='field-row'>
              <div className='col-25'>
                <label>State</label>
              </div>
              <div className='col-75'>
                <input
                  type='text'
                  name='senderState'
                  maxLength='2'
                  onChange={handleChange}
                  value={data.senderState}
                />
              </div>
            </div>
            <div className='field-row'>
              <div className='col-25'>
                <label>Zip Code</label>
              </div>
              <div className='col-75'>
                <input
                  type='number'
                  name='zip'
                  onChange={handleChange}
                  value={data.zip}
                />
              </div>
            </div>
            <div className='field-row'>
              <div className='col-25'>
                <label>Recipient Name</label>
              </div>
              <div className='col-75'>
                <input
                  type='text'
                  name='recipientName'
                  onChange={handleChange}
                  value={data.recipientName}
                />
              </div>
            </div>
            <div className='field-row'>
              <div className='col-25'>
                <label>Total Amount</label>
              </div>
              <div className='col-75'>
                <input
                  type='number'
                  name='amount'
                  onChange={handleChange}
                  value={data.amount}
                />
              </div>
            </div>
            <div className='field-row'>
              <div className='col-25'>
                <label>Memo</label>
              </div>
              <div className='col-75'>
                <input
                  type='text'
                  name='memo'
                  maxLength='50'
                  onChange={handleChange}
                  value={data.memo}
                />
              </div>
            </div>
            <div className='field-row'>
              <div className='buttons-container'>
                <button>Submit Check</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
