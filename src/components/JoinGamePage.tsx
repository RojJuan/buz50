import React from 'react';
import './JoinGamePage.css';

function JoinGamePage() {
  return (
    <div className="join-game-container">
      <h2>Join Game</h2>
      <div className="input-container">
        <label htmlFor="gameCode">Game Code:</label>
        <input type="text" id="gameCode" name="gameCode" placeholder="Enter game code" />
      </div>
      <div className="input-container">
        <label htmlFor="nickname">Your Nickname:</label>
        <input type="text" id="nickname" name="nickname" placeholder="Enter your nickname" />
      </div>
    </div>
  );
}

export default JoinGamePage;
