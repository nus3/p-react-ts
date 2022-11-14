import { FC, memo, useState } from "react";

type Component2Props = {
  parentCount: number;
};

export const Component2: FC<Component2Props> = memo(({ parentCount }) => {
  const [count, setCount] = useState(0);

  return (
    <section className="section">
      <div>親のstateをpropsで受け取るコンポーネント</div>
      <div>parent count: {parentCount}</div>
      <div>{count}</div>
      <button onClick={() => setCount((count) => count + 1)}>add</button>
    </section>
  );
});
