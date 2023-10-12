import React, { useState } from 'react';
import Passcode from './Components/Passcode';
import Dashboard from './Components/Dashboard';
import Uploadfile from './Components/Uploadfile';

function App() {
  const [currentPage, setCurrentPage] = useState('passcode');

  const handlePasscodeSubmit = () => {
    setCurrentPage('uploadfile');
  };

  const handleFileUploadComplete = () => {
    setCurrentPage('dashboard');
  };

  

  return (
    <div className="">
      {currentPage === 'passcode' && (
        <Passcode
          onPasscodeSubmit={handlePasscodeSubmit}
         
        />
      )}
      {currentPage === 'uploadfile' && (
        <Uploadfile onComplete={handleFileUploadComplete} />
      )}
      {currentPage === 'dashboard' && <Dashboard />}
    </div>
  );
}

export default App;
