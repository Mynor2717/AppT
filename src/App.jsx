import CreateTodo from "./components/CreateTodo";
import TodoComputed from "./components/TodoComputed";
import TodoList from "./components/TodoList";
import Header from "./components/icons/Header";
import TodoFilter from "./components/TodoFilter";
import { useEffect, useState } from "react";


// const initialStateTodos = [
   
//    {
//     id : 1,
//     title : "Completar las tareas iniciales",
//     completed : true,
    
//    },


//    {id : 2, title : "Hacer algo", completed : false},
//    {id : 3, title : "Completar las tareas", completed : true},
//    {id : 4, title : "Tienes una tarea", completed : false},
//    {id : 5, title : "Algo por completar", completed : true},

 
// ]

const initialStateTodos = JSON.parse(localStorage.getItem("todos")) || [];


const App =() => {

  const [todos, setTodos] = useState(initialStateTodos);

  useEffect (() => {
      localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const createTodo = (title) => {
    const newTodo = {
      id : Date.now(),
      title,
      completed : false,
    }
    setTodos([...todos, newTodo]);

  };

  const removeTodo =  (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };


  const updateTodo = (id) => {
    setTodos(todos.map(todo => todo.id === id ?{...todo, completed: !todo.completed} : todo))
  }


  const computedItemLeft = todos.filter((todo) => !todo.completed).length;

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  }

   const [filter, setFilter] = useState("Todo");

   const ChangeFilter =(filter) => setFilter(filter)

   const filteredTodos = () => {
      switch (filter) {
        case "Todo":
          return todos;
        case "Activar":
          return todos.filter((todo) => !todo.completed);
        case "Completar":
          return todos.filter((todo) => todo.completed);
          default:
            return todos;
      }
   }
      
  return (
    

  <div className="bg-[url('./assets/bg-mobile-light.jpg')] bg-no-repeat bg-contain 
  bg-gray-300 min-h-screen dark:bg-gray-900  dark:bg-[url('./assets/bg-mobile-dark.jpg')]
   md:bg-[url('./assets/bg-desktop-light.jpg')]  md:dark:bg-[url('./assets/bg-desktop-dark.jpg')]">
 
   <Header />

  <main className="container mx-auto px-4 mt-8 md:max-w-xl">

    <CreateTodo createTodo={createTodo}/>

    <TodoList todos={filteredTodos()} removeTodo={removeTodo} updateTodo={updateTodo}/>

    <TodoComputed  computedItemLeft={computedItemLeft} clearCompleted={clearCompleted}/>

    <TodoFilter ChangeFilter={ChangeFilter} filter={filter}/>

</main>

<section>
  <footer className="text-center mt-8 dark:text-gray-400">Drag and Drop</footer>
</section>

  </div>

  )
    
};


export default App;

//Se refactorio el proyecto para mejorar su estructura al empezar hacer componentes

/* Es un archivo para modificar mucho del VSC */ 

// ml- auto para empujar elementos hacia completamente a la esquina

// Con Control  y espacio al estar erscribiendo dentro de una clase se pueden invocar funcionalidades con tailwinds