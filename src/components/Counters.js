import React from 'react';
import Counter from './Counter';

const Counters = ({ counters, onIncrement, onDecrement, onDelete, onReset }) => (
  <div>
    {counters.length > 0 ?
    (
      <button
        className="btn btn-primary btn-sm m-2"
        onClick={onReset}
      >
        Reset
      </button>
    ) : null}
    {counters.map(counter => (
      <Counter
        key={counter.id}
        counter={counter}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
        onDelete={onDelete}
      >
        <h6>Counter #{counter.id}</h6>
      </Counter>
    ))}
  </div>
);

export default Counters;

