import React from 'react'
import CompC from './CompC'

function CompB(props) {
    return (
        <>
            <div>Component of B</div>
            <CompC fromC = {props.fromB}/>
        </>
    )
}

export default CompB