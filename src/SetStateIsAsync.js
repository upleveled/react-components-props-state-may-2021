import { useEffect, useState } from 'react';

export default function SetStateIsAsync() {
  const [count, setCount] = useState(0);

  useEffect(
    // This function will get run on every
    // update ("re-render") of this component
    //
    // A re-render can occur because of:
    // - updated props (new values for props being passed)
    // - change in any state variable
    // - other reasons as well...
    () => {
      // console.log('re-rendered', count);
    },
  );

  return (
    <div>
      <h1>The state setter function does not finish instantly</h1>
      {count}
      <button
        onClick={() => {
          setCount(count + 1);
          // The count is not instantly updated by the next line
          console.log('instantly', count);
        }}
      >
        +
      </button>
    </div>
  );
}
