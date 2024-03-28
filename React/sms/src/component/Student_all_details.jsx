import React from 'react'
import { useParams } from 'react-router-dom'
import Data from '../Data'
function Student_all_details() {
    let {stdID} = useParams()
    let getData = Data.find(d=> d.id==stdID)
    console.log(getData)
    return (
        <>
            <section>
                <div className="container">
                    <div className="row py-2 bg-light my-2">
                        <div className="col-10"> <h3 className='text-success'>STUDENT ALL DETAILS</h3></div>

                    </div>

                    <div className="row bg-light my-2">
                        <div className="col-3">
                            <img src={getData.image} alt="" />
                        </div>
                        <div className="col">
                            <h4> ID : {stdID} </h4>
                            <h6> Name :{getData.names} </h6>
                            <h6> Gender : </h6>
                            <h6> Address : </h6>
                            <h6> Mobile No : </h6>
                            <h6> Faculty No : </h6>
                        </div>
                    </div>
                    <div className="row bg-light my-2">
                       
                         <h4> Fee Details</h4> 
                       
                        <div className="col">
                            <p> Prev Dues : 45214 </p>
                           
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Student_all_details