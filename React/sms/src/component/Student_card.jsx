import React from 'react'
import Data from '../Data'
import { Link } from 'react-router-dom'
function Student_card() {
    return (
        <>
            <section>
                <div className="container">
                    <div className="row py-2 bg-light my-2">
                        <div className="col-10"> <h3 className='text-success'>STUDENT CARD</h3></div>

                    </div>
                </div>

                <div className="container-fluid">
                    <div className="row">

                        {Data.map(d =>
                            <div className="col-4">
                                <Link to={`/student-all-details/${d.id}`}>
                                <div className="card">
                                    <div className="card-header">BROADWAY INFOSYS</div>
                                    <div className="card-body">

                                        <div className="image">
                                            <div className="img-title">ID No.: {d.id}</div>
                                            <img src={d.image} alt="" /></div>
                                        <div className="card-content">
                                            <div className="title">{d.names}
                                                <div className="sub-title">{d.Faculty}</div>

                                            </div>
                                            <div className="card-details">
                                                <h6>Moible No.: {d.Mobile_no}</h6>
                                                <h6>Address: {d.Address} </h6>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="card-footers">IDENTITY CARD</div>
                                </div>
                                </Link>
                            </div>
                        )}


                    </div>



                </div>
            </section>
        </>
    )
}

export default Student_card