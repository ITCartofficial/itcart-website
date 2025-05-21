import GradientTitle from '@/components/atoms/typography/GradientTitle'
import ExecutiveLeadersSlider from '@/components/molecules/slider/ExecutiveLeadersSlider'
import { ExecutiveLeader } from '@/types/PropsTypes'
import React from 'react'

const ExecutiveLeadersSection = ({ execLeaders }: { execLeaders: ExecutiveLeader[] }) => {

  return (
    <div className='container mx-auto lg:px-10'>
      <div className="flex flex-col w-1/2 mb-10">
        <GradientTitle
          text='Meet Our Executive Leadership'
          theme='light'
          className='lg:text-[50px] leading-tight'
        />
      </div>
      <ExecutiveLeadersSlider execLeaders={execLeaders} theme='light' />
    </div>
  )
}

export default ExecutiveLeadersSection