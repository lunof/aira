import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '@/lib/utils'

export interface ListProps extends React.HTMLAttributes<HTMLUListElement> {
  asChild?: boolean
}

const List = React.forwardRef<HTMLUListElement, ListProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'ul'
    return (
      <Comp
        className={cn('my-6 ml-6 list-disc [&>li]:mt-2', className)}
        ref={ref}
        {...props}
      />
    )
  },
)

List.displayName = 'List'

export { List }
