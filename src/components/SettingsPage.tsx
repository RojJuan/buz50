import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SettingsPage = () => {
  const [showSettings, setShowSettings] = useState(false);
  const [activeSetting, setActiveSetting] = useState(null);
  const navigate = useNavigate();

  const toggleSettings = (setting) => {
    setActiveSetting(setting === activeSetting ? null : setting);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Game Settings</h1>

      <div className="flex space-x-4 mb-6">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => setShowSettings(!showSettings)}
        >
          {showSettings
            ? "Hide Timer/Round Settings"
            : "Show Timer/Round Settings"}
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          onClick={() => navigate("/host")}
        >
          Close
        </button>
      </div>

      <div className="flex flex-col gap-4 mb-6">
        <button
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          onClick={() => toggleSettings("teams")}
        >
          Show Teams
        </button>
        <button
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          onClick={() => toggleSettings("points")}
        >
          Show Points
        </button>
        <button
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          onClick={() => toggleSettings("selfJoin")}
        >
          Allow Player to Self Join Teams
        </button>
        <button
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          onClick={() => toggleSettings("earlyBuzz")}
        >
          Early Buzz Penalty
        </button>
        <button
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          onClick={() => toggleSettings("penaltyTime")}
        >
          Set Penalty Time
        </button>
        <button
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          onClick={() => toggleSettings("pointsIncrement")}
        >
          Set Points Increment
        </button>
        <button
          className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
          onClick={() => toggleSettings("gameplay")}
        >
          Gameplay
        </button>
        <button
          className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
          onClick={() => toggleSettings("sound")}
        >
          Sound
        </button>
        <button
          className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600"
          onClick={() => toggleSettings("miscPlayer")}
        >
          Misc. Player Settings
        </button>
      </div>

      {showSettings && (
        <div className="p-4 bg-white shadow rounded w-full max-w-md mb-4">
          <h2 className="text-xl font-semibold mb-2">Timer & Round Settings</h2>
          <div>
            <h3 className="text-lg font-semibold mb-2">Timer Settings</h3>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Round Settings</h3>
          </div>
        </div>
      )}

      {activeSetting === "teams" && (
        <div className="p-4 bg-white shadow rounded w-full max-w-md mb-4">
          <h2 className="text-xl font-semibold mb-2">Teams Settings</h2>
        </div>
      )}

      {activeSetting === "points" && (
        <div className="p-4 bg-white shadow rounded w-full max-w-md mb-4">
          <h2 className="text-xl font-semibold mb-2">Points Settings</h2>
        </div>
      )}

      {activeSetting === "selfJoin" && (
        <div className="p-4 bg-white shadow rounded w-full max-w-md mb-4">
          <h2 className="text-xl font-semibold mb-2">
            Self Join Teams Settings
          </h2>
        </div>
      )}

      {activeSetting === "earlyBuzz" && (
        <div className="p-4 bg-white shadow rounded w-full max-w-md mb-4">
          <h2 className="text-xl font-semibold mb-2">
            Early Buzz Penalty Settings
          </h2>
        </div>
      )}

      {activeSetting === "penaltyTime" && (
        <div className="p-4 bg-white shadow rounded w-full max-w-md mb-4">
          <h2 className="text-xl font-semibold mb-2">Set Penalty Time</h2>
        </div>
      )}

      {activeSetting === "pointsIncrement" && (
        <div className="p-4 bg-white shadow rounded w-full max-w-md mb-4">
          <h2 className="text-xl font-semibold mb-2">Set Points Increment</h2>
        </div>
      )}

      {activeSetting === "gameplay" && (
        <div className="p-4 bg-white shadow rounded w-full max-w-md mb-4">
          <h2 className="text-xl font-semibold mb-2">Gameplay Settings</h2>
          <button className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600">
            One Buzz Only
          </button>
        </div>
      )}

      {activeSetting === "sound" && (
        <div className="p-4 bg-white shadow rounded w-full max-w-md mb-4">
          <h2 className="text-xl font-semibold mb-2">Sound Settings</h2>
          <button className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 mb-2">
            Allow Buzzing Sound on Players Devices
          </button>
          <button className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 mb-2">
            Play a Buzzing Sound on the Host (First Buzz Only)
          </button>
          <button className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600">
            Play a Buzzing Sound on the Host (All Buzzes)
          </button>
        </div>
      )}

      {activeSetting === "miscPlayer" && (
        <div className="p-4 bg-white shadow rounded w-full max-w-md mb-4">
          <h2 className="text-xl font-semibold mb-2">Misc. Player Settings</h2>
          <button className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 mb-2">
            Remove All Players
          </button>
          <button className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 mb-2">
            Remove All Points
          </button>
          <button className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 mb-2">
            Show Buzz List on Player Devices
          </button>
          <button className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 mb-2">
            Show Player Points on Player Devices
          </button>
          <button className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 mb-2">
            Show Team Points on Player Devices
          </button>
          <button className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 mb-2">
            Show Timer on Player Devices
          </button>
          <button className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 mb-2">
            Allow New Players to Join
          </button>
        </div>
      )}
    </div>
  );
};

export default SettingsPage;
