import { configureStore } from "@reduxjs/toolkit";
import traverseOffset from "./offsetSlice";

let store =configureStore ({
    reducer : {
        apiOffset :traverseOffset,
    }
})

export default store;