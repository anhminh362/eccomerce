import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ProductDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetchProduct(id);
    }, [id]);

    const fetchProduct = async (productId) => {
        try {
            const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
            const data = await response.json();
            setProduct(data);
        } catch (error) {
            console.error('Error fetching product:', error);
        }
    };

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div className="product-container">
                <div className="product-image">
                    <img className="small-image" src={product.image} alt={product.title} />
                </div>
                <div className="product-details">
                    <h1>{product.title}</h1>
                    <p>{product.description}</p>
                    <p>Price: {product.price}</p>
                    <p>Category: {product.category}</p>
                    <p>Rating: {product.rating.rate} ({product.rating.count} reviews)</p>
                </div>
            </div>
        </div>

    );
}

export default ProductDetail;
