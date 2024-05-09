import React from 'react';
import './Copyright.css';

function Copyright() {

  const redirectToWarrantyPage = () => {
    window.open('https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html', '_blank');
  };

  return (
    <div className="copyright-container">
      <p>Buz50 version 0.1, Copyright &copy; 2024 Juan Rojas</p>
    <button onClick={redirectToWarrantyPage}>Buz50 comes with ABSOLUTELY NO WARRANTY; for details click on this text.</button>
    <button onClick={redirectToWarrantyPage}>This is free software, and you are welcome to redistribute it under certain conditions; click on this text for details.</button>
    </div>
  );
}

export default Copyright;
