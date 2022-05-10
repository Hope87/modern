import { NextPage } from 'next'
import React from 'react'
import { Article } from '../components'
import blog01 from '../public/blog01.png'
import blog02 from '../public/blog02.png'
import blog03 from '../public/blog03.png'
import blog04 from '../public/blog04.png'
import blog05 from '../public/blog05.png'


const Blog: NextPage = () => {
  return (
    <div className="section-padding sm:py-16 sm:px-8 md:p-16 flex flex-col">
      <div className="w-full text-left mb-20">
        <h2 className="gradient-text font-base font-extrabold text-6xl tracking-wider pb-4 lg:text-5xl md:text-4xl">A lot is happening, <br /> We are blogging about it.</h2>
      </div>
      <div className="flex flex-row lg:flex-col-reverse">
        <div className="flex-[0.75] mr-8 lg:my-8 lg:mx-0">
          <Article imgUrl={blog01} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        </div>
        <div className="flex-1 grid grid-cols-2 gap-8 md:grid-cols-1">
        <Article imgUrl={blog02} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        <Article imgUrl={blog03} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        <Article imgUrl={blog04} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        <Article imgUrl={blog05} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        </div>
      </div>
    </div>
  )
}

export default Blog