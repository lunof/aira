import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '@/lib/utils'

export interface QuoteProps
  extends React.BlockquoteHTMLAttributes<HTMLQuoteElement> {
  asChild?: boolean
}

const Quote = React.forwardRef<HTMLQuoteElement, QuoteProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'blockquote'
    return (
      <Comp
        className={cn('mt-6 border-l-2 pl-6 italic', className)}
        ref={ref}
        {...props}
      />
    )
  },
)

Quote.displayName = 'Quote'

export { Quote }
