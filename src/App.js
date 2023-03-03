import { useEffect, useRef, useState } from 'react';
import './App.css';


function App() {
  const inputElement = useRef(null);
  const [counter,setCounter] = useState(0)
  const [minSec,setminSec] = useState("00:00")
  useEffect(() => {
    setTimeout(() => {
      if(counter>=0)
      {
       let minutes = Math.floor(counter / 60);
       let seconds = counter - minutes * 60;
       minutes = minutes < 10 ? '0'+minutes : minutes
       seconds = seconds < 10 ? '0'+seconds : seconds
       setminSec(minutes+":"+seconds)
       setCounter(counter-1);
      }
      console.log(counter)
    }, 1000);
  },[counter]);
  const start = () => {
    let min = inputElement.current.value
    let sec = min * 60
    setCounter(sec)
  };
  const reset = () => {
    inputElement.current.value=""
    setCounter(0)
  };

  return (
    <div className="App">
      <br/><br/>
      <div>
      <input type='text' ref={inputElement} 
      placeholder='Enter time in mins'/>
      <button onClick={() => start()}>
        Start
      </button>
      <button onClick={() => reset()}>
        Reset
      </button>
      </div>
      <h2>{minSec}</h2>
    </div>
  );
}

export default App;



