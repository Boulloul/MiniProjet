import 'bootstrap/dist/css/bootstrap.css';
import Liste from './afficheEtudiants'
import FormPage from './AjouterEtudiant'
import about from './images/about.jpg';



import React, { Component } from "react";

class  GestionEtu  extends Component{
    
    
  
 render(){
   
    
  return(
    <div>
     <div  style={{ backgroundImage:`url(${about})`, backgroundSize: "cover"}}>
     
        <FormPage/></div><br/>
        <div className="container"><Liste/></div>
          
     </div>
);
   	
}
}


export default GestionEtu;

/*import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';


import About from "./components/About/About"
import Home from "./components/Home/Home"



import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="App">
    <nav class="navbar navbar-expand-lg navbar-light bg-warning">
    
<Link to={'/home'} ><a class="navbar-brand" href="">Blog-07</a></Link>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarNav">
<ul class="navbar-nav">
            <li><Link to={'/home'} className="nav-link"> Home </Link></li>  
            <li><Link to={'/about'} className="nav-link">About</Link></li>
         

</ul>
</div>
         <form class="form-inline">
            <input type="text" class="form-control mr-2" placeholder="chercher"/>
            <button type="submit" class="btn btn-outline-dark">GO</button>
          </form>
</nav>
<Switch>
              <Route exact path='/' component={Home} exact/>
              <Route path='/article' component={Articles} exact/>
              <Route path='/about' component={About} exact/>
              <Route path='/home' component={Home} exact/>
              <Route path="/article/:name" component={DetailArticle} exact/>
              <Route path="/add" component={Add} exact/>
              

</Switch>
</div>
</Router>
  );
}

export default App;

*/