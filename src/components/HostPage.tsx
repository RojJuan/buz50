import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

function HostPage() {
  return (
    <div className="host-page-container">
      <h2 className="underline text-4xl font-bold">Game settings</h2>
      <div className="input-container mt-4 font-bold">
        <label htmlFor="gameCode">Game Code:</label>
      </div>
      <div className="mt-4">
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque quam excepturi in fuga facilis delectus molestias, aut harum nobis ipsa optio nostrum possimus molestiae, inventore suscipit nesciunt quod, quaerat est.</p>
        </div>
        <div className="mt-4">
        <Link to="/" className='bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow mt-4'>
        End Game
        </Link>
        </div>
    </div>
  );
}

export default HostPage;
