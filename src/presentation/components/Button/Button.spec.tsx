import { screen, render } from '@testing-library/react'
import { Button } from '@/presentation/components'
import { IconHouse } from '@/presentation/components/icons'

describe('Button', () => {
  it('should render component with correct modifiers', () => {
    render(<Button>valid-text</Button>)
    const sut = screen.getByRole('button')

    expect(sut).toBeTruthy()
    expect(sut.className).toContain('button button--primary button--size-md')
  })

  it('should render component with correct variant', () => {
    render(<Button variant="secondary">valid-text</Button>)
    const sut = screen.getByRole('button')

    expect(sut).toBeTruthy()
    expect(sut.className).toContain('button button--secondary')
  })

  it('should render component with icon', () => {
    const { container } = render(<Button icon={<IconHouse />}>valid-text</Button>)
    const sut = container.querySelector('svg')

    expect(sut).toBeTruthy()
    expect(sut?.classList.toString()).toContain('icon')
  })
})
