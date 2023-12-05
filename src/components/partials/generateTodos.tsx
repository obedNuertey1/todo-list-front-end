import Todo from "../namespace/Todo";

export default ({todosMod}:any):JSX.Element=>{
    const processedTodos = new Todo.TodoClass<Todo.Itodos<string>>(todosMod);

    return (
        <>
            {processedTodos.generateTodos()}
        </>
    );
}; 