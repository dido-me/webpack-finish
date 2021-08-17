import React from 'react'
import "../../public/style.css"
import logo from "../../public/assets/logo.png"
console.log(process.env.LOGO_ENV)

function App() {
    return (
        <>
            <h1>Hola Ya estas ya, Esteban!!</h1>
            <img src={logo} alt="logo" />
            {
               
            }
        </>
    )
}

export default App
