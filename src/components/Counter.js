import React from 'react';

const formatCount = (counter) => {
  return counter.value;
};

const getBadgeClasses = (counter) => {
  let classes = 'badge m-2 badge-';
  classes += (counter.value === 0) ? 'warning' : 'primary';
  return classes;
};

const Counter = ({ children, onDelete, onIncrement, onDecrement, counter }) => (
  <div>
    {children}
    <span className={getBadgeClasses(counter)}>
      {formatCount(counter)}
    </span>
    <button 
      onClick={() => onIncrement(counter)}
      className="btn btn-secondary btn-sm m-2"
    >
      Increment
    </button>
    <button 
      onClick={() => onDecrement(counter)}
      className="btn btn-secondary btn-sm m-2"
    >
      Decrement
    </button>
    <button 
      onClick={() => onDelete(counter.id)}
      className="btn btn-danger btn-sm m-2"
    >
      Delete
    </button>
  </div>
);

export default Counter;