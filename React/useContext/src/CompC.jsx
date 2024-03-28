import React, { useContext, useEffect, useState } from 'react'
import { nameContext } from './App'
export default function CompC(props) {
    let getData = useContext(nameContext)
    return (
        <>
            <div>Component of C : {props.fromC} </div>
            <h3> {getData} </h3>
        </>
    )
}

