const CreateTodo = () => {
    return (
        <form className="bg-white rounded-md overflow-hidden py-4 flex gap-4 items-center px-4 ">
            <span className="rounded-full border-2 inline-block h-5 w-5"></span>
            <input type="text" placeholder="Create a new todo..." className="w-full text-gray-500 outline-none" />
        </form>
    )
}

export default CreateTodo;