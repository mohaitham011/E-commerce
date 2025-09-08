import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'
import NewLetterBox from '../components/NewLetterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 order-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quo velit rem eveniet. Nihil corrupti enim magni repudiandae nam odit non mollitia rerum inventore exercitationem a blanditiis, vero voluptas culpa explicabo quisquam doloremque. Qui iste voluptas, impedit repudiandae laborum iure aperiam, ut fugiat consectetur rerum voluptatem molestias ducimus quidem nihil.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis, maiores assumenda facere voluptas laudantium blanditiis! Eveniet harum nihil adipisci dignissimos minus fuga atque magnam repellendus laborum. Nemo totam officiis amet iusto nisi, voluptates necessitatibus? Facilis, officia. Voluptatum provident ut recusandae cupiditate, quaerat in, cumque quas excepturi aliquam, mollitia reprehenderit officiis!</p>
        <b className='text-gray-800'>Our Mission</b>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque, voluptatibus aliquam! Velit, quam aut. Accusantium iusto laudantium expedita sint tenetur aliquam quaerat dolorem. Natus, rerum?</p>
          </div>
      </div>
      <div className='text-2xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-29'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance: </b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem non inventore sed dignissimos. Dignissimos harum optio provident minus officiis velit iure voluptate, voluptatem necessitatibus tempore!</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience: </b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae perferendis voluptatum saepe veniam tempore, facere suscipit. Illum sint eius aut aliquid ut neque deleniti quo?</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service: </b>
          <p className='text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta velit quam reiciendis, neque laborum accusamus quaerat dicta iste optio dignissimos nulla, nihil eius earum labore.</p>
        </div>
      </div>
      <div className='mt-20'>
        <NewLetterBox/>
      </div>   
      </div>
  )
}

export default About

