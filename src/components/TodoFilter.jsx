const TodoFilter = () => {
    return (
        <section className="container mx-auto px-4 mt-8">
            <div className="bg-white flex justify-center rounded-md p-4 gap-4">
                <button className="text-blue-600">Todo</button>
                <button className="hover:text-blue-600">Activar</button>
                <button className="hover:text-blue-600">Completar</button>
            </div>
        </section>
    )
}

export default TodoFilter;