import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Product_details() {
    let [product, updateProduct] = useState([])
    let { pID } = useParams()
    let pDetails = product.find((p) => p.id == pID)

    console.log(pDetails)
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(d => updateProduct(d))
    }, [])

    return (
        <>
            <section>
                <div className="container">
                    
                        <div className="row">
                            <h4>  </h4>
                            <div className="col">
                                <img src="" alt="" />
                            </div>
                            <div className="col">
                                <h2> </h2>
                            </div>
                        </div>
                    
                </div>
            </section>
        </>
    )
}

export default Product_details