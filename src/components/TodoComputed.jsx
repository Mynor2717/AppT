const TodoComputed = ({computedItemLeft, clearCompleted }) => {
    return (
        <section className="py-4 px-4 flex justify-between bg-white rounded-b-md">
            <span className="text-gray-400">{computedItemLeft}</span>
            <button className="text-gray-400" onClick={clearCompleted}>Limpiar</button>
        </section>
    )
}

export default TodoComputed;