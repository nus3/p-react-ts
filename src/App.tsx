import { useCallback, useState } from "react";
import "./App.css";
import { Component1 } from "./components/Component1";
import { Component2 } from "./components/Component2";
import { Component3 } from "./components/Component3";
import { Component4 } from "./components/Component4";
import { Component5 } from "./components/Component5";

function App() {
  const [count, setCount] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);

  const handleUpdateCount4 = useCallback(() => {
    setCount4((count) => count + 1);
  }, [setCount4]);

  return (
    <div className="app">
      <section className="section">
        <div>親のコンポーネント内部で定義されているコンポーネント</div>
        <div>{count}</div>
        <button onClick={() => setCount((count) => count + 1)}>add</button>
      </section>
      <Component1></Component1>
      <Component5></Component5>
      <Component2 parentCount={count}></Component2>
      <Component3
        count={count3}
        onClick={() => {
          setCount3((count) => count + 1);
        }}
      ></Component3>
      <Component4 count={count4} onClick={handleUpdateCount4}></Component4>
    </div>
  );
}

export default App;
