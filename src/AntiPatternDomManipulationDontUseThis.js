import { useState } from 'react';

export default function AntiPatternDomManipulationDontUseThis() {
  const [drink, setDrink] = useState('');

  return (
    <div className="App">
      <h1>This is an antipattern, don't do this</h1>
      <input
        id="drink"
        value={drink}
        onChange={(event) => {
          setDrink(event.currentTarget.value);
        }}
      />
      <button
        onClick={() => {
          // Try to avoid using direct DOM manipulation
          // with things like:
          // - document.getElementById
          // - document.getElementByTagName
          // - document.querySelector
          const dontUseThis = document.getElementById('drink').value;
          console.log(dontUseThis);
        }}
      >
        click me
      </button>
    </div>
  );
}
