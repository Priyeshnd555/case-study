import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import routing from "./routing";
import { BrowserRouter as Router, Route, NavLink,Link } from 'react-router-dom'


function App() {
  return (
    <Router>
      <div className="App">
        {routing}
      </div>
    </Router>
  );
}

export default App;
