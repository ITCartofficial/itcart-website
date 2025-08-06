import GradientTitle from '@/components/typography/GradientTitle'
import ExecutiveLeadersSlider from '@/components/slider/ExecutiveLeadersSlider'
import { ExecutiveLeader } from '@/types/PropsTypes'
import React from 'react'

const ExecutiveLeadersSection = ({ execLeaders }: { execLeaders: ExecutiveLeader[] }) => {

  return (
    <div className='container mx-auto lg:px-10'>
      <div className="w-full lg:w-1/2 mb-10 lg:mb-0 lg:mx-0 mx-auto text-left">
        <GradientTitle
          text='Meet Our Executive Leadership'
          theme='light'
          className='block w-full text-[30px] lg:text-[50px] leading-tight pb-10'
        />
      </div>
      <ExecutiveLeadersSlider execLeaders={execLeaders} theme='light' />
    </div>
  )
}

export default ExecutiveLeadersSection