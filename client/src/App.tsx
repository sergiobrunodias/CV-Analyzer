import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import FileDropZone from './components/FileDropZone';

function App() {

  const [text, setText] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/test")
      .then(res => res.json())
      .then((res) => setText(res), (err) => console.error(err));
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {text}
        </p>
        <FileDropZone />
      </header>
    </div>
  );
}

export default App;
