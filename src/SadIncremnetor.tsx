import { FC, memo } from "react";
import { sadClick } from "./Action";
import { useDispatch } from "react-redux";

type SadIncremnetProps={};

const SadIncremnetor :FC<SadIncremnetProps>=(props)=>{
    const dispatch = useDispatch();

    function increment(){
        dispatch(sadClick)

    }
    return(
        <div>
            <h1>Are you sad?</h1>
            <button 
            onClick={increment}
            className="bg-blue-700 border-2 text-white p-2">Yes</button>
        
        </div>
    );
}

SadIncremnetor.defaultProps={};

export default memo(SadIncremnetor)