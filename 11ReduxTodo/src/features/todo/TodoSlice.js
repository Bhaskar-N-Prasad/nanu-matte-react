import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos:[
        {
            id:1,
        text:"Hello World"
}
]
}

export const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push({
                id: nanoid(),
                text: action.payload
            }
            )
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        updateTodo: (state, action) =>{
            state.todos.map((todo) => {
                if(todo.id === action.payload.id){
                    todo.text = action.payload.text
                }
            })
        },

    }
    })

    export const {addTodo, removeTodo, updateTodo} = todoSlice.actions

    export default todoSlice.reducer