import React from 'react'
import { reviews } from '../Constant'
import ReviewCard from '../Components/ReviewCard'

export default function CustomerReview() {
  return (
    <section className='max-container'>
      <h3 className='font-palanquin text-center text-4xl font-bold'>What Our 
        <span className='text-coral-red font-palanquin '> Customer </span>
        Say?
      </h3>
      <p className='info-text m-auto mt-4 max-w-lg  text-center '>
      Hear genuine stories from our
satisfied customers about their
exceptional experiences with us.
      </p>
      <div className='mt-24 flex items-center max-lg:flex-col gap-14 flex-1 justify-evenly'>
        {reviews.map((e)=>{
          return(
            <ReviewCard key={e.id} imgURL={e.imgURL} customerName={e.customerName} rating={e.rating} feedback={e.feedback}/>
          )
        })}
      </div>
    </section>
  )
}
