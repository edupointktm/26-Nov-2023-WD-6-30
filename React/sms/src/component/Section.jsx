import React from 'react'

import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Gallery from '../Gallery'
import StudentDetails from '../StudentDetails'
import Course from '../Course'
import Contact from '../Contact'
import Page_not_found from '../Page_not_found'
import Student_card from './Student_card'
import Student_all_details from './Student_all_details'
function Section() {
    return (
        <>
           
          

          
              <Routes>
                  <Route path="/" element={<Home/>}/> 
                  <Route path="/about" element={ <About/>}/>
                  <Route path="/gallery" element={ <Gallery/>}/>
                  <Route path="/student-details" element={ <StudentDetails/>}/>
                  <Route path="/course" element={ <Course/>}/>
                  <Route path="/contact" element={ <Contact/>}/>
                  <Route path="/student-card" element={ <Student_card/>}/>
                  <Route path="/student-all-details/:stdID" element={ <Student_all_details/>}/>
                  <Route path="*" element = {<Page_not_found/>}/>
              </Routes>
           
        </>
    )
}

export default Section