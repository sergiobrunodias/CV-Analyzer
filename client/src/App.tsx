// @ts-nocheck
import React, { useEffect, useState, } from 'react';
import logo from './images/resume.svg';
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
        <p style={styles.title}>
          Upload your cv and a job offer <br/>
          To check if you are suited for the job!
        </p>
        <img src={logo} className="App-logo" alt="logo" style={{height: 100, width: 100 }}/>
        <p>
          {text}
        </p>
        <FileDropZone />
      </header>
    </div>
  );
}

const styles = {
  title: {
    fontWeight: 'bold',
    fontSize: 30
  },
}

export default App;
