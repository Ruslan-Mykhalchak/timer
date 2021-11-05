import { useState } from 'react';
import './App.css';

function App() {
  const [time, setTime] = useState({ms:0, s:0, m:0})
  const [interval, setInterv] = useState()
  const [status, setStatus] = useState(true)
  const [clicks, setClicks] = useState(0)
  // const [star,setStar] = useState(0)

  const start = () => {
    // run();
    setStatus(false);
    setInterv(setInterval (run, 10));
  }

  const stop = () => {
    setStatus(true)
    clearInterval(interval)
  }

  const reset = () => {
    clearInterval(interval)
    setTime({ms:0, s:0, m:0})
  }

  const wait = () => {
   setClicks(1)
    if (clicks === 1){
        setTimeout(function(){
          setClicks(2)
        }, 300);
        setClicks(0)
        return  clearInterval(interval)
    }
  }

  const run = () => {
    if (time.ms === 60){
      time.s++
      time.ms = 0
    }
    if (time.s === 60){
      time.m++
      time.s = 0
    }
    time.ms++
    return setTime({ms:time.ms, s:time.s, m:time.m})
  }

    return (
    <div className="App">
      <div>{time.m}:{' '}{time.s}:{' '}{time.ms}</div>
      {status? (<button onClick={start}>start</button>):
      (<button onClick={stop}>stop</button>) }
   
   <button onClick={wait}>Wait</button>
   <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;
