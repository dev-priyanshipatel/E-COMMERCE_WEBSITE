import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeProduct, updateQuantity } from "../features/cart/cartSlice";

const Cart = () => {
  const { cart } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  const subTotal = cart.reduce((total , item) => {
    return total + item.qty * item.price;
  },0) 

  return (
    <>
      <section className="py-5">
        <div className="container bg-white p-5">
          <div className="py-5">
            <h1>Cart</h1>
          </div>
          {cart.length === 0 ?
          (
            <div>
              <div className="container">
                <div className="py-5 text-center">
                  <h2>Your Cart is Empty</h2>
                  <img
                    src="/images/empty-cart.jpg"
                    alt="empty-cart"
                    className="img-fluid"
                    style={{ width: "500px", height: "500px" }}
                  />
                </div>
              </div>
            </div>
          )
          :
          (
            <div>
              <div className="table-responsive">
                <table className="table align-middle text-center">
                  <thead>
                    <tr>
                      <th></th>
                      <th>PRODUCT</th>
                      <th>QUANTITY</th>
                      <th>PRICE</th>
                      <th>TOTAL</th>
                      <th>DELETE</th>
                    </tr>
                  </thead>
                  <tbody id="cart-container">
                    {cart.map((product) => {
                      return (
                        <tr key={product.id}>
                          <td>
                            <div className="py-3">
                              <img
                                src={product.image}
                                alt={product.title}
                                className="img-fluid pro-img"
                                style={{ width: "110px", height: "120px" }}
                              />
                            </div>
                          </td>
                          <td>
                            <div>
                              <h4 className="product-title fst-italic">
                                {product.title}
                              </h4>
                            </div>
                          </td>
                          <td>
                            <div className="d-flex align-items-center">
                              <button
                                className="btn qty-btn text-white fw-bold"
                                disabled={product.qty === 1}
                                onClick={() => {
                                  dispatch(
                                    updateQuantity({
                                      id: product.id,
                                      type: "dec",
                                    }),
                                  );
                                }}
                              >
                                -
                              </button>
                              <h4 className="mx-3 pb-0 fs-4">{product.qty}</h4>
                              <button
                                className="btn qty-btn text-white fw-bold"
                                onClick={() => {
                                  dispatch(
                                    updateQuantity({
                                      id: product.id,
                                      type: "inc",
                                    }),
                                  );
                                }}
                              >
                                +
                              </button>
                            </div>
                          </td>
                          <td>
                            <div className="">
                              <h4 className=" fw-bold">{product.price}</h4>
                            </div>
                          </td>
                          <td>
                            <div className="">
                              <h4 className="text-success">
                                ${product.price * product.qty}
                              </h4>
                            </div>
                          </td>
                          <td>
                            <div>
                              <i
                                className="ri-delete-bin-6-line fs-3 text-danger"
                                style={{ cursor: "pointer" }}
                                onClick={() => {
                                  dispatch(removeProduct(product.id));
                                }}
                              ></i>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <div className="d-flex justify-content-between">
                <h2 className="fw-bold">Cart Total :</h2>
                <h2 id="main-total" className="fw-bold">
                  ${subTotal.toFixed(2)}
                </h2>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Cart;
