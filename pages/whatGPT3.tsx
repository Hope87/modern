import { NextPage } from 'next'
import React from 'react'
import { Feature } from '../components'

const WhatGPT3: NextPage = () => {
  return (
    <div className="section-margin sm:my-16 sm:mx-8 md:m-16 flex flex-col p-8 bg-footer">
     <div className="flex">
       <Feature col={false} title="What is GPT-3" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."/>
     </div>
     <div className="flex flex-row justify-between items-center mt-16 mb-8 mx-0 md:flex-col md:items-start md:mb-0">
       <h2 className="gradient-text text-4xl font-extrabold max-w-[510px] font-base sm:text-2xl">The possibilities are beyond your imagination</h2>
       <p className="font-base font-medium text-base text-subtext cursor-pointer md:mt-4">Explore the Library</p>
     </div>
     <div className="flex flex-row flex-wrap mt-8">
       <Feature col title="Chatbots" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought."/>
       <Feature col title="Knowledgebase" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
       <Feature col title="Education" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"/>
     </div>
    </div>
  )
}

export default WhatGPT3