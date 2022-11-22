import React, { useState } from 'react';
import { ProductsList } from './common/constants/productsList';
import Card from './components/Card';
import SideNavBar from './components/SideNavBar';

function App() {
  const [addProduct, setAddProduct] = useState(false)
  return (
    <div className='flex flex-row'>
      <SideNavBar />
      {/* Main Component */}
      <div>
        <div className={`ml-28 py-5 px-10 flex flex-row justify-between items-center`}>
          <div className=' flex flex-col'>
            <p className=' text-4xl font-medium'>Hi!! Explorer <span>😄</span></p>
            <p className='text-sm py-2 text-gray-400'>Lets find the greatest deal for you and many more</p>
          </div>
          <button className='bg-[#58bbfc] h-10 w-28 cursor-pointer rounded-3xl text-base hover:font-medium hover:shadow-2xl' onClick={() => alert("login")}>Login</button>
        </div>

        <div className={`py-5 px-10 ml-28 flex flex-col`}>
          <p className=' text-xl font-bold py-5'>Trending Products</p>
          {/* cards */}
          <div className=' flex flex-wrap gap-5 '>
            {ProductsList.map((product) => {
              const { id, productName, price, productImage, location, rating } = product
              return (
                <Card
                  key={id}
                  id={id}
                  productName={productName}
                  price={price}
                  productImage={productImage}
                  location={location}
                  rating={rating}
                />
              )
            })}
          </div>
        </div>
      </div>
      {!addProduct &&
        <button className='fixed bottom-5 right-5 bg-slate-400 h-20 w-20 rounded-full cursor-pointer hover:bg-[#58bbfc] hover:shadow-2xl'
          onClick={() => setAddProduct(pre => !pre)}
        >
          Add Product
        </button>
      }
      {
        addProduct &&
        <div className=' absolute md:static w-screen md:w-[40%] bg-slate-200 rounded-3xl rounded-r-none h-screen p-5'>
          <div className=' flex justify-start items-center'>
            <img src='icons/close-icon.svg' alt='close=icon' onClick={() => setAddProduct(pre => !pre)} />
            <p className=' w-full text-center'>Create a Request</p>
          </div>
          {/* form stage */}
          <div>

          </div>
        </div>
      }
    </div>
  );
}

export default App;
