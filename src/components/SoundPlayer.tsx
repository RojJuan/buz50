import React from 'react';
import dingSound from '../sounds/ding.wav';

function SoundPlayer() {
  const audioRef = React.useRef(null);

  const playSound = () => {
    audioRef.current.play();
  };

  return (
    <div className="sound-player">
      <audio ref={audioRef} src={dingSound} />
      <button className='bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow mt-4' onClick={playSound}>Play Sound</button>
    </div>
  );
}

export default SoundPlayer;
