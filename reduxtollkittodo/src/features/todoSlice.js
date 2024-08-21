import {createSlice, nanoid } from '@reduxjs/toolkit'

const initialState={
    todos:[{id:1,text:"Hello Wordld"}]
}

function sayHello(state,action){
    const todo={
        id:nanoid(),
        text:action.payload

    }
    state.todos.push(todo)
    
}
export const todoSlice= createSlice({
    name:'anna',
    initialState,
    reducers:{
        addTodo:sayHello,
        removeTodo:(state,action)=>{
            state.todos=state.todos.filter((i)=>{
                i.id !== action.payload

            })
        }
    }
})

export const {addTodo,removeTodo}=todoSlice.actions

export default todoSlice.reducer