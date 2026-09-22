# React Router Blog Routing App

React Routerを使用して、ブログアプリを想定した複数ページのルーティングを実装する練習アプリです。

## 概要

`Home`、`Posts`、`PostDetail`、`About`の4ページを作成し、ナビゲーションからすべてのページへ移動できるようにします。

## ページとURL

| URL             | ページ        |
| --------------- | ---------- |
| `/`             | Home       |
| `/posts`        | Posts      |
| `/posts/detail` | PostDetail |
| `/about`        | About      |

## 学習内容

* 複数ページのルーティング
* `Routes`と`Route`の定義
* `Link`によるページ遷移
* ナビゲーションコンポーネントの作成
* URLとページコンポーネントの対応付け

## ディレクトリ構成

```text
src/
├── components/
│   └── Navigation.tsx
├── pages/
│   ├── Home.tsx
│   ├── Posts.tsx
│   ├── PostDetail.tsx
│   └── About.tsx
└── App.tsx
```

## ルーティング

`App.tsx`で4つの`Route`を定義します。

```tsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/posts" element={<Posts />} />
  <Route path="/posts/detail" element={<PostDetail />} />
  <Route path="/about" element={<About />} />
</Routes>
```

## Navigation

`Navigation.tsx`では、すべてのページへ移動できるように`Link`を作成します。

```tsx
import { Link } from "react-router";

const Navigation = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/posts">Posts</Link>
      <Link to="/posts/detail">PostDetail</Link>
      <Link to="/about">About</Link>
    </nav>
  );
};

export default Navigation;
```

## App.tsx

```tsx
import { BrowserRouter, Route, Routes } from "react-router";
import Navigation from "./components/Navigation";
import About from "./pages/About";
import Home from "./pages/Home";
import PostDetail from "./pages/PostDetail";
import Posts from "./pages/Posts";

function App() {
  return (
    <BrowserRouter>
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/detail" element={<PostDetail />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

## 実行

```bash
npm install
npm run dev
```

以下のURLにアクセスして動作を確認します。

```text
http://localhost:5173/
http://localhost:5173/posts
http://localhost:5173/posts/detail
http://localhost:5173/about
```

## 動作確認

Navigationから以下のページへすべて移動できることを確認します。

```text
Navigation
├── Home       → /
├── Posts      → /posts
├── PostDetail → /posts/detail
└── About      → /about
```

## 課題のポイント

この課題では、ブログアプリを想定した**複数ページのルーティングとナビゲーション**を理解することを目的とします。

```text
BrowserRouter
│
├── Navigation
│   ├── Home
│   ├── Posts
│   ├── PostDetail
│   └── About
│
└── Routes
    ├── /               → Home
    ├── /posts          → Posts
    ├── /posts/detail   → PostDetail
    └── /about          → About
```

`Navigation`はページ移動を担当し、`Routes`と`Route`はURLに応じたページ表示を担当します。
