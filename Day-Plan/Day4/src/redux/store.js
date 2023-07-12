import createStore from"react-redux"
import bookReducer from "./book/bookReducer"
import configureStore from "@reduxjs/toolkit"

// export const store = createStore(bookReducer);
export const store = configureStore({
    reducer:bookReducer
})