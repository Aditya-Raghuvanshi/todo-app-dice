import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
    name:"task",
    initialState:{
        lists:[],
    },
    reducers:{
        pushTask:(state,action)=>{
            state.lists.push(action.payload);
        },
        removeTask:(state,action)=>{
            state.lists=state.lists.filter((item,index)=>{
                return item.date!==action.payload;
            })
        }
    }

});

export const {pushTask,removeTask} = taskSlice.actions;

export default taskSlice.reducer; 