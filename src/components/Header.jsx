import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router'

const Header = () => {
    const { cart } = useSelector(store => store.cart)
    console.log(cart.length);

  return (
    <header className="bg-dark">
        <div className="container">
            <div className="d-flex  align-items-center justify-content-between p-3">
                <div>
                    <Link to={'/'}><img src="/images/logo.png" alt="EREN" /></Link>
                </div>
                <nav className="px-3">
                    <ul className="d-none d-md-flex justify-content-end list-unstyled gap-4 m-0">
                        <li><Link to={"/"} className="text-decoration-none text-light">HOME</Link></li>
                        <li><Link to={'/products'} className="text-decoration-none text-light">SHOP</Link></li>
                        <li><Link to={"/"} className="text-decoration-none text-light">COLLECTIONS</Link></li>
                        <li><Link to={"/"} className="text-decoration-none text-light">BLOG</Link></li>
                        <li><Link to={"/"} className="text-decoration-none text-light">CONTACT US</Link></li>
                    </ul>
                </nav>
                <div className="d-flex align-items-center justify-content-center position-relative">
                    <Link to={'/cart'} className='text-decoration-none'>
                        <i className="ri-shopping-cart-2-line text-white fs-3 position-relative"></i>
                        <span className="item-count text-white text-center" id="item-count">{cart.length}</span>
                    </Link>
                </div>
            </div>
        </div> 
    </header>
  )
}

export default Header