import { useState } from 'react';

import './index.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>App 1 :(</h1>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </div>
  );
}

export { App };
