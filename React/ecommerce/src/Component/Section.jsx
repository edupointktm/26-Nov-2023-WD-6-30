import React from 'react'
import Home from './Page/Home'
import { Route, Routes } from 'react-router-dom'
import Product_details from './Page/Product_details'

function Section(props) {
    return (
        <>


            <Routes>
                <Route path="/" element={<Home officeName={props.n}/>} />
                <Route path="/product-details/:pID" element={<Product_details />} />
            </Routes>
        </>
    )
}

export default Section