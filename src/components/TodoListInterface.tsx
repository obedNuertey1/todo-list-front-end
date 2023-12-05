

export default ():JSX.Element=>{
    return (
        <div data-testid="todoListapp" className="max-w-xl m-auto mt-16 px-2">
            <header id="todo-heading" className="todo-page-elems mb-4">
                <h1 className="text-center font-bold text-3xl">Todo List</h1>
            </header>
            <main className="todo-page-elems">
                <section className="main-todo">
                    <form /*method="post" action="#"*/ className="flex flex-row gap-1">
                        <input type="text" placeholder="Add todo" className="border-gray-200 border-solid border shadow-md w-11/12 rounded p-1.5 focus:outline-green-500 focus:outline-2 focus:outline-dashed" />
                        <button type="submit" className="bg-green-500 text-white px-3 rounded shadow-md active:border-2 active:border-green-500 active:text-green-500 active:bg-white active:px-3 active:border-spacing-0 active:shadow-none active:scale-95">Add</button>
                    </form>
                </section>
                <section className="main-todo"></section>
            </main>
        </div>
    );
};
