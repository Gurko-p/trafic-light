import Light from './components/Light';
import TrafficLight from './components/TrafficLight';

let trafficStateMas = {
  1: {
    1: "red active",
    2: "inactive",
    3: "inactive"
  },
  2: {
    1: "red active",
    2: "orange active",
    3: "inactive"
  },
  3: {
    1: "inactive",
    2: "inactive",
    3: "green active"
  },
  4: {
    1: "inactive",
    2: "inactive",
    3: "green pulsate"
  },
  5: {
    1: "inactive",
    2: "orange active",
    3: "inactive"
  },
}




function App() {
  return (
    <div className="main-container">
      <TrafficLight stateOfTrafficLight={trafficStateMas[1]} />
    </div>
  );
}

export default App;
