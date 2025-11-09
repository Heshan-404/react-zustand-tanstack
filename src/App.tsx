import {useCountStore} from "./stores/counter.store.ts";
import {useQuery} from "@tanstack/react-query";
import {getTodos} from "./apis/TodosAPI.ts";
import type {Todo} from "./types/Todo.ts";
import {useTodoStore} from "./stores/todo.store.ts";

export default function App() {
    return (
        <Todos/>
    )
}


const FirstComponent = () => {
    const count = useCountStore((state) => state.count)
    const decrease = useCountStore((state) => state.decrease)
    const asyncIncrease = useCountStore((state) => state.asyncIncrease)

    return (
        <div>
            {count}
            <div>
                <button onClick={asyncIncrease}>Increase</button>
                <button onClick={decrease}>Decrease</button>
            </div>
        </div>
    )
}

const SecondComponent = () => {
    const count = useCountStore((state) => state.count)
    const increase = useCountStore((state) => state.increase)
    const decrease = useCountStore((state) => state.decrease)

    return (
        <div>
            {count}
            <div>
                <button onClick={increase}>Increase</button>
                <button onClick={decrease}>Decrease</button>
            </div>
        </div>
    )
}


const Todos = ()=> {

    const query = useQuery({ queryKey: ['todos'], queryFn: getTodos })
    const todos = useTodoStore((state)=>state.todos)
    const addTodo = useTodoStore((state)=>state.addTodo)
    const removeTodo = useTodoStore((state)=>state.removeTodo)

    const handleAddTodo = (todo: Todo)=>{
        addTodo(todo)

    }

    const todoIdsInStore = new Set(todos.map(todo=> todo.id))
    const filteredTodos = query.data?.filter(todo=> !todoIdsInStore.has(todo.id))

    return (
        <div style={{display:"flex", gap: '20px', marginTop: "20px"}}>
            <div style={{display: "flex", gap: '20px', flexFlow: "column"}}>
                {filteredTodos?.map((todo: Todo,index:number)=>(
                    <div style={{backgroundColor: "#232323", padding: "20px", display: "flex", gap: "20px", flexFlow: 'column', width:"500px"}} key={index}>
                        {todo.todo}
                        <div style={{display: 'flex', justifyContent: 'space-between'}}>
                            <button style={{width: "100px"}} onClick={()=>handleAddTodo(todo)}>Add</button>
                        </div>
                    </div>
                ))}
            </div>
            <div style={{display: "flex", gap: '20px', flexFlow: "column"}}>
                {todos.map((todo,index)=>(
                    <div style={{backgroundColor: "#232323", padding: "20px", display: "flex", gap: "20px", flexFlow: 'column', width:"500px"}} key={index}>
                        {todo.todo}
                        <div style={{display: 'flex', justifyContent: 'end'}}>
                            <button style={{width: "100px"}} onClick={()=>removeTodo(todo.id)}>Remove</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}