import { FC, memo, useState } from "react";

type Component5Props = {};

export const Component5: FC<Component5Props> = () => {
  const [count, setCount] = useState(0);

  return (
    <section className="section">
      <div>memo化していないコンポーネント</div>
      <div>{count}</div>
      <button onClick={() => setCount((count) => count + 1)}>add</button>
    </section>
  );
};
