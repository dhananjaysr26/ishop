import React from "react"
interface ProductDetails {
    id: number
    productName: string
    price: number
    productImage: string
    location: string
    rating: string

}

const Card: React.FC<ProductDetails> = ({id,productName,price,productImage,location,rating}) => {
    return (
        <div className='h-auto w-72 relative mt-10 md:mt-10 flex items-center bg-slate-200 rounded-3xl' >
            <img src={productImage} alt='product-pic' className='w-full rounded-3xl' />
            <p className=' absolute bg-white h-5 bottom-20 right-2 flex items-center py-3 px-2 rounded-3xl'>{price}$</p>
            <div className='flex flex-col w-full bg-white border-2 rounded-3xl px-6 py-4 absolute bottom-[-32px]'>
                <p className=' whitespace-nowrap text-sm'>{productName}</p>
                <div className='flex flex-row justify-between py-2'>
                    <div className=' flex flex-row pt-2 gap-2 items-center'>
                        <img src='/icons/location.svg' alt='location-icon' className='h-5' />
                        <small>{location}</small>
                    </div>
                    <div className=' flex flex-row pt-2 gap-2 items-center'>
                        <img src='/icons/star.svg' alt='rating-icon' className='h-5' />
                        <small>{rating}</small>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Card