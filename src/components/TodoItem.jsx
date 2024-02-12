import CrossIcon from "./icons/CrossIcon";
import IconCheck from "./icons/IconCheck";

const TodoItem = ({ todo }) => {

    const { id, title, completed } = todo;


    return (
        <article className="flex gap-4 py-4 border-b-gray-400 border-b-2 px-4">
            <button className="rounded-full border-2 inline-block h-5 w-5">
                <IconCheck />
            </button>
            <p className="text-gray-600 grow">
                {title}
            </p>
            <button className="flex-none">
                <CrossIcon />
            </button>
        </article>
    )
}

export default TodoItem;