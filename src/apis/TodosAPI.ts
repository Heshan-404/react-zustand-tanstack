import type {Todo} from "../types/Todo.ts";

export const getTodos = async (): Promise<Todo[]> => {
    const res = await fetch('https://dummyjson.com/todos');
    if (!res.ok) {
        throw new Error('Failed to fetch todos');
    }

    const data = await res.json();
    return data.todos;
};
