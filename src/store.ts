import {create} from "zustand"

type CountStore = {
    count: number;
    increment: () => void;
    decrement: () => void;
    asyncIncrement: () => Promise<void>;
    isLoading: boolean
}

export const useCountStore = create<CountStore>((set) => ({
    count: 0,
    increment: () => set((state)=> ({count : state.count + 1})),
    decrement: () => set((state)=>({count: state.count -1})),
    asyncIncrement: async () => {
        set(({isLoading : true}))
        await new Promise((resolve) => setTimeout(resolve, 2000))

        set((state)=>({count: state.count + 1}))
        set(({isLoading : false}))
    },
    isLoading: false
}))