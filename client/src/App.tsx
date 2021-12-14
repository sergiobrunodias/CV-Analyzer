import React, { useEffect, useState, } from 'react';
import logo from './images/resume.svg';
import './App.css';
import FileDropZone from './components/FileDropZone';
import API from './api/API';

function App() {

  const [text, setText] = useState("");
  const [uploadVisible, setUploadVisible] = useState(true)

  useEffect(() => {
    fetch("http://localhost:5000/api/test")
      .then(res => res.json())
      .then((res) => setText(res), (err) => console.error(err));
  })

  const sendFileToServer= async (data: any) => {
      await new API().uploadFile(data);
  }

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
        {
          uploadVisible?
            <FileDropZone onDataExtract={sendFileToServer}/> : null
        }
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
