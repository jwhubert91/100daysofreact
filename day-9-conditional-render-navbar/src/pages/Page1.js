import React from 'react';

function Page1() {
  const pageBg = { backgroundColor: 'rebeccapurple' };
  return (
    <div className='page-background' style={pageBg}>
      <h1 className='page-header'>Page 1</h1>
    </div>
  );
}

export default Page1;
