import React from 'react'
import { services } from '../Constant'
import ServiceCard from '../Components/ServiceCard'
export default function Services() {
  return (
    <section className='max-container flex justify-center flex-wrap gap-9'>
      {services.map((e)=>{
        return (
          <ServiceCard  key={e.label} {...e}/>
        )
      })}
    </section>
  )
}
