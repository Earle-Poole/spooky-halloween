import { render } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders without error', () => {
    const { baseElement } = render(App)
    expect(baseElement).toBeInTheDocument()
  })

  it('renders the navigation', async () => {
    const { queryByTestId } = render(App)
    const navigation = queryByTestId('navigation')
    expect(navigation).toBeInTheDocument()
  })
})
