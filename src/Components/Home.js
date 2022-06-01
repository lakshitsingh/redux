import React from 'react'

const Home = () => {
  return (
    <div>
    <div className='add-to-cart'>
            <img src='https://www.freeiconspng.com/uploads/blue-shopping-cart-icon-29.png' />
        </div>
        <h1>Home Component</h1>
        <div className='cart-wrapper'>
            <div className='img-wrapper item'>
                <img src="https://cdn1.smartprix.com/rx-iwaea9W0y-w1200-h1200/iqoo-5-5g.jpg" alt='phone Image' />
            </div>
            <div className='text-wrapper item'>
                <span>
                    I-Phone
                </span>
                <span>
                    Price : $999.00
                </span>
            </div>
            <div className='btn-wrapper item'>
                <button>Add To Cart</button>
            </div>
        </div>
    </div>
  )
}

export default Home