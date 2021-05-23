import React from "react";
import Register from './components/Register'
import Auth from './components/Auth'
import Nav from './components/Nav'
import CreateEvent from './components/CreateEvent'
import Listing from './components/Listing'
import useEffect from './components/useEffect'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
 import "./App.css";

function App () {
  return(
    <Router>
  <div className="App">
<Nav/>
<Switch>
{/* <Route path='/listing' component={Listing}/> */}
<Route path='/register' component={Register}/>
<Route path='/login' component={Auth}/>
<Route path='/createEvent' component={CreateEvent}/>

</Switch>
</div>
</Router>
  );
}

export default App;




