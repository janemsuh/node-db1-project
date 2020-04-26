import React from 'react';
import Form from './components/Form';
import Accounts from './components/Accounts';
import './App.css';

function App() {

  return (
    <div className="App">
      <h1 className='title'>Account Tracker</h1>
      <Form />
      <Accounts />
    </div>
  );
}

export default App; 