import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos : [{
        id : 1,
        text : "Hello World"
    }]
}

function sayHello (state,action){
    console.log("Hello Bhai");
    const todo ={ 
            id : nanoid(),
            text : action.payload
    }
    state.todos.push(todo)
    
}
export const todoSlice = createSlice({
    name : 'boss',
    initialState,
    reducers : {
        addToDo : sayHello ,
        removeToDO : (state,action)=>{
            state.todos=state.todos.filter((todo)=> todo.id!= action.payload)
        },
    }

})

export const {addToDo,removeToDo}= todoSlice.actions

export default todoSlice.reducer