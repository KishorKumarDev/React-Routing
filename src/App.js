/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/

import React from 'react'
import {Link , Routes ,Route} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Users from './Users'
import UserShow from './UserShow'


const App = (props) => { 
  return (
    <div>
 
      <h1>React Routing</h1>
      <ul>
      <li><Link to="/" >Home</Link></li>
      <li><Link to="/about" >About</Link></li>
      <li><Link to="/Contact" >Contact</Link></li>
       <li><Link to="/Users" >Users</Link></li>
      </ul>
      <div>
      
      <Routes>
       <Route path = "/" element = {<Home /> }></Route> 
       <Route path = "/about" element = {<About /> }></Route>
       <Route path ="/Contact" element ={<Contact />}></Route> 
       <Route path ="/Users" element ={<Users />} exact={<true/>}></Route> 
       <Route path ="/Users/:id" element ={<UserShow />}></Route> 
       
       
      </Routes>
       </div>    
    </div>
  ) 
}

export default App

