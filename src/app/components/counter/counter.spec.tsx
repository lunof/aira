import { describe, it, expect, afterEach } from 'vitest'
import { render, screen, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Counter } from '@/app/components/counter/counter'

describe('<Counter />', () => {
  afterEach(() => {
    cleanup()
  })

  it('should render the component', () => {
    const { baseElement: result } = render(<Counter />)
    expect(result).toBeTruthy()
  })

  it('should increment the counter', async () => {
    render(<Counter />)

    const incrementButton = screen.getByRole('button', { name: /increment/i })
    await userEvent.click(incrementButton)

    const expected = 'Count: 1'
    const { innerHTML: result } = screen.getByText(/count: 1/i)

    expect(expected).toBe(result)
  })
})
