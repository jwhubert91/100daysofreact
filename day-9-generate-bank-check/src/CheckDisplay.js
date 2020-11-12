import React from 'react';

function CheckDisplay(props) {
  const { data } = props;
  console.log(`State data received by props: ${JSON.stringify(data)}`);
  return (
    <div className='check-container'>
      <div className='bank-name-container'>
        <strong>{data.bankName}</strong>
      </div>
      <div className='sender-container'>
        <p>{data.senderName}</p>
        <p>{data.address}</p>
        <p>
          {data.city} {data.senderState.toUpperCase()} {data.zip}
        </p>
      </div>
      <div className='date-container'>DATE: {data.checkDate}</div>
      <div className='recipient-container'>
        <span>Pay to the Order Of:</span>
        <div className='recipient-text'>{data.recipientName}</div>
      </div>
      <div className='amount-container'>
        $<div className='dollars-container'>{data.amount}</div>
      </div>
      {/* 
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
			 */}
      <div className='account-type-container'>
        From:
        <label>
          <input
            type='checkbox'
            checked={data.accountType === 'Checking'}
            disabled
          />
          Checking
        </label>
        <label>
          <input
            type='checkbox'
            checked={data.accountType === 'Savings'}
            disabled
          />
          Savings
        </label>
        <label>
          <input
            type='checkbox'
            checked={data.accountType === 'BusinessChecking'}
            disabled
          />
          Business Checking
        </label>
        <label>
          <input
            type='checkbox'
            checked={data.accountType === 'BusinessSavings'}
            disabled
          />
          Business Savings
        </label>
      </div>
      <div className='memo-container'>
        <span>Memo:</span>
        {data.memo}
      </div>
      <div className='account-number-container'>{data.accountNumber}</div>
      <div className='transit-number-container'>{data.transitNumber}</div>
    </div>
  );
}

export default CheckDisplay;
