import React from 'react'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn,
    MDBRipple
} from 'mdb-react-ui-kit';
import { FaCartPlus } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import { FaTrash } from "react-icons/fa6";
import { deleteFromWishlist } from '../Redux/Slices/wishlistSlice';
import { addToCart } from '../Redux/Slices/cartSlice';



function Wishlist() {

    const wishlistArray = useSelector((state) => state.wishlistReducer)

    const dispatch = useDispatch()

    const handleWishlistCart = (product) => {
        dispatch(addToCart(product))
        dispatch(deleteFromWishlist(product.id))
    }

    return (
        <div >
           <div className="row mx-4">

{wishlistArray?.length>0? wishlistArray.map((product) => (
        <div className="col">
        <MDBCard style={{width:'300px' , height:'500px' , margin:'10px'}}>
          <MDBCardImage height={'200px'} src={product.thumbnail} position='top' alt='...' />
          <MDBCardBody>
            <MDBCardTitle>{product.title}</MDBCardTitle>
            <MDBCardText>
              {product.description} <br />
              Price : {product.price}
            </MDBCardText>
            <div className="d-flex justify-content-evenlt">
            <MDBBtn onClick={() => dispatch(deleteFromWishlist(product.id))} className='btn-light'><FaTrash  className='fs-2 text-danger' /></MDBBtn>
            <MDBBtn onClick={() => handleWishlistCart(product)} className='btn-light'><FaCartPlus className='fs-2 text-success ' /></MDBBtn>
            </div>
            
          </MDBCardBody>
        </MDBCard>
      </div>
)):'Your Wishlist is empty'}



      </div>
        </div>
    )
}

export default Wishlist