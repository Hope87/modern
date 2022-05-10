import React, { FC } from 'react'

interface FeatureProps {
  title: string;
  text: string;
  col: boolean
}

const Feature: FC<FeatureProps> = ({title, text, col}) => {
  return (
    <div className={`flex ${col ? 'flex-col' : 'flex-row'} justify-between items-start ${!col && 'w-full'} m-4 sm:my-4 sm:mx-0 md:flex-col`}>
      <div className="flex-1 max-w-[180px] mr-8">
        <div className="w-10 h-0.5 gradient-bar mb-1"/>
        <h2 className="font-base font-extrabold text-xl tracking-wider text-white sm:text-sm">{title}</h2>
      </div>
      <div className="flex-[2] flex max-w-[360px]">
        <p className="font-base font-medium text-sm text-text sm:text-xs">{text}</p>
      </div>
    </div>
  )
}

export default Feature