import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '@/lib/utils'

export interface LargeProps extends React.HTMLAttributes<HTMLDivElement> {
  asChild?: boolean
}

const Large = React.forwardRef<HTMLDivElement, LargeProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'div'
    return (
      <Comp
        className={cn('text-lg font-semibold', className)}
        ref={ref}
        {...props}
      />
    )
  },
)

Large.displayName = 'Large'

export { Large }
