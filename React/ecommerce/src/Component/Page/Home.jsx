import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Home(props) {
    let [product, updateProduct] = useState([])
    let [search, updateSearch] = useState('');
    
    let filterData = product.filter(fd=>fd.title.toLowerCase().includes(search))

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(d => updateProduct(d))
    }, [])

    console.log(filterData)
    return (
        <>
            <div className="container">
                <div className="row my-3">
                    <div className="col"><h3>PRODCUTS of {props.officeName}</h3></div>
                    <div className="col">
                        <input className="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search..." 
                        onChange={(e) => updateSearch(e.target.value)} />
                    </div>
                </div>
                <div className="row gap-3">

                    {filterData.map((p) =>

                        <div className="col">
                            <Link to={`/product-details/${p.id}`}>
                                <div className="card">
                                    <div className="card-body">
                                        <div className="image">
                                            <img src={p.image} alt />
                                        </div>
                                        <div className="only-price">
                                            <div className="only">Only</div>
                                            <div className="price">Rs {p.price}</div>
                                        </div>
                                        <div className="details">{p.category}</div>
                                        <div className="mark-price"><del>Rs 4210</del></div>
                                    </div>
                                </div>
                            </Link>
                        </div>

                    )}


                </div>
            </div >
        </>
    )
}

export default Home