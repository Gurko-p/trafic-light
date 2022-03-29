import Light from './components/Light';
import React, { useEffect, useState } from 'react';
import TrafficLight from './components/TrafficLight';

let trafficStateMas = [
  {
    1: "red active",
    2: "inactive",
    3: "inactive"
  },
  {
    1: "red active",
    2: "orange active",
    3: "inactive"
  },
  {
    1: "inactive",
    2: "inactive",
    3: "green active"
  },
  {
    1: "inactive",
    2: "inactive",
    3: "green pulsate"
  },
  {
    1: "inactive",
    2: "orange active",
    3: "inactive"
  },
]

  function App() {
    const [count, setCount] = useState(0);

    useEffect(
      () => {
       const timer = setInterval(() => { 
        setCount(
            (prevCount) => {
              const nextCount = prevCount + 1
             return  nextCount >= trafficStateMas.length ? 0 : nextCount
            })
        }, 1000);
        return () => {
          clearInterval(timer);
        }
      }, []
    )
    return (
      <div className="main-container">
        <TrafficLight stateOfTrafficLight={trafficStateMas[count]} />
      </div>
    );
  }

  export default App;
