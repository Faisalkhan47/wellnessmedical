import { ProductService } from './DoctorsListData';
import React, { useState, useEffect } from 'react';
import { Carousel } from 'primereact/carousel';
import { Link } from 'react-router-dom';


export default function DoctorsList() {
    const [products, setProducts] = useState([]);
    const responsiveOptions = [
        {
            breakpoint: '1200px ',
            numVisible: 3,
            numScroll: 3
        },
        {
            breakpoint: '992px',
            numVisible: 2,
            numScroll: 3
        },
        {
            breakpoint: '768px',
            numVisible: 1,
            numScroll: 3
        },
        {
            breakpoint: '576px',
            numVisible: 1,
            numScroll: 3
        },
        {
            breakpoint: '300px',
            numVisible: 1,
            numScroll: 3
        }

    ];



    useEffect(() => {
        ProductService.getProductsSmall().then((data) => setProducts(data.slice(0, 9)));
    }, []);

    const productTemplate = (product) => {
        return (
            <Link to={product.link} style={{textDecoration:'none'}}>
                <div className="border-1 surface-border border-round m-2 text-center py-5" style={{ marginBottom: '2rem', boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px', marginRight: "8rem" }}>
                    <div className="mb-3">
                        <img style={{ height: "15rem", width: "18rem" }} src={product.image} alt='' />
                    </div>
                    <div style={{ marginTop: '2rem' }}>
                        <h4 className="mb-1" style={{color:'black'}}>{product.name}</h4>
                        <h6 className="mt-0 mb-3" style={{color:'black'}}>{product.hospital}</h6>
                    </div>
                </div>
            </Link>
        );
    };

    return (
        <div className="card" >
            <Carousel value={products} numVisible={3} numScroll={3} responsiveOptions={responsiveOptions} className="custom-carousel" circular
                autoplayInterval={5000} itemTemplate={productTemplate} />
        </div>
    )
}