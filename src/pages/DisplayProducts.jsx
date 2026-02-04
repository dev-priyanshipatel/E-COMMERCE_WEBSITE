import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../features/products/productSlice';
import { addproduct } from '../features/cart/cartSlice';

const DisplayProducts = () => {

    const dispatch = useDispatch();
    const {isloading, products,} = useSelector(store => store.products);
    const { cart } = useSelector(store => store.cart)
    

    useEffect(( ) => {
        dispatch(fetchProducts())
    }, [])
  return (
    <div className="container bg-white p-5">
        <div className='mb-5'>
            <h2>All Products</h2>
        </div>
      <div className="row g-4">
        {products.map((product) => {
          return (
            <div className="col-lg-3 col-md-4 col-sm-6" key={product.id}>
              <div className="card h-100 border-0 shadow-sm product-card">
                <div className="p-3 text-center">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="img-fluid product-image"
                  />
                </div>

                <div className="card-body d-flex flex-column">
                  <h6 className="card-title mb-2 product-title">
                    {product.title}
                  </h6>

                  <p className="fw-bold product-price mb-3 ">
                    ${product.price}
                  </p>

                  <button className="btn btn-dark mt-auto" onClick={() => {dispatch(addproduct(product))}}>
                    <i className="ri-shopping-bag-2-line me-2"></i>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          );
            })}
      </div>
    </div>
  );
}

export default DisplayProducts