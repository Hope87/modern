import React, { FC } from 'react'
import Image from 'next/image'

const Brand: FC = () => {
  return (
    <div className="section-padding sm:py-16 sm:px-8 md:p-16 flex flex-wrap justify-center items-center">
      <div className="flex-1 max-w-[150px] min-w-[120px] m-4 flex justify-center items-center">
        <Image src="/google.png" alt="google" width={80} height={20}/>
      </div>
      <div className="flex-1 max-w-[150px] min-w-[120px] m-4 flex justify-center items-center">
        <Image src="/slack.png" alt="slack" width={80} height={20}/>
      </div>
      <div className="flex-1 max-w-[150px] min-w-[120px] m-4 flex justify-center items-center">
        <Image src="/atlassian.png" alt="atlassian" width={80} height={20}/>
      </div>
      <div className="flex-1 max-w-[150px] min-w-[120px] m-4 flex justify-center items-center">
        <Image src="/dropbox.png" alt="dropbox" width={80} height={20}/>
      </div>
      <div className="flex-1 max-w-[150px] min-w-[120px] m-4 flex justify-center items-center">
        <Image src="/shopify.png" alt="shopify" width={80} height={20}/>
      </div>
    </div>
  )
}

export default Brand