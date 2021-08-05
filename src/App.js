import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About';
import Header from './components/Header';
import Dropdown from './components/Dropdown'
import './App.scss'
import City from './pages/City';


function App() {
  const [toggle, setToggle] = useState(false)

  const navbarToggle = () => {
    setToggle(!toggle)
  }

  return (
    <div className='app'>
      <Header navbarToggle={navbarToggle} />
      <Dropdown toggle={toggle} navbarToggle={navbarToggle} />
      <main className='container'>
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/:id' component={City} exact />
          <Route path='/info/about' component={About} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
