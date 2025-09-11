import { FC, memo, useState } from "react";
import { useDispatch } from "react-redux";
import { happyClick } from "./Action";

type HappyIncremnetProps={};

const HappyIncremnetor :FC<HappyIncremnetProps>=(props)=>{

    const dispatch = useDispatch();

    function increment(){
        dispatch(happyClick)

    }
    

    return(
        <div>
            <h1>Are you happy</h1>
            <button
            onClick={increment}
            className="bg-orange-700 border-2 text-white p-2">yes</button>
        
        </div>
    );
}

HappyIncremnetor.defaultProps={};

export default memo(HappyIncremnetor)