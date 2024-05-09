import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './App.css';
import Copyright from './components/Copyright';
import Instructions from './components/Instructions';

function App() {
  return (
    <>
      <div>
        <h1 className='text-4xl font-bold underline'>Buz50</h1>
        <p className='font-bold'>building in progress</p>
      </div>
      <div className='mt-4'>
        <Link to="/join" className='bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow mt-4'>
          Join Game
        </Link>
      </div>
      <div className='mt-4'>
        <div className="mt-4"> 
        <Link to="/host" className='bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow'>
          Create Game
        </Link>
        </div>
      </div>
      <Copyright />
      <Instructions />
    </>
  );
}

export default App;
