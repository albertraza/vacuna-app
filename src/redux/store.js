import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { studentReducer } from "../components/students/reducers/studentReducer";
import { studentsReducer } from "../components/students/reducers/studentsReducer";

const reducers = combineReducers( {
    students: studentsReducer,
    student: studentReducer
} );

const store = configureStore( {
    reducer: reducers
} );

export default store;
