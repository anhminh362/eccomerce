import React, { useEffect, useState } from 'react';

function ShowProduct() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            setProducts(data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    return (
        <div>
            <div className="fashion_section">
                <div id="main_slider" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        {products.map((product, index) => (
                            <div id={index} className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                                <div className="container">
                                    <h1 className="fashion_taital">Man &amp; Woman Fashion</h1>
                                    <div className="fashion_section_2">
                                        <div className="row">
                                            <div className="col-lg-4 col-sm-4">
                                                <div className="box_main">
                                                    <h4 className="shirt_text">{product.title}</h4>
                                                    <p className="price_text">
                                                        Price <span style={{ color: '#262626' }}>${product.price}</span>
                                                    </p>
                                                    <div className="tshirt_img">
                                                        <img src={product.image} alt={product.title} />
                                                    </div>
                                                    <div className="btn_main">
                                                        <a className="buy_bt">
                                                            <a href="#">Buy Now</a>
                                                        </a>
                                                        <a className="seemore_bt" href={`/detail/${product.id}`}>
                                                            See More
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShowProduct;
