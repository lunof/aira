'use client'
import { Button } from '@/components/ui/button'
import { Paragraph } from '@/components/ui/paragraph'
import { useState } from 'react'

export function Counter() {
  const [counter, setCounter] = useState(0)

  const increment = () => {
    setCounter((previous) => previous + 1)
  }

  const label = `Count: ${counter}`

  return (
    <div className="flex flex-col items-center gap-2">
      <Paragraph className="text-center" variant="muted">
        {label}
      </Paragraph>
      <Button onClick={increment}>Increment</Button>
    </div>
  )
}
