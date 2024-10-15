import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '@/lib/utils'

export interface SmallProps extends React.HTMLAttributes<HTMLElement> {
  asChild?: boolean
}

const Small = React.forwardRef<HTMLElement, SmallProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'small'
    return (
      <Comp
        className={cn('text-sm font-medium leading-none', className)}
        ref={ref}
        {...props}
      />
    )
  },
)

Small.displayName = 'Small'

export { Small }
