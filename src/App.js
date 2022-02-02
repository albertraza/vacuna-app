import React from "react";
import { Container } from "react-bootstrap";
import AppNavbar from "./components/layout/AppNavbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import Students from "./components/students/Students";
import Employees from "./components/employees/Employees";
import UserProvider from "./contexts/UserProvider";

function App () {
    return (
        <>
            <BrowserRouter>
                <UserProvider>
                    <AppNavbar />
                    <Container>
                        <Routes>
                            <Route path="/" element={ <Dashboard /> } ></Route>
                            <Route path="estudiantes" element={ <Students /> } ></Route>
                            <Route path="empleados" element={ <Employees /> } ></Route>
                        </Routes>
                    </Container>
                </UserProvider>
            </BrowserRouter>
        </>
    )
}
export default App;
