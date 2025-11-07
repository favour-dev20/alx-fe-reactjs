import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      <p style={{ fontSize: '20px' }}>Current Count: {count}</p>

      <button
        style={{
          margin: '5px',
          padding: '10px 20px',
          backgroundColor: 'green',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>

      <button
        style={{
          margin: '5px',
          padding: '10px 20px',
          backgroundColor: 'red',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
        onClick={() => setCount(count - 1)}
      >
        Decrement
      </button>

      <button
        style={{
          margin: '5px',
          padding: '10px 20px',
          backgroundColor: 'gray',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
        onClick={() => setCount(0)}
      >
        Reset
      </button>
    </div>
  );
}

export default Counter;