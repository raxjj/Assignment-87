import type { FC} from "react";
import { memo } from "react";
import { useDispatch } from "react-redux";
import { sadClick } from "./Action";

const SadIncremnetor: FC = () => {
  const dispatch = useDispatch();

  function increment() {
    dispatch(sadClick);
  }

  return (
    <div>
      <h1>Are you sad?</h1>
      <button
        onClick={increment}
        className="bg-blue-700 border-2 text-white p-2"
      >
        Yes
      </button>
    </div>
  );
};

export default memo(SadIncremnetor);
