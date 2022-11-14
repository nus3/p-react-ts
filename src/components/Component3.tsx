import { FC, memo } from "react";

type Component3Props = {
  count: number;
  onClick: () => void;
};

export const Component3: FC<Component3Props> = memo(({ count, onClick }) => {
  return (
    <section className="section">
      <div>親のstateとイベントハンドラーをpropsで受け取るコンポーネント</div>
      <div>parent state: {count}</div>
      <button onClick={onClick}>add</button>
    </section>
  );
});
