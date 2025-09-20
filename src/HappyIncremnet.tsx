import type { FC } from "react"; 
import { memo } from "react";
import { useDispatch } from "react-redux";
import { happyClick } from "./Action";

const HappyIncremnetor: FC = () => {
  const dispatch = useDispatch();

  function increment() {
    dispatch(happyClick); 
  }

  return (
    <div>
      <h1>Are you happy?</h1>
      <button
        onClick={increment}
        className="bg-orange-700 border-2 text-white p-2"
      >
        Yes
      </button>
    </div>
  );
};

export default memo(HappyIncremnetor);
