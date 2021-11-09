import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counteraja",
  initialState: {
    value: 0,
    todos: [],
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    updateTodo: (state, action) => {
      const newTodos = state.todos.map((v) => {
        if (v.id === action.payload) {
          v.isCompleted = !v.isCompleted;
        }
        return v;
      });
      state.todos = newTodos;
    },
  },
});

// action creator
export const { increment, decrement, incrementByAmount, addTodo, updateTodo } =
  counterSlice.actions;
export default counterSlice.reducer;
