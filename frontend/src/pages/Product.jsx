import React, { useContext, useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import {ShopContext} from '../context/ShopContext'
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {
 const {ProductId} = useParams();
const {products, currency, addToCart} = useContext(ShopContext);
 const [productData, setProductData] = useState(false)
 const [image, setImage] = useState('')
 const [size, setSize] = useState('')
 
const fetchProductData = async()=>{
products.map((item)=>{
  if(item._id === ProductId){
    setProductData(item);
    setImage(item.image[0])
    return null;
  }
})
}
useEffect(()=>{
  fetchProductData();
},[ProductId,products])

  return productData ? (
    <div className='border-t-2 border-gray-400 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/* ---------------Products data-------------- */}
      <div className="flex flex-col sm:flex-row gap-12 lg:gap-20 w-full max-w-7xl mx-auto px-4 ">

        {/* -------------Products Images-------------- */}
        <div className='flex flex-col-reverse gap-3 sm:flex-row sm:w-[45%] lg:w-[48%] sm:flex-[1] sm:h-[450px] w-full'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-auto justify-between sm:justify-normal sm:w-[18%] w-full sm:h-full'>
            {
              productData.image.map((item, index)=>(
                <img onClick={()=>setImage(item)} src={item} key={index}  className="w-[24%] sm:w-full sm:mb-3 shrink-0 cursor-pointer object-cover aspect-square sm:aspect-auto" alt="" />
              ))
            }
          </div>
          <div className='w-full sm:w-[84%] h-full sm:h-full flex justify-center bg-gray-50 rounded-lg overflow-hidden'>
              <img className='w-full h-full object-contain' src={image} alt="" />
          </div>
        </div>
        {/* ------------Products Info------------ */}
        <div className='flex-1 mx-w-xl]'>
           <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
           <div className='flex items-center gap-1 mt-2'>
              <img src={assets.star_icon} alt="" className="w-3.5" />
              <img src={assets.star_icon} alt="" className="w-3.5" />
              <img src={assets.star_icon} alt="" className="w-3.5" />
              <img src={assets.star_icon} alt="" className="w-3.5" />
              <img src={assets.star_dull_icon} alt="" className="w-3.5" />
              <p className='pl-2'>(122)</p>
           </div>
           <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
           <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
           <div className='flex flex-col gap-4 my-8'>
              <p>Select Size</p>
              <div className='flex gap-2'>
                  {productData.sizes.map((item, index)=>(
                    <button onClick={()=>setSize(item)} className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border border-orange-500' : ''}`} key={index} >{item}</button>
                  ))}
              </div>
           </div>
           <button onClick={()=>addToCart(productData._id,size )} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>ADD TO CART</button>
           <hr className='mt-5 w-full border-gary-300'/>
           <div className='text-sm text-gary-500 mt-4 flex flex-col gap-1 w-full'>
                  <p>100% Original Product.</p>
                  <p>Cash on delivery is available on this product.</p>
                  <p>Easy return exchange policy within 7 days</p>
           </div>
        </div>
      </div>
      {/* ------------Description and Review section------------ */}
      <div className='mt-20'>
        <div className='flex'>
          <b className='border px-5 py-3 text-sm'>Description</b>
          <p className='border px-5 py-3 text-sm'>Reviews (122)</p>
        </div>
        <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gary-500'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati blanditiis nulla sint libero quos delectus aliquam sunt tenetur?</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci ab quod vel ducimus laborum quam omnis reprehenderit dolor blanditiis facere consequatur quas doloremque quia quasi, reiciendis cupiditate ea id animi?</p>
        </div>
      </div>
        {/* ------------Display Related Products------------- */}
        <RelatedProducts category={productData.category} subCategory={productData.subCategory}/>
    </div>
  ): <div className='opacity-0'></div>
}
export default Product