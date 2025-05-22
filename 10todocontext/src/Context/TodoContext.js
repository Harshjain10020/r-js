import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id:1,
            todo: "Todo Msg",
            checked : false,
        }
    ],
    addTodo : (todo)=>{},
    updateTodo: (id, todo)=>{},
    delTodo: (id)=>{},
    toggleTodo: (id)=>{},

})

//it tells about context of context :)
export const useTodo = ()=>{
    return useContext(TodoContext)
}

//provider 

export const TodoProvider = TodoContext.Provider