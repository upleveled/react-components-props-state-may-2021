import emoji from 'node-emoji';
import { useState } from 'react';

export default function RandomEmojiGenerator() {
  const [randomEmoji, setRandomEmoji] = useState(emoji.random().emoji);
  return (
    <div>
      <div>{randomEmoji}</div>
      <button onClick={() => setRandomEmoji(emoji.random().emoji)}>
        Update emoji
      </button>
    </div>
  );
}
