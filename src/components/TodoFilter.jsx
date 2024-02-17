const TodoFilter = ({ ChangeFilter, filter }) => {
    return (
        <section className="container mx-auto px-4 mt-8">
            <div className="bg-white flex justify-center rounded-md p-4 gap-4 dark:bg-gray-800">
                <button
                    className={`${filter === "Todo" ? "text-blue-500 hover:text-gray-400"
                        : "text-gray-400 hover:text-blue-500"}`}
                    onClick={() => ChangeFilter("Todo")}>Todo</button>
                <button
                    className={`${filter === "Activar" ? "text-blue-500 hover:text-gray-400"
                        : "text-gray-400 hover:text-blue-500"}`}
                    onClick={() => ChangeFilter("Activar")}>Activar</button>
                <button
                    className={`${filter === "Completar" ? "text-blue-500 hover:text-gray-400"
                        : "text-gray-400 hover:text-blue-500"}`}
                    onClick={() => ChangeFilter("Completar")}>Completado</button>
            </div>
        </section>
    )
}

export default TodoFilter;