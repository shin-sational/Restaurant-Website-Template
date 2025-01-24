import { OPENING_HOURS } from '@/config/frontend/siteConfig'
import React from 'react'

const BusinessHours = () => {
  return (
    <div className='h-auto flex flex-col gap-[2px] justify-center'>
       {OPENING_HOURS.map(day => (
        <div key={day.day} className='grid grid-cols-2'>
          <div className='text-[12px]'>{day.day}</div>
          <div className='text-[12px]'><span>{day.opentime}{day.openPeriod}</span><span> - </span><span>{day.closetime}{day.closePeriod}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default BusinessHours
