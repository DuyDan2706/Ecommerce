import React from 'react'
import Product from './Product/Product'

export default function ProductPage() {
  return (
    <div className='bg-white py-6'>
    <div className='mx-auto max-w-7xl py-4'>
      <div className='col-start-2 col-span-4'>
        <div className='col-span-9'>
        <div className='mt-6 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
              {Array(10)
                .fill(0)
                .map((_, index) => (
                  <div className='col-span-1' key={index}>
                    <Product />
                  </div>
            ))}
          </div>
        </div>
      </div>
    </div>
 
  </div>
  )
}
