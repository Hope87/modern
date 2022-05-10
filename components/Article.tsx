import Image, { StaticImageData } from 'next/image'
import React, { FC } from 'react'

interface ArticleProps {
  imgUrl: StaticImageData,
  date: string,
  text: string
}

const Article: FC<ArticleProps> = ({imgUrl, date, text}) => {
  return (
    <div className="w-full h-full flex flex-col bg-footer">
      <div className="w-full h-full bg-footer">
        <Image src={imgUrl} alt="blog"/>
      </div>
      <div className="flex flex-col justify-between py-4 px-6 h-full">
        <div>
          <p className="font-base font-bold text-xs text-white">{date}</p>
          <h3 className="font-base font-extrabold text-2xl text-white mb-20 cursor-pointer sm:text-lg">{text}</h3>
        </div>
        <p className="cursor-pointer font-base font-bold text-xs text-white">Read Full Article</p>
      </div>
    </div>
  )
}

export default Article