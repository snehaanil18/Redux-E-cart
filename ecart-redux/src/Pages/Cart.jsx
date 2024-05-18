import React, { useEffect } from 'react'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { MdDelete } from "react-icons/md";
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardHeader,
    MDBCardFooter,
    MDBBtn
} from 'mdb-react-ui-kit';
import { useDispatch, useSelector } from 'react-redux';
import { deleteFromCart, emptyCart } from '../Redux/Slices/cartSlice';
import { useState } from 'react';

function Cart() {
    const cartArray = useSelector((state) => state.cartReducer)
    const dispatch = useDispatch()

    const [cartTotal,setcartTotal] = useState('')
    const getCartTotal = () =>{
        if(cartArray.length>0){
            setcartTotal(cartArray.map(item => item.price).reduce((p1,p2)=> p1+p2))
        }
        else{
            setcartTotal(0)
        }
    }

    const handleCartOrder = () =>{
        console.log('button');
        dispatch(emptyCart())
        alert('Your order has been Placed')
    }

    useEffect(()=>{
        getCartTotal()
    },[cartArray])

    return (
        <div> 
            <div className="row d-flex justify-content-around my-3">
                <div className="col-6  ">
                    <MDBTable style={{width:'550px'}} className='mx-4' bordered>
                        <MDBTableHead>
                            <tr>
                                <th scope='col'>id</th>
                                <th scope='col'>Name</th>
                                <th scope='col'>Image</th>
                                <th scope='col'>Price</th>
                                <th scope='col'>Action</th>
                            </tr>
                        </MDBTableHead>
                        <MDBTableBody>
                        {cartArray?.length>0?cartArray.map((item,index) => (
                            <tr>
                                <th scope='row'>{index+1} </th>
                                <td>{item.title} </td>
                                <td><img width={'100%'} height={'100px'} src={item.thumbnail} alt="" /></td>
                                <td>{item.price} </td>
                                <td><button onClick={() => dispatch(deleteFromCart(item.id))} className='btn text-danger mx-1'><MdDelete className='fs-4' /></button></td>
                            </tr>
                        )):"Your Cart i empty"}
                        </MDBTableBody>
                    </MDBTable>
                </div>

                <div className="col-6">
                    <MDBCard className='border shadow' style={{width:'480px'}} alignment='center'>
                        <MDBCardBody>
                            <MDBCardTitle>Cart Summary</MDBCardTitle>
                            <MDBCardText>Total Item :{cartArray.length} </MDBCardText>
                            <MDBCardText>Total Price :{cartTotal} </MDBCardText>
                            <button onClick={handleCartOrder} className='btn btn-info'>CheckOut</button>
                        </MDBCardBody>
                    </MDBCard>
                </div>
            </div>

        </div>
    )
}

export default Cart