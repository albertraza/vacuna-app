import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { employeesReducer } from "../components/employees/reducers/employeesReducer";
import { studentReducer } from "../components/students/reducers/studentReducer";
import { studentsReducer } from "../components/students/reducers/studentsReducer";

const reducers = combineReducers( {
    students: studentsReducer,
    student: studentReducer,
    employees: employeesReducer
} );

const store = configureStore( {
    reducer: reducers
} );

export default store;
