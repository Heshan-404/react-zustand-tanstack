import {useCountStore} from "./store.ts";

export default function App() {
    const isLoading = useCountStore((state)=> state.isLoading)

    return (
        <div>
            {isLoading && <div style={{height: "20px", width: "20px" , backgroundColor : 'red'}}></div>}
            <FirstComponent/>
            <SecondComponent/>
        </div>
    )
}


const FirstComponent = () => {
    const count= useCountStore((state)=>state.count)
    const decrement= useCountStore((state)=>state.decrement)
    const asyncIncrement= useCountStore((state)=>state.asyncIncrement)

    return (
        <div>
            {count}
            <div>
                <button onClick={asyncIncrement}>
                    Increment
                </button>
                <button onClick={decrement}>
                    Decrement
                </button>
            </div>
        </div>
    )
}


const SecondComponent = () => {
    const count= useCountStore((state)=>state.count)
    const increment= useCountStore((state)=>state.increment)
    const decrement= useCountStore((state)=>state.decrement)

    return (
        <div>
            {count}
            <div>
                <button onClick={increment}>
                    Increment
                </button>
                <button onClick={decrement}>
                    Decrement
                </button>
            </div>
        </div>
    )
}



