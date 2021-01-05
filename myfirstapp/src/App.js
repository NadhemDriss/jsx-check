import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import love1 from './love1.jpg.jpg';
import React from 'react';

function App() {
  return (
    <div>
      <div style={{ border: 'solid 1px black', maxWidth: '100vw' }}>

        <h1 className="title red">Your name here</h1>

        <br />

        <img src={love1} />

        <br />
     
      <img src="/love2.png" />



      <video width="320" height="240" controls />

      <source src="myVideo.mp4" type="video/mp4" />



      </div>
    </div>

  );
}

export default App;
