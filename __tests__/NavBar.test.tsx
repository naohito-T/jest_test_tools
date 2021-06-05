import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
// nav barをクリックさせるためユーザイベント
import userEvent from '@testing-library/user-event'
// nav bar testのため(npm install next-page-tester)
import { getPage } from 'next-page-tester'
import { initTestHelpers } from 'next-page-tester'

// あらかじめ実行をしていなければいけない
initTestHelpers()

// describe (testにtitleをつける)
describe('Navigation by Link', () => {
  // itで実際のテストケースを足す(next-page-testerを使う時は、関数をasyncにする必要)
  it('Should route to seleted page in navbar', async () => {
    const { page } = await getPage({
      route: '/index', // routeのところに取得したいpageを設定する。
    })
    render(page) // getPage()で取得したpageに対してrender()でhtmlの構造を取得する。

    // expectで評価する awaitで待ち、非同期の場合はfindByTextをつかう
    userEvent.click(screen.getByTestId('blog-nav'))
    expect(await screen.findByText('blog page')).toBeInTheDocument()
    // screen.debug()
    userEvent.click(screen.getByTestId('comment-nav'))
    expect(await screen.findByText('comment page')).toBeInTheDocument()
    userEvent.click(screen.getByTestId('context-nav'))
    expect(await screen.findByText('context page')).toBeInTheDocument()
    userEvent.click(screen.getByTestId('task-nav'))
    expect(await screen.findByText('todos page')).toBeInTheDocument()
    userEvent.click(screen.getByTestId('home-nav'))
    expect(await screen.findByText('Welcome to Nextjs')).toBeInTheDocument()
  })
})
