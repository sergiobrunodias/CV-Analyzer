import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

function App() {

  const [text, setText] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/test")
      .then(res => res.json())
      .then((res) => setText(res), (err) => console.error(err));
  })

  return (
    <div>
      {text}
    </div>
  );
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);