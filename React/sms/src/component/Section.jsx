import React from 'react'
import Home from './Home'
import About from './About'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function Section() {
    return (
        <>
           
           {/* <About/> */}

        <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                </Routes>
        </BrowserRouter>

        </>
    )
}

export default Section