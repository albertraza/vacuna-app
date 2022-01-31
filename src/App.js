import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import AppNavbar from "./components/layout/AppNavbar";
import axios from 'axios';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import Students from "./components/students/Students";
import Employees from "./components/employees/Employees";

const promiseExample = () => new Promise( resolve => {
    setTimeout( () => {
        resolve( 'hola' );
    }, 2000 );
} ); // imaginemos que esto es una peticion HTTP.

const promiseExample2 = () => new Promise( resolve => {
    setTimeout( () => {
        resolve( 'hola' );
    }, 2000 );
} );
const promiseExample3 = () => new Promise( resolve => {
    setTimeout( () => {
        resolve( 'hola' );
    }, 2000 );
} );

const promiseError = () => new Promise( ( resolve, reject ) => {
    setTimeout( () => {
        reject( { message: 'Ocurrio un error' } );
        // resolve( 'hola' );
    }, 1000 )
} );


function App () {

    useEffect( () => {
        // Primera forma de ejecutar una promesa.
        // promiseExample().then( resolve => {
        //     console.log( resolve );
        //     promiseExample2().then( resolve => {
        //         console.log( resolve );
        //         promiseExample3().then( resolve => {
        //             console.log( resolve );
        //         } );
        //     } );
        // } );

        // segunda forma de ejecutar una promesa (recomendada).
        // async function ejemplo () {
        //     const result = await promiseExample();
        //     const result2 = await promiseExample2();
        //     const result3 = await promiseExample3();
        //     console.log( { result, result2, result3 } );
        // }

        // ejemplo();

        // Manejo de Errores
        // promiseError()
        //     .then( resolve => console.log( 'funcionó bien' ) )
        //     .catch( error => console.log( error ) );

        // async function ejemplo () {
        //     try {
        //         const result = await promiseError();
        //         console.log( 'funciono bien' );
        //     } catch ( err ) {
        //         console.log( err );
        //     }
        // }

        // ejemplo();

        // async function getGitHubUser ( userName ) {
        //     const response = await fetch( `https://api.github.com/users/${ userName }` );
        //     const jsonResult = await response.json();
        //     console.log( jsonResult );
        //     return jsonResult;
        // }

        async function getGitHubUser ( userName ) {
            const { data } = await axios.get( `https://api.github.com/users/${ userName }` );
            return data;
        }

        getGitHubUser( 'ventucles' );


    }, [] );

    return (
        <>
            <BrowserRouter>
                <AppNavbar />
                <Container>
                    <Routes>
                        <Route path="/" element={ <Dashboard /> } ></Route>
                        <Route path="estudiantes" element={ <Students /> } ></Route>
                        <Route path="empleados" element={ <Employees /> } ></Route>
                    </Routes>
                </Container>
            </BrowserRouter>
        </>
    )
}


export default App;
