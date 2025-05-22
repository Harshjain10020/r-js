import { useEffect, useState } from "react";

import "./App.css";
import { TodoProvider } from "./Context";
import TodoForm from "./Component/TodoForm";
import TodoItem from "./Component/Todoitem";

function App() {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
  setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
};


  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
    //     prev.map((eachVal)=>{
    //       if(eachVal.id===id){
    // todo
    //       }else{
    //         eachVal
    //       }
    //     })
  };

  const delTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
  setTodos((prev) =>
    prev.map((todo) =>
      todo.id === id ? { ...todo, checked: !todo.checked } : todo
    )
  );
};


  useEffect(() => {
  const storedTodos = JSON.parse(localStorage.getItem("todos"));
  if (storedTodos && Array.isArray(storedTodos)) {
    setTodos(storedTodos);
  }
}, []);


  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    //value  is like destructureing context
    <TodoProvider value={{ todos, delTodo, updateTodo, addTodo, toggleTodo }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
