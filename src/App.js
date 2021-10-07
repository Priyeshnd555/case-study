import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import routing from "./routing";
import { BrowserRouter as Router, Route, NavLink,Link } from 'react-router-dom'
import Appbars from "./siddanth/Appbar";


function App() {
  return (
    <Router>
      <div className="App">
            <Appbars />
            <br></br>

        {routing}
      </div>
    </Router>
  );
}

export default App;
