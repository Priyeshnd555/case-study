// shortcut for router imrr 2nd one
// also add Link import statement  line no 3
import { BrowserRouter as Router, Route,Link, NavLink } from "react-router-dom";

// import logo from './logo192.png'
import Home from './Home/Home'
import SearchView from "./kavitha/SearchView";
// import ShowView from "./showView/ShowView";

// import './App.css'


const routing = (
    <div>
      <div>
      </div>
      <div>
      </div>
    <div>
        <Route path="/" component={Home} exact />
    </div>
    <div>
        <Route path="/searchView" component={SearchView} exact />
    </div>

    </div>
);


export default routing;