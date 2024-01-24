import React from "react";

function Nav(){

    return (
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container">
                    <a className="navbar-brand" href="#">26-<span className="fw-bold text-danger">Nov</span>-2023</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/about">About</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Gallery</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Course</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Student</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Contact</a>
                            </li>


                        </ul>

                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav