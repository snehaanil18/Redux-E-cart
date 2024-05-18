import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
} from 'mdb-react-ui-kit';
import { FaCartShopping } from "react-icons/fa6";
import { FaCartPlus } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


function Header() {
    const wishlistArray = useSelector((state) => state.wishlistReducer) // to get wiwishlist array

    const cartArray = useSelector((state) => state.cartReducer)
    return (
        <div>
            <MDBNavbar light style={{ backgroundColor: 'rgb(202, 247, 232)' , height:'80px' }}>
                <MDBContainer fluid>
                    <MDBNavbarBrand style={{ fontFamily: 'Poetsen One' }} href='#'>
                        <FaCartShopping className='ms-3 fs-2' />
                        ShopNShop
                        <div className='d-flex position-absolute top-0 end-0'>
                            <Link to={'/wishlist'}>
                            <div className='d-flex flex-column'>
                                <FaHeart  className='fs-2 text-danger me-4 ms-1 mt-2' />
                                <button style={{width:'8px' , height:'34px'}} className='btn btn-light text-center'>{wishlistArray.length}</button>
                            </div>
                            </Link>
                            <Link to={'/cart'}>
                            <div className='d-flex flex-column'>
                                <FaCartPlus className='fs-2 text-success me-5 ms-1 mt-2' />
                                <button style={{width:'8px' , height:'34px'}} className='btn btn-light text-center'>{cartArray.length}</button>
                            </div>
                            </Link>
                        </div>
                    </MDBNavbarBrand>
                </MDBContainer>
            </MDBNavbar>
        </div>
    )
}

export default Header