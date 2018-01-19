import React, { Component } from 'react';
import './App.css';
import ComponentHome from './ComponentHome'
import {BrowserRouter as Router,Route,Redirect} from 'react-router-dom'
import MusicPlay from './route/MusicPlay'
import Paihangbang from './component/Paihangbang'
import Home from './component/Home'
import Video from './route/Video'

class App extends Component {
  render() {
    return (
      <Router>
      <div id="App">
        < ComponentHome />
        <Route path="/music/:id"  component={MusicPlay} />
        <Route path="/something"  component={Paihangbang} />
        <Route path="/home" component={Home}/>
        <Route path="/home/:id" component={Video} />
        {/* <Redirect exact to="/"/> */}
      </div>
      </Router >
    );
  }
}

export default App;
