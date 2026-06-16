import React from 'react'
import Title from '../components/Title'
import {assets} from '../assets/assets'
import NewsletterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className= 'my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gary-600'>
          <p>Forever was born out of a passion for innovation and desire to revolution Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, iusto! Lorem ipsum dolor sit amet. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem saepe eaque, natus quidem nulla nihil facere similique explicabo nobis asperiores iusto blanditiis debitis, eveniet reiciendis modi nam! Repellendus, porro iusto.lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste incidunt atque corrupti odio autem, quam voluptatum, aut repellendus velit, dicta a est nobis! Nesciunt esse quos quam reprehenderit mollitia! Neque?</p>
          <p>Since Our inception, we've worked Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, adipisci? Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium distinctio dolorum culpa facilis sunt dolore esse tempore deserunt cumque illum, eos, veritatis assumenda asperiores voluptatum iste corrupti id dolor pariatur!lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste incidunt atque corrupti odio autem, quam voluptatum, aut repellendus velit, dicta a est nobis! Nesciunt esse quos quam reprehenderit mollitia! Neque?</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Our Mission Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio deleniti eum non ex fugiat dolorum sunt. Excepturi itaque non inventore vel sapiente, neque error. Exercitationem est distinctio cumque neque earum?</p>
        </div>
      </div>
        <div className='text-xl py-4'>
          <Title text1={'WHY'} text2={'ChOOSE US'}/>
        </div>
        <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div className='border px-10 md:px-16 py-8 md:py-20 flex flex-col gap-5'>
              <b>Quality Assurance:</b>
              <p className='text-gray-600'>We meticulously select  and vet each Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam ex praesentium voluptatem vel ea perspiciatis?</p>
          </div>
          <div className='border px-10 md:px-16 py-8 md:py-20 flex flex-col gap-5'>
              <b>Convenience:</b>
              <p className='text-gray-600'>We meticulously select  and vet each Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam ex praesentium voluptatem vel ea perspiciatis?</p>
          </div>
          <div className='border px-10 md:px-16 py-8 md:py-20 flex flex-col gap-5'>
              <b>Exceptional Customer Service:</b>
              <p className='text-gray-600'>We meticulously select  and vet each Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam ex praesentium voluptatem vel ea perspiciatis?</p>
          </div>
        </div>
        <NewsletterBox/>
    </div>
  )
}

export default About