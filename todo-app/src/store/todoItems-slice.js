import {createSlice} from "@reduxjs/toolkit";
const todoItemsSlice=createSlice({
    name:'todo',
    initialState:[],
    reducers:{
        updateTodos(todos,action){
            return action.payload
        },
        addTodo(todos,action){
            if(todos.length===0){
                todos.push(action.payload)
                return;
            }
            return [action.payload,...todos]
        },
        changeState(todos,action){
          todos=todos.filter(st=>{
              if(action.payload.id===st?.id){
                  return st.isCompleted=action.payload.isCompleted
              }
          })
        },
        removeCompletedTodos(todos){
           return todos.filter((st)=>{
                if(!st.isCompleted){
                    return st;
                }
            })
        }
    }
})
export const todoAction=todoItemsSlice.actions;
export default todoItemsSlice;