module.exports = {
  // purge は存在するtailwindのcssクラスを分析し出力してくれる
  // これを指定しないと色々cssとして出力され、ファイルサイズが大きくなる。
  purge: ['./pages/**/*.tsx', './components/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
