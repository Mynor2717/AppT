import TodoItem from "./TodoItem";
import CrossIcon from "./icons/CrossIcon";

const TodoList = () => {
    return (
        <div className="bg-white rounded-t-md mt-8">

            <TodoItem />
            <TodoItem />
            <TodoItem />
            <TodoItem />
            <TodoItem />

        </div>
    )
}

export default TodoList;