import { NextPage } from 'next';
import React from 'react'
import { Feature } from '../components';

interface IFeaturesData {
  title: string,
  text: string
}


const featuresData: IFeaturesData[] = [
  {
    title: 'Improving end distrusts instantly',
    text: 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.',
  },
  {
    title: 'Become the tended active',
    text: 'Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.',
  },
  {
    title: 'Message or am nothing',
    text: 'Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.',
  },
  {
    title: 'Really boy law county',
    text: 'Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush..',
  },
];

const Features: NextPage = () => {
  return (
    <div className="section-padding sm:py-16 sm:px-8 md:p-16 w-full flex justify-between flex-row lg:flex-col">
     <div className="flex-1 flex justify-start items-start flex-col text-left mr-20 lg:mt-0 lg:mx-0 lg:mb-8">
       <h1 className="gradient-text font-base font-extrabold text-3xl sm:text-2xl">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
       <p className="font-base font-medium text-base text-orange-600 mt-8">Request Early Access to Get Started</p>
     </div>
     <div className="flex-[1.5] flex justify-start items-center flex-col">
      {featuresData.map((item, i) => (
        <Feature title={item.title} text={item.text} key={item.title + i} col={false}/>
      ))}
     </div>
    </div>
  )
}

export default Features