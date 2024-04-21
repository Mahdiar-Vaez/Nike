import React from 'react'
import { star } from '../assets/icons'

export default function PopulateProductsCard({imgURL,name,price}) {
  return (
    <div className='flex max-sm:w-full   flex-1 flex-col w-full'>
        <img className='w-[280px] h-[280px]' src={imgURL} alt={name} />
        <div className='mt-8 flex justify-start gap-2.5 '> 
            <img src={star}  width={24} height={24} alt="Rating" />
            <p className='font-montserrat text-xl leading-normal text-slate-gray '>  4.5</p>
        </div>
        <h3 className='mt-2 text-2xl leading-normal font-semibold font-palanquin'>{name}</h3>
        <p className='mt-2 font-semibold text-coral-red text-2xl font-montserrat'>{price}</p>
    </div>
  )
}
