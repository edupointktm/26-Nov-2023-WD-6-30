import React from 'react'
import Header from './Component/Header'
import Nav from './Component/Nav'
import Section from './Component/Section'
import Footer from './Component/Footer'

function App() {
  
  let names = "Prabhat"
  return (
    <>
     
        <Header />
        <Nav />
        <Section n={names} />
        <Footer />
      
    </>
  )
}

export default App