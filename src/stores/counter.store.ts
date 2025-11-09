import {create} from "zustand/react";

interface CountStore {
    count: number;
    increase: () => void
    decrease: () => void
    asyncIncrease: ()=> Promise<void>
}


export const useCountStore = create<CountStore>((set) => (
    {
        count: 0,
        increase: () => set(state => ({count: state.count + 1})),
        decrease: () => set(state => ({count: state.count - 1})),
        asyncIncrease: async() => {
            await new Promise(resolve => setTimeout(resolve,2000))
            set(state => ({count: state.count + 1}))
        }
    }
))