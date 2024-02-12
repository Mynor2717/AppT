import CreateTodo from "./components/CreateTodo";
import TodoComputed from "./components/TodoComputed";
import TodoList from "./components/TodoList";
import Header from "./components/icons/Header";
import TodoFilter from "./components/TodoFilter";
import { useState } from "react";


const initialStateTodos = [
   
   {
    id : 1,
    title : "Completar las tareas iniciales",
    completed : true,
    
   },


   {id : 2, title : "Hacer algo", completed : false},
   {id : 3, title : "Completar las tareas", completed : true},
   {id : 4, title : "Tienes una tarea", completed : false},
   {id : 5, title : "Algo por completar", completed : true},

 
]

const App =() => {

  const [todos, setTodos] = useState(initialStateTodos);

  const createTodo = (title) => {
    const newTodo = {
      id : Date.now(),
      title,
      completed : false,
    }
    setTodos([...todos, newTodo]);

  }

  return (
    

  <div className="bg-[url('./assets/bg-mobile-light.jpg')] bg-no-repeat bg-contain bg-gray-300 min-h-screen">
 
   <Header />

  <main className="container mx-auto px-4 mt-8">

    <CreateTodo createTodo={createTodo}/>

    <TodoList todos={todos} />

    <TodoComputed />

    <TodoFilter />

</main>

<section>
  <footer className="text-center mt-8">Drag and Drop</footer>
</section>

  </div>

  )
    
};


export default App;

//Se refactorio el proyecto para mejorar su estructura al empezar hacer componentes

/* Es un archivo para modificar mucho del VSC */ 

// ml- auto para empujar elementos hacia completamente a la esquina

// Con Control  y espacio al estar erscribiendo dentro de una clase se pueden invocar funcionalidades con tailwinds