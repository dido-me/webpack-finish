import React from "react"
import "../../public/style.css"
import logo from "../../public/assets/logo.png"
console.log(process.env.LOGO_ENV)

function App() {
  const a = "hola"
  return (
    <>
      <h1>Hola Ya estas ya, Esteban!! o no</h1>
      <img src={logo} alt="logo" />
      <h1>holaa</h1>
      <h3>{a}</h3>
    </>
  )
}

export default App
