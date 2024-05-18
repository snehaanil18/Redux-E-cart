import React from 'react'
import { MDBFooter } from 'mdb-react-ui-kit';

function Footer() {
    return (
        <div>
            <MDBFooter style={{backgroundColor:'rgb(202, 247, 232)'}} className='fixed-bottom text-center text-lg-left'>
                <div className='text-center p-3'>
                    &copy; {new Date().getFullYear()} Copyright:{' '}
                    <a className='text-dark' href='https://mdbootstrap.com/'>
                    ShopNShop
                    </a>
                </div>
            </MDBFooter>
        </div>
    )
}

export default Footer