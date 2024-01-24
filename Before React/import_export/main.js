import a from './app.js'
import names from './comp_name.js'
import address from './address.js'

document.querySelector('#root').innerHTML=
`
   ${a} <hr>
   <h3> ${names} </h3>
   <h4> ${address()} </h4>
  
   <hr>
`