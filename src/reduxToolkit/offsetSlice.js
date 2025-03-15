import { createSlice } from "@reduxjs/toolkit";


let apiOffset =createSlice({
    initialState :0,
    name :"offset",
    reducers : {
        addOffset : (state,action)=> {
            return state+=action.payload;
        },
        decreaseOffset : (state,action)=> {
            if(state>0) {
                state-=action.payload;
            }
            return state;
        },
    }
});

export let {addOffset,decreaseOffset} = apiOffset.actions;
export default apiOffset.reducer;

