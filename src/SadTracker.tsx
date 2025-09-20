import type { FC } from "react";
import { memo } from "react";
import { useSelector } from "react-redux";
import { sadcountselector } from "./Selector";

const SadTracker: FC = () => {
  const sadcount = useSelector(sadcountselector);
  return (
    <div className="bg-blue-700 px-8 py-4">
      You were sad {sadcount} times
    </div>
  );
};

export default memo(SadTracker);
