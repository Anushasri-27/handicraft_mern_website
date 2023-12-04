import React, { useState, useEffect } from 'react'
import { useParams, Link } from "react-router-dom";
import "../styles/browse.css";

const Browse = () => {
    const [product, setProduct] = useState([]);

    //   const { category } = useParams();

    const fetchProduct = async () => {
        const res = await fetch("http://localhost:5000/product/getall");

        console.log(res.status);

        const data = await res.json();
        console.log(data);
        if (res.status === 200) {
            // const data = await res.json();
            console.log(data);
            setProduct(data)
        }
    };

    useEffect(() => {
        fetchProduct();
    }, []);

    const displayProduct = () => {
        if (product.length === 0) return <h1 className='text-center'>No Data Found</h1>
        return product.map((obj) => (
            <div className='col-md-4 p-5   my-5 justify-content-center justify-content-evenly'>
                <div className='card shadow-lg rounded-5'>
                    <img src={'https://localhost:5000/' + obj.pimage} alt="" className="card-img-top img-fluid" style={{ objectFit: "cover", height: 250 }} />
                    <div className='card-body'>
                        <h4 className=''>{obj.pname}</h4>
                        <h6 className='text-muted'>{obj.pcategory}</h6>
                        {/* <p className='mt-3'> <i class="fa-solid fa-star text-warning"></i>{product.rating} Stars & <i className="fa-solid fa-user"></i> 5069 Reviews </p> */}
                        <h2 className="float-end mt-0"> ₹{obj.pprice} </h2>
                    </div>
                    <div class="card-footer">
                        <button class="btn btn-primary float-end">Buy Now</button>
                    </div>
                </div>
            </div>))
    }

    const filterData = (e) => {
        const value = e.target.value;
        setProduct(product.filter((product) => {
            return product.pname.toLowerCase().includes(value.toLowerCase())
        })
        );
    };


    return (
        <div className=''>
            <header className='bg-body-tertiory'>
                <div className='container py-5'>

                    <p className='display-2 text-center mb-5 fw-bold txt'>All Products</p>

                    <input type="text" placeholder='Search Items' className='form-control w-75 m-auto' onChange={filterData} />

                </div>
            </header >
            <div className='container mt-5 '>

                <div className='row mt-5 p-5'> {displayProduct()} </div>


            </div>
        </div >
    )
}

export default Browse