import { FC, memo } from "react";
import { useSelector } from "react-redux";
import { sadcountselector } from "./Selector";

type SadTrackerProps={};

const SadTracker :FC<SadTrackerProps>=(props)=>{
    const sadcount =useSelector(sadcountselector);
    return(
       <div className="bg-blue-700 px-8 py-4">you were Sad {sadcount} times</div>
    );
}

SadTracker.defaultProps={};

export default memo(SadTracker)