import './App.css';
import PropTypes from 'prop-types';
import { useState } from 'react';
import AntiPatternDomManipulationDontUseThis from './AntiPatternDomManipulationDontUseThis';
import DataFetching from './DataFetching';
import RandomEmojiGenerator from './RandomEmojiGenerator';
import SetStateIsAsync from './SetStateIsAsync';
import UseEffect from './UseEffect';
import UseStateWithDataStructures from './UseStateWithDataStructures';

const languages = [
  { id: 1, name: 'HTML' },
  { id: 2, name: 'CSS' },
  { id: 3, name: 'JavaScript' },
];

// Props #2: Add the `props` parameter to the React component
function FancyButton(props) {
  return (
    <button
      style={{
        // Props #3: use the value of the prop in the location you need it
        fontSize: props.fontSize,
      }}
    >
      {props.children}
    </button>
  );
}

FancyButton.propTypes = {
  fontSize: PropTypes.string.isRequired,
};

function App() {
  // State #1
  //
  // We initialize two variables
  // 1. hasPet - the "state variable" - this is where the value will be
  // 2. setHasPet - an updater function we can use to change the value
  //
  // We call the useState function with the initial value in the
  // parentheses (in our case, `false`)
  const [hasPet, setHasPet] = useState(false);

  const [petType, setPetType] = useState('');

  return (
    <div className="App">
      <RandomEmojiGenerator />
      <br />
      <br />
      <ul
        style={{
          width: '200px',
        }}
      >
        {languages.map((language) => {
          return <li key={language.id}>{language.name}</li>;
        })}
      </ul>
      <input
        type="checkbox"
        id="pet"
        // State #2: Synchronize the value to the HTML
        checked={hasPet}
        onChange={(event) => {
          // State #3: Update the value
          setHasPet(event.currentTarget.checked);
        }}
      />
      <label htmlFor="pet">I'm bringing my pet onboard</label>
      <br />
      <br />
      <label>
        Type of animal:&nbsp;
        <input
          // State #2: Synchronize the value to the HTML
          value={petType}
          onChange={(event) => {
            // State #3: Update the value
            setPetType(event.currentTarget.value);
          }}
        />
      </label>
      <br />
      <br />
      <button onClick={() => setPetType('')}>Clear pet type</button>
      <br />
      <br />
      Passenger details:
      <br />
      {
        // State #4: Use the value
        // if (hasPet) { <div>Pet</div> } else { <div>No Pet</div> }
        hasPet ? (
          // State 1: user has a pet
          <div>Pet type: {petType}</div>
        ) : (
          // State 2: user doesn't have a pet
          <div>No Pet</div>
        )
      }
      <br />
      <br />
      <FancyButton
        // Props #1: Set the prop value
        fontSize="36px"
      >
        Quite large text
      </FancyButton>
      <br />
      <br />
      <FancyButton
        // Props #1: Set the prop value
        fontSize="18px"
      >
        Not so large text
      </FancyButton>
      <br />
      <br />
      <br />
      <br />
      <hr />
      <br />
      <AntiPatternDomManipulationDontUseThis />
      <br />
      <br />
      <br />
      <br />
      <hr />
      <br />
      <SetStateIsAsync />
      <br />
      <br />
      <br />
      <br />
      <hr />
      <br />
      <UseEffect />
      <br />
      <br />
      <br />
      <br />
      <hr />
      <br />
      <DataFetching />
      <br />
      <br />
      <br />
      <br />
      <hr />
      <br />
      <hr />
      <br />
      <UseStateWithDataStructures />
      <br />
      <br />
      <br />
      <br />
      <hr />
      <br />
    </div>
  );
}

export default App;
