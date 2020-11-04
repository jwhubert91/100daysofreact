import React from 'react';

const TodoItem = (props) => {
  return (
    <div>
      <div className='card width-100'>
        <div className='card-body width-100'>
          <div className='col-sm-2'>
            <input type='checkbox' checked={props.todo.completed} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
