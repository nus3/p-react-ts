import { FC, memo, useState } from "react";

type Component1Props = {};

export const Component1: FC<Component1Props> = memo(() => {
  const [count, setCount] = useState(0);

  return (
    <section className="section">
      <div>memo化した子コンポーネント</div>
      <div>{count}</div>
      <button onClick={() => setCount((count) => count + 1)}>add</button>
    </section>
  );
});
