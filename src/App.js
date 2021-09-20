import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [selItem, setSelItem] = useState(null);
  const handleChange = (item) => {
    item === selItem ? setSelItem(null) : setSelItem(item);
  };
  return (
    <div className="App">
      <label>
        Apple
        <input
          type="checkbox"
          checked={selItem === 'Apple'}
          onChange={() => handleChange('Apple')}
        />
      </label>
      <label>
        Mango
        <input
          type="checkbox"
          checked={selItem === 'Mango'}
          onChange={() => handleChange('Mango')}
        />
      </label>
      <label>
        Banana
        <input
          type="checkbox"
          checked={selItem === 'Banana'}
          onChange={() => handleChange('Banana')}
        />
      </label>
    </div>
  );
}
