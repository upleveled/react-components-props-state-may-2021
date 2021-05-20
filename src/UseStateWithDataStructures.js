import { useState } from 'react';

const data = [
  { id: 1, name: 'Apple' },
  { id: 2, name: 'Papaya' },
];

let nextId = 3;

export default function UseStateWithDataStructures() {
  const [fruitTypes, setFruitTypes] = useState(data);
  const [editingId, setEditingId] = useState(0);
  const [draft, setDraft] = useState();
  const [newFruitTypeName, setNewFruitTypeName] = useState('');

  return (
    <>
      <h1>useState with Data Structures</h1>

      {fruitTypes.map((fruitType) => {
        return (
          <div key={fruitType.id}>
            {editingId === fruitType.id ? (
              <>
                <input
                  value={draft}
                  onChange={(event) => setDraft(event.currentTarget.value)}
                />
                <button
                  onClick={() => {
                    const newFruitTypes = fruitTypes.map((type) => {
                      if (type.id === fruitType.id) {
                        type.name = draft;
                      }
                      return type;
                    });
                    setFruitTypes(newFruitTypes);
                    setEditingId(null);
                  }}
                >
                  save
                </button>
              </>
            ) : (
              <>
                {fruitType.name}
                <button
                  onClick={() => {
                    setEditingId(fruitType.id);
                    setDraft(fruitType.name);
                  }}
                >
                  edit
                </button>
              </>
            )}
          </div>
        );
      })}
      <br />
      <br />

      <input
        value={newFruitTypeName}
        onChange={(event) => setNewFruitTypeName(event.currentTarget.value)}
      />

      <button
        onClick={() => {
          const newFruitTypes = [...fruitTypes];
          newFruitTypes.push({ id: nextId, name: newFruitTypeName });
          setFruitTypes(newFruitTypes);
          nextId = nextId + 1;
        }}
      >
        Add new fruit type
      </button>
    </>
  );
}
