import { createContext, useContext } from "react";

// Yaha ham object pass kar sakte hai
export const TodoContext = createContext({
    todos :[
        {
            id: 1,
            todo: "todo Msg",
            completed: false,
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {},
})

 
export const useTodo = () => {
    return useContext(TodoContext);
}

export const TodoProvider = TodoContext.Provider;