'use client'
import { Button } from '@/components/ui/button'
import { Heading } from '@/components/ui/heading'
import { ChangeEvent, useState } from 'react'

export type MyFirstComponentProps = {
  initialValue?: number
  incrementBy?: number
}

export function MyFirstComponent({
  initialValue = 0,
  incrementBy = 1,
}: MyFirstComponentProps) {
  const [counter, setCount] = useState(initialValue)
  const [fullName, setFullName] = useState('')

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFullName(event.target.value)
  }

  const increment = () => {
    setCount((old) => old + incrementBy)
  }
  return (
    <main className="flex flex-col items-center gap-y-3">
      <Heading variant="h2">{fullName}</Heading>
      <Heading variant="h3">Counter: {counter}</Heading>
      <input
        value={fullName}
        onChange={onChange}
        type="text"
        className="bg-slate-100"
      />
      <Button onClick={increment}>Incrementar</Button>
    </main>
  )
}
