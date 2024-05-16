import React from "react";
import { Link } from "react-router-dom"; 

function HostPage() {
  return (
    <div className="host-page-container">
      <h2 className="underline text-4xl font-bold">Game settings</h2>
      <div className="input-container mt-4 text-3xl">
        <p>Game code</p>
        <p className="font-bold">ABCDEF</p>
      </div>
      <div className="mt-4 flex space-x-4">
        <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow">
          Clear Buzzers
        </button>
        <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow">
          Lock Game
        </button>
      </div>
      <p className="mt-4">Spacebar also resets buzzers!</p>
      <p className="mt-6 text-2xl font-bold">Players</p>
      <p>Player Limit: 8</p>
      <div className="mt-4">
        <Link to="/" className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow mt-4">
          End Game
        </Link>
      </div>
    </div>
  );
}

export default HostPage;
