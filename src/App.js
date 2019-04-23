import React, { Component } from 'react'

import Navbar from './components/Navbar'
import Top from './components/Top'

import { BrowserRouter, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Top} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
