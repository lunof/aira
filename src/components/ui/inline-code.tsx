import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '@/lib/utils'

export interface InlineCodeProps extends React.HTMLAttributes<HTMLElement> {
  asChild?: boolean
}

const InlineCode = React.forwardRef<HTMLParagraphElement, InlineCodeProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'code'
    return (
      <Comp
        className={cn(
          'relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold',
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  },
)

InlineCode.displayName = 'InlineCode'

export { InlineCode }
