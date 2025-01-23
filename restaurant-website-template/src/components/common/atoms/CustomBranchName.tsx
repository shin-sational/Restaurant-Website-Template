import { cn } from '@/lib/utils'
import React, { ReactNode } from 'react'

const CustomBranchName = ({children, className}: {children: ReactNode, className?: string}) => {
  return (
    <h3 className={cn(
            "text-h3 font-bold",
            "text-[18px]",
            "md:text-[28px]",
            className
          )}>
      {children}
    </h3>
  )
}

export default CustomBranchName
