import CrossIcon from "./icons/CrossIcon";

const TodoItem = () => {
    return (
        <article className="flex gap-4 py-4 border-b-gray-400 border-b-2 px-4">
        <button className="rounded-full border-2 inline-block h-5 w-5"></button>
        <p className="text-gray-600 grow">Complete</p>
        <button className="flex-none">
         <CrossIcon />
        </button>
       </article>
    )
}

 export default TodoItem;