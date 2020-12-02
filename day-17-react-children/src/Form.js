import React from 'react';

function Form(props) {
  const { handleChange, handleSubmit, proto } = props;
  return (
    <div className='card form-card'>
      <div className='card-body'>
        <h5>Customize your child:</h5>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <div className='form-check form-check-inline'>
              <input
                type='radio'
                className='form-check-input'
                name='protoShape'
                value='square'
                checked={proto.protoShape === 'square' ? true : false}
                onChange={handleChange}
              />
              <label className='form-check-label'>Square</label>
            </div>
            <div className='form-check form-check-inline'>
              <input
                type='radio'
                className='form-check-input'
                name='protoShape'
                value='rectangle'
                checked={proto.protoShape === 'rectangle' ? true : false}
                onChange={handleChange}
              />
              <label className='form-check-label'>Rectangle</label>
            </div>
            <div className='form-check form-check-inline'>
              <input
                type='radio'
                className='form-check-input'
                name='protoShape'
                value='circle'
                checked={proto.protoShape === 'circle' ? true : false}
                onChange={handleChange}
              />
              <label className='form-check-label'>Circle</label>
            </div>
          </div>
          {/* background color */}
          <div className='form-group'>
            <label>Background Color:</label>{' '}
            <input
              type='color'
              name='backgroundColor'
              value={proto.backgroundColor}
              onChange={handleChange}
            />
          </div>
          {/* header */}
          <div className='form-group'>
            <label>Header:</label>
            <input
              type='text'
              name='headerText'
              className='form-control form-control-sm'
              placeholder="My child's name..."
              value={proto.headerText}
              onChange={handleChange}
            />
          </div>
          {/* inner text */}
          <div className='form-group'>
            <label>Inner Text:</label>
            <input
              type='text'
              name='innerText'
              className='form-control form-control-sm'
              placeholder='Freeform text here...'
              value={proto.innerText}
              onChange={handleChange}
            />
          </div>
          {/* cat image boolean */}
          <div className='form-group'>
            <div className='form-check'>
              <input
                type='checkbox'
                name='catPic'
                className='form-check-input'
                checked={proto.catPic || false}
                onChange={handleChange}
              />
              <label>Cat pic?</label>
            </div>
          </div>
          <div className='form-group'>
            <button className='btn btn-sm btn-primary btn-block'>
              Add Child
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
