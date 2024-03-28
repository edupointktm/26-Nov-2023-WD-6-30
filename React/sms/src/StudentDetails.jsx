import React from 'react'
import Data from './Data'
import { Link } from 'react-router-dom'
function StudentDetails() {


    return (
        <>
            <section>
                <div className="container">
                    <div className="row py-2 bg-light my-2">
                       <div className="col-10"> <h3 className='text-success'>STUDENT DETIALS</h3></div>
                       <div className="col-2"><Link to="/student-card"> <h4>Studnet Card</h4></Link></div>
                    </div>


                    <div className="row bg-primary text-light">
                        <div className="col-1">SN</div>
                        <div className="col-3">Name of Student</div>
                        <div className="col-3">Mobile No</div>
                        <div className="col-4">Address</div>
                        <div className="col-1">Action</div>
                    </div>
                    {Data.map((d, i) =>
                        <div className="row bg-white py-2 border" key={i}>
                            <div className="col-1" >{d.id} </div>
                            <div className="col-3">{d.names}</div>
                            <div className="col-3">{d.Mobile_no}</div>
                            <div className="col-4">{d.Address}</div>
                            <div className="col-1"><Link to={`/student-all-details/${d.id}`}><i class="fa-solid fa-eye"></i></Link></div>
                        </div>
                    )}


                </div>
            </section>
        </>
    )
}

export default StudentDetails