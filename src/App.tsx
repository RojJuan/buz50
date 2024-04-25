import React from 'react';
import './App.css';
import Copyright from './components/Copyright';

function App() {
  return (
    <>
      <div>
        <h1 className='text-4xl font-bold underline'>Buz50</h1>
        <p className='font-bold'>building in progress</p>
        <button className='bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow mt-4'>Join Game</button>
      </div>
      <div className="mt-4"> 
        <button className='bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow'>Create Game</button>
      </div>
      <Copyright />
    </>
  );
}

export default App;
