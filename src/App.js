import React from 'react'
import './App.css'
import {Navbar,Brand,CTA} from './components'
import { Header,Footer,Possibility,WhatGPT3,Blog,Features} from './containers'
const App = () => {
  return (
    <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <Brand />
    <WhatGPT3 />
    <Possibility />
    <Features/>
    <CTA />
    <Blog />
    <Footer />
  </div>
  )
}

export default App