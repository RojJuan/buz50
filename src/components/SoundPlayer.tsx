import React, { useEffect, useRef, useState } from 'react';
import dingSound from '../sounds/ding.wav';

function SoundPlayer() {
  const audioRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const [cooldown, setCooldown] = useState(false);

  const playSound = () => {
    audioRef.current.play();
  };

  const toggleState = () => {
    setIsActive(prevState => !prevState); 
  };

  const startCooldown = () => {
    setCooldown(true);
    setTimeout(() => setCooldown(false), 3000); 
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === 'Space' && !cooldown) {
        event.preventDefault(); 
        playSound();
        toggleState();
        startCooldown();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [cooldown]);

  const handleClick = () => {
    if (!cooldown) {
      playSound();
      toggleState();
      startCooldown();
    }
  };

  return (
    <div className="sound-player">
      <audio ref={audioRef} src={dingSound} />
      <button
        className={`${
          isActive ? 'bg-green-500' : 'bg-blue-500'
        } hover:bg-blue-600 text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow mt-4 transition-colors duration-500`}
        onClick={handleClick}
        disabled={cooldown} 
        style={{ cursor: cooldown ? 'not-allowed' : 'pointer' }} // Change cursor during cooldown
      >
        Buzz!
      </button>
    </div>
  );
}

export default SoundPlayer;
