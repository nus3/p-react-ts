import { FC, memo } from "react";

type Component4Props = {
  count: number;
  onClick: () => void;
};

export const Component4: FC<Component4Props> = memo(({ count, onClick }) => {
  return (
    <section className="section">
      <div>
        useCallbackされたイベントハンドラーをpropsで受け取るコンポーネント
      </div>
      <div>parent state: {count}</div>
      <button onClick={onClick}>add</button>
    </section>
  );
});
