'use client'
import { Button } from '@/components/ui/button'
import { Heading } from '@/components/ui/heading'
import { useState, ChangeEvent } from 'react'

type MyFirstComponentProps = {
  initialValue?: number
  incrementBy?: number
}

export function MyFirstComponent({
  initialValue = 0,
  incrementBy = 1,
}: MyFirstComponentProps) {
  const [Counter, setCount] = useState(initialValue)
  const [fullName, setfullName] = useState('')

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setfullName(event.target.value)
  }
  const Increment = () => {
    setCount((old) => old + incrementBy)
  }
  return (
    <main className="flex flex-col items-center gap-y-3">
      <Heading variant="h2">{fullName}</Heading>
      <Heading variant="h3">Counter: {Counter}</Heading>
      <input
        value={fullName}
        onChange={onChange}
        type="text"
        className="bg-slate-100"
      />
      <Button onClick={Increment}>Increment</Button>
    </main>
  )
}
