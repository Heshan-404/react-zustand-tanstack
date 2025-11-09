import {create} from "zustand/react";
import type {Todo} from "../types/Todo.ts";

interface TodoStore {
    todos: Todo[];
    addTodo: (todo: Todo)=> void
    removeTodo: (todoId: number)=> void
}

export const useTodoStore = create<TodoStore>((set)=>({
    todos: [],
    addTodo: (todo: Todo)=> set(state => ({todos:[...state.todos, todo]})),
    removeTodo: (todoId: number) => set(state => ({
      todos: state.todos.filter((todo: Todo) => todo.id !== todoId)
    }))
}))