import React from "react";
import { Container } from "react-bootstrap";
import AppNavbar from "./components/layout/AppNavbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import Students from "./components/students/Students";
import Employees from "./components/employees/Employees";
import UserProvider from "./contexts/UserProvider";
import StudentForm from "./components/students/form/StudentForm";
import EmployeeForm from "./components/employees/form/EmployeeForm";
import Locations from "./components/locations/Locations";
import LocationForm from "./components/locations/form/LocationForm";
import { Provider } from 'react-redux';
import store from "./redux/store";

function App () {
    return (
        <>
            <Provider store={ store }>
                <BrowserRouter>
                    <UserProvider>
                        <AppNavbar />
                        <Container>
                            <Routes>
                                <Route path="/" element={ <Dashboard /> } ></Route>
                                <Route path="estudiantes" element={ <Students /> } ></Route>
                                <Route path="estudiantes/nuevo" element={ <StudentForm /> } ></Route>
                                <Route path="estudiantes/:id" element={ <StudentForm /> } ></Route>
                                <Route path="empleados" element={ <Employees /> } ></Route>
                                <Route path="empleados/nuevo" element={ <EmployeeForm /> } ></Route>
                                <Route path="administracion/recintos" element={ <Locations /> } ></Route>
                                <Route path="administracion/recintos/nuevo" element={ <LocationForm /> } ></Route>
                            </Routes>
                        </Container>
                    </UserProvider>
                </BrowserRouter>
            </Provider>
        </>
    )
}
export default App;
