import { FC, memo } from "react";
import { happycountSelector } from "./Selector";
import { useSelector } from "react-redux";

type HappyTrackerProps={};

const HappyTracker :FC<HappyTrackerProps>=(props)=>{
     const happycount =useSelector(happycountSelector);
    return(
       <div className="bg-orange-700 px-8 py-4">you were happy {happycount} times</div>
    );
}

HappyTracker.defaultProps={};

export default memo(HappyTracker)