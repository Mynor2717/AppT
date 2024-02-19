import { useState } from "react";

const CreateTodo = ({createTodo}) => {

    const [title, setTitle] = useState('')

    const handleSubmnitAddTodo = (e) => {
        e.preventDefault();
        
        if (title.trim().length > 0) {
            createTodo(title);
             return setTitle("");
        }

        setTitle("")
    }

    return (
        <form onSubmit={handleSubmnitAddTodo} className="bg-white rounded-md overflow-hidden py-4 flex gap-4 items-center px-4 dark:bg-gray-800 transition-all duration-1000">
            <span className="rounded-full border-2 inline-block h-5 w-5"></span>
            <input 
            type="text" 
            placeholder="Create a new todo..." 
            className="w-full text-gray-500 outline-none dark:bg-gray-800 transition-all duration-1000" 
             value={title}
             onChange={(e) => setTitle(e.target.value)}
            />

        </form>
    )
}

export default CreateTodo;