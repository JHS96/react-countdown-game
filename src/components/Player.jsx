import { useState, useRef } from 'react';

export default function Player() {
  const playerName = useRef();

  const [enteredPlayerName, setEnteredPlayerName] = useState('');

  function handleClick() {
    setEnteredPlayerName(playerName.current.value);
    playerName.current.value = '';
  }

  return (
    <section id='player'>
      <h2>Welcome {enteredPlayerName || 'unknown entity'}</h2>
      <div>
        <input ref={playerName} type='text' id='playerName' />
        <button onClick={handleClick}>Set Name</button>
      </div>
    </section>
  );
}
