import React, { useEffect, useState } from 'react'

function Nav() {
    let [cat, updateCat] = useState([])

    useEffect(() => {


        fetch('https://fakestoreapi.com/products/categories')
            .then(res => res.json())
            .then(d => updateCat(d))

    }, [])

    // console.log(cat)
    return (
        <>
            <section className='border-bottom py-2'>
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        {cat.map((c) =>
                            <div className="col-2">{c.toUpperCase()}</div>
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Nav