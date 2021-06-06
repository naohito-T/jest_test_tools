import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Post from '../components/Post'
import { POST } from '../types/Types'

describe('Post component with given props', () => {
  let dummyProps: POST // dummyのpost
  beforeEach(() => {
    dummyProps = {
      userId: 1,
      id: 1,
      title: 'dummy title 1',
      body: 'dummy body 1',
    }
  })
  afterEach(() => {
    // cleanup() // モックサーバのリセット
  })
  it('Should render currently with given props value', () => {
    render(<Post {...dummyProps} />) // dummyのpostを渡す
    expect(screen.getByText(dummyProps.id)).toBeInTheDocument()
    expect(screen.getByText(dummyProps.title)).toBeInTheDocument()
    screen.debug()
  })
})