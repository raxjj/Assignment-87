import type { State } from "./Store";

export function happycountSelector(state:State){
    return state.happyCount;
}

export function sadcountselector(state:State){
    return state.sadCount;
}