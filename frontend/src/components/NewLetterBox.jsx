// eslint-disable-next-line no-unused-vars
import React from 'react'

const NewLetterBox = () => {
  const onSubmitHandler = (event) => {
    event.prventDefault();

  }
  
  return (
    <div className='text-center'>
      <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% off</p>
      <p className='text-gray-600 mt-3'>
      Discover our latest collection: trendy, high-quality products designed
      to elevate your style and lifestyle today!
      </p>
      <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
        <input type="email" placeholder='Enter your Email' className='w-full sm:flex-1 outline-none' required/>
        <button type='submit' className='bg-black text-white text-xs px-10 py-4'>SUBSCRIBE</button>
      </form>
    </div>
  )
}

export default NewLetterBox
