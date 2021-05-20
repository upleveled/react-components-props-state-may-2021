import { useEffect, useState } from 'react';

export default function UseEffect() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  document.title = 'asdf';

  useEffect(
    // This function will get run on every
    // update ("re-render") of this component
    //
    // A re-render can occur because of:
    // - updated props (new values for props being passed)
    // - change in any state variable
    // - other reasons as well...
    () => {
      console.log(
        "Type 1. This function runs every time the component is re-rendered because we don't have a dependency array",
      );
    },
    // No dependency array
  );

  useEffect(
    // This function will get run ONLY the
    // first time that the page loads (when the
    // component renders)
    () => {
      console.log(
        'Type 2. This function runs only the first time the component is rendered (on page load) because we have an empty dependency array',
      );
    },
    // Empty dependency array
    [],
  );

  useEffect(
    // This function will get run:
    // 1. Once on first render (when the page loads
    // 2. When the value of the variables in the dependency array change
    () => {
      console.log(
        'Type 3. This function runs the first time the component is rendered (on page load) AND when the value of `count` changes because we added `count` to the dependency array',
      );
    },
    // Dependency array with count
    [count],
  );

  return (
    <div>
      <h1>useEffect Demo (different types of updates)</h1>
      {count}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
      <br />
      <br />
      <input
        value={name}
        onChange={(event) => setName(event.currentTarget.value)}
      />
      <br />
      <br />
      <br />
    </div>
  );
}
