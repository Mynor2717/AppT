import CrossIcon from "./icons/CrossIcon";
import IconCheck from "./icons/IconCheck";
import React from "react";

const TodoItem = React.forwardRef(({ todo, removeTodo, updateTodo, ...props }, ref) => {

    const { id, title, completed } = todo;


    return (
        <article {...props} ref={ref} className="flex gap-4 py-4 border-b-gray-400 border-b-2 
               px-4 dark:bg-gray-800 transition-all duration-1000">
            <button className={`h-5 w-5 flex-none rounded-full border-2 ${completed ? "rounded-full border-2 bg-gradient-to-r  from-indigo-500 via-purple-500 to-pink-500 flex justify-center items-center"
                : "inline-block"}`} onClick={() => updateTodo(id)}>


                {completed && <IconCheck />}
            </button>
            <p className={` grow text-gray-500 dark:text-gray-400 ${completed && "line-through"}`}>
                {title}
            </p>
            <button className="flex-none" onClick={() => removeTodo(id)}>
                <CrossIcon />
            </button>
        </article>
    )
})

export default TodoItem;