import type { FC } from "react";
import { memo } from "react";
import { useSelector } from "react-redux";
import { happycountSelector } from "./Selector";

const HappyTracker: FC = () => {
  const happycount = useSelector(happycountSelector);
  return (
    <div className="bg-orange-700 px-8 py-4">
      You were happy {happycount} times
    </div>
  );
};

export default memo(HappyTracker);
