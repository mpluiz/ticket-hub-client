import { screen, render } from '@testing-library/react'
import { Heading } from '@/presentation/components'

describe('Heading', () => {
  it('should render component with correct modifiers', () => {
    render(<Heading>valid-text</Heading>)
    const sut = screen.getByText('valid-text')

    expect(sut).toBeTruthy()
    expect(sut.className).toContain('heading heading--size-h3 heading--weight-regular heading--color-black')
  })
})
