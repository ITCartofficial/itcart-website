import GradientTitle from '@/components/typography/GradientTitle'
import ExecutiveLeadersSlider from '@/components/slider/ExecutiveLeadersSlider'
import { ExecutiveLeader } from '@/types/PropsTypes'
import React from 'react'

const ExecutiveLeadersSection = ({ execLeaders, bgColor }: { execLeaders: ExecutiveLeader[], bgColor: string }) => {

  return (
    <div className={`container mx-auto lg:px-10 ${bgColor ? 'bg-black' : ''}`}>
      <div className="w-full lg:w-1/2 mb-10 lg:mb-0 lg:mx-0 mx-auto text-left">
        <GradientTitle
          text='Meet Our Executive Leadership'
          theme={bgColor == 'dark' ? 'dark' : 'light'}
          className='block w-full text-[30px] lg:text-[48px] leading-tight pb-10'
        />
      </div>
      <ExecutiveLeadersSlider execLeaders={execLeaders} bgColor={bgColor} theme={bgColor == 'dark' ? 'dark' : 'light'} />
    </div>
  )
}

export default ExecutiveLeadersSection