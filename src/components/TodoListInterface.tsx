import { useState } from "react";
import Todo from "./namespace/Todo";
import GenerateTodos from "./partials/generateTodos";


export default ():JSX.Element=>{
    const [addTodo, setAddTodo] = useState("");
    const [todoArray, setTodoArray] = useState([]);
    const todosMod:Todo.Itodos<string>[] = todoArray.map((elem:string, index: number)=>{
        return {
            className: {
                wrapperClass: "main-todo-2-children flex flex-row flex-nowrap items-center h-auto justify-start border-b pb-1 mt-1 hover:border-1 hover:border-solid hover:border-gray-200 hover:shadow-md",
                descriptionClass: "w-1/2 font text-ellipsis break-words",
                editClass: "w-1/4 pl-1",
                deleteClass: "w-1/4 pl-1",
                editButtonClass: "bg-yellow-500 text-black px-1 py-0.5 rounded hover:bg-white hover:text-yellow-500 hover:border-2 hover:border-solid hover:border-yellow-500 hover:px-1 hover:py-0.5",
                deleteButtonClass: "bg-red-600 text-white px-1 py-0.5 rounded hover:bg-white hover:text-red-600 hover:border-2 hover:border-solid hover:border-red-600 hover:px-1 hover:py-0.5"
            },
            description: elem,
            id: `${index}`,
            handleEdit(e:any):void {
                let index:number = e.target.id as number;
                let promptVal:string|null = prompt("Update your todo", todoArray[index]);
                if(promptVal){
                    let newArray:string|any = [];
                    todoArray.forEach((elem, i)=>{
                        if(i == index){
                            newArray.push(promptVal);
                        }else{
                            newArray.push(elem);
                        }
                    });
                    setTodoArray(newArray);
                }
            },
            handleDelete(e:any):void {
                let index:number = e.target.id as number;
                
                let newArray:string|any = [];
                todoArray.forEach((elem, i)=>{
                    if(i == index){
                        alert(`${elem} has been deleted successfully`);
                    }else{
                        newArray.push(elem);
                    }
                });
                setTodoArray(newArray);
            },
        };
    });

    const handleSubmit = (e:any):void=>{
        e.preventDefault();

        // @ts-ignore
        setTodoArray([addTodo, ...todoArray]);
        setAddTodo('');
    };

    const handleChange = (e:any):void=>{
        setAddTodo(e.target.value);
    }

    return (
        <div data-testid="todoListapp" className="max-w-4xl m-auto mt-16 px-2">
            <header id="todo-heading" className="todo-page-elems mb-4">
                <h1 className="text-center font-bold text-3xl">Todo List</h1>
            </header>
            <main className="todo-page-elems">
                <section className="main-todo">
                    <form onSubmit={handleSubmit} className="flex flex-row gap-1">
                        <input type="text" value={addTodo} onChange={handleChange} placeholder="Add todo" className="border-gray-200 border-solid border shadow-md w-11/12 rounded p-1.5 focus:outline-green-500 focus:outline-2 focus:outline-dashed" />
                        <button type="submit" className="bg-green-500 text-white px-3 rounded shadow-md active:border-2 active:border-green-500 active:text-green-500 active:bg-white active:px-3 active:border-spacing-0 active:shadow-none active:scale-95">Add</button>
                    </form>
                </section>
                <hr className="mt-10 mb-2" />
                <section className="main-todo relative h-4/5 overflow-y-auto">
                    <div className="main-todo-2-children font-bold flex flex-row flex-nowrap items-center justify-start border-b pb-1 fixed z-10 bg-white left-0 right-0 top-auto bottom-auto px-2 max-w-4xl m-auto ">
                        <div className="w-1/2"><h1>Description</h1></div>
                        <div className="w-1/4 border-l border-gray-300 border-solid pl-1"><h1 >Edit</h1></div>
                        <div className="w-1/4 border-l border-gray-300 border-solid pl-1"><h1 >Delete</h1></div>
                    </div>
                    <div className="main-todo-2-children mt-10">
                        <GenerateTodos todosMod={todosMod}/>
                    </div>
                </section>
            </main>
        </div>
    );
};
