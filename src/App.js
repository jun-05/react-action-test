import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [disabled, setDisabled] = useState(false);
  return (
    <div className="App">
      <h3 data-testid="counter"> {count}</h3>
      <button
        data-testid="minus-button"
        onClick={() => setCount((prev) => prev - 1)}
        disabled={disabled}
      >
        -1
      </button>
      <button
        data-testid="plus-button"
        onClick={() => setCount((prev) => prev + 1)}
        disabled={disabled}
      >
        +1
      </button>
      <div>
        <button
          style={{ background: 'gray', margin: '5px' }}
          data-testid="on/off-button"
          onClick={() => setDisabled((prev) => !prev)}
        >
          {disabled ? '버튼 활성화' : '버튼 비 활성화'}
        </button>
      </div>
    </div>
  );
}

export default App;
