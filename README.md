This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


## Test Started
```bash
npm test
```

## Nextjs Pre-renderについて

**blog-page.tsx**
SSG + Pre-fetch
npm run build時に静的ページにapi取得済みデータが組み込まれる。

**comment-page.tsx**
SSG + Client side fetching
npm run buildされた際には静的なページだけが作成され、クライアントがブラウザでアクセスした際にapiで取得する
SEO関係ないことや、常に最新のデータがapiから欲しい時には使用する。

**todos.tsx**
SSG + Pre-fetch + Client side fetching
SEO対策をしつつ、リアルタイムデータ取得が可能。
