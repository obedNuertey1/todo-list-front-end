namespace Todo{
    export interface IclassNames<T>{
        wrapperClass: T;
        descriptionClass: T;
        editClass: T;
        deleteClass: T;
        editButtonClass: T;
        deleteButtonClass: T;
    }

    export interface Itodos<U>{
        className: IclassNames<U>;
        description: U;
        id: U;
        handleDelete: (e:any)=> void;
        handleEdit: (e:any)=> void;
    };

    export type todosJSX = JSX.Element[];

    export class TodoClass<S extends Itodos<string>>{
        private todoArray: S[];

        constructor(todoArray: S[]){
            this.todoArray = todoArray;
        }

        public generateTodos():todosJSX{
            return this.todoArray.map((elem:S):JSX.Element=>{
                return (
                    <div className={elem.className.wrapperClass}>
                        <div className={elem.className.descriptionClass}><h1>{elem.description}</h1></div>
                        <div className={elem.className.editClass}><button onClick={elem.handleEdit} id={elem.id} className={elem.className.editButtonClass}>Edit</button></div>
                        <div className={elem.className.deleteClass}><button onClick={elem.handleDelete} id={elem.id} className={elem.className.deleteButtonClass}>Delete</button></div>
                    </div>
                );
            });
        };
    };

};

export default Todo;