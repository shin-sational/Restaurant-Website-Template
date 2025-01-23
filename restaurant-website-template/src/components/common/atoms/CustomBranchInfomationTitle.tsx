import { cn } from '@/lib/utils'
import React, { ReactNode } from 'react'

const CustomBranchInfomationTitle = ({children, className}: {children: ReactNode, className?: string}) => {
  return (
    <h4 className={cn(
      "text-h3",
      "font-bold", 
      "text-[14px]",
      "md:text-[24px]",
      className)}>{children}</h4>
  )
}

export default CustomBranchInfomationTitle
