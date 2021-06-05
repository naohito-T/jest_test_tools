import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Home from '../pages/index'

// it テストケースを作成できる。
// Should render hello text = test name
// it('Should render hello text', () => {
//   render(<Home />)
//   expect(screen.getByText('Hello Nextjs')).toBeInTheDocument()
// })
it('Should render hello text', () => {
  render(<Home />) // Home のHTML構造を取得
  // 実際にデバッグされているのを確認できる(htmlで)
  // screen.debug();
  // Hello Nextjsの文字列が出力されているか表示
  expect(screen.getByText('Welcome to Nextjs')).toBeInTheDocument()
})
