import './App.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Education from './Education';
import Project from './Project';
import Skills from './Skills';
import Nav from './Nav';
// import Notfound from './Notfound';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
function App(){
  return (
      <>
<div className="App">
<Router>
<Switch>
<Route exact path="/"><Nav/></Route>
<div className="particle">
<Route exact path="/Skills"><Skills/></Route>
<Route  path="/Project" exact component={Project} />
<Route  path="/Education" exact  component={Education} />
{/* <Route  component={Notfound} /> */}
</div>
</Switch>
</Router>
</div>
</>
    )
}
export default App;


