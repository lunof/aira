'use client'
import { useState } from 'react'

export function Counter() {
  const [counter, setCounter] = useState(0)

  const increment = () => {
    setCounter((previous) => previous + 1)
  }

  const label = `Count: ${counter}`

  return (
    <div className="flex flex-col gap-2">
      <p className="text-center text-sm text-slate-500">{label}</p>
      <button onClick={increment}>Increment</button>
    </div>
  )
}
