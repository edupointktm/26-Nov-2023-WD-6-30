import React from 'react'
import CompB from './CompB'

function CompA(props) {
  return (
    <>
    <div>Component of A</div>
    <CompB fromB ={props.fromA}/>
    </>
  )
}

export default CompA