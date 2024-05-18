import React from 'react'
import useFetch from '../hooks/useFetch'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';
import { FaCartPlus } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux'
import { addToWishlist } from '../Redux/Slices/wishlistSlice';
import { addToCart } from '../Redux/Slices/cartSlice';

function Home() {
  const dispatch = useDispatch()
  const result = useFetch("https://dummyjson.com/products")
  // console.log(result);



  return (
    <div>
      <div className="row mx-4">

        {result?.length > 0 ? result.map((product) => (
          <div className="col">
            <MDBCard style={{ width: '300px', height: '500px', margin: '10px' }}>
              <MDBCardImage height={'200px'} src={product.thumbnail} position='top' alt='...' />
              <MDBCardBody>
                <MDBCardTitle>{product.title}</MDBCardTitle>
                <MDBCardText>
                  {product.description} <br />
                  Price : {product.price}
                </MDBCardText>
                <div className="d-flex justify-content-evenlt">
                  <MDBBtn onClick={() => dispatch(addToWishlist(product))} className='btn-light'><FaHeart className='fs-2 text-danger' /></MDBBtn>
                  <MDBBtn onClick={() => dispatch(addToCart(product))} className='btn-light'><FaCartPlus className='fs-2 text-success ' /></MDBBtn>
                </div>

              </MDBCardBody>
            </MDBCard>
          </div>
        )) : 'null'}



      </div>
    </div>
  )
}

export default Home