import React, { useContext, useState, createContext } from 'react'

const StateContext = createContext(
  {} as {
    toggle: boolean
    setToggle: React.Dispatch<React.SetStateAction<boolean>>
  }
)
// React.createContext
// この関数によってコンテキストオブジェクトを作成します。
// 作成されるコンテキストオブジェクトは、こんな感じのもの。
// {
//   Provider: <>...<>,
//   Consumer: <>...<>,
//   ...
// }
// みたいな感じで、ProviderとConsumerというコンポーネントを所持しています。

// StateProviderというカスタムのコンポーネントを作成する
// 今後、componetsやpagesでuseStateを使いたいのをラップしていくイメージ
export const StateProvider: React.FC = ({ children }) => {
  const [toggle, setToggle] = useState(false)

  return (
    <StateContext.Provider value={{ toggle, setToggle }}>
      {children}
    </StateContext.Provider>
    // 先ほど作成したコンテキストオブジェクトのプロパティに入ってます。
    // Providerコンポーネントは、propsとしてvalueを受け取ります。
    // このvalueに入れるのが、実際に配下のコンポーネントに渡したい値。通常、バケツリレーしていた値。

    // Providerコンポーネントではvalueが変更されると配下のコンポーネントを再レンダーします。
    // その際の比較方法は参照の同一性のため、プリミティブ値以外を渡す場合は参照の変更の有無に気を使う必要があります。
  )
}

export const useStateContext = () => useContext(StateContext)
