import React from "react" //'react'-> absolute path
//import React from "C:/Users/Admin/OneDrive/Desktop/monster/node_modules/@types/react/index" //"react" -> absolute path
//import React from "../node_modules/@ampproject/remapping/package.json" //'react'-> relative path
import ReactDOM from 'react-dom/client'
//import '../public/test'
import App from "./App"
import Home from "./Home"


const root = ReactDOM.createRoot(document.getElementById('root'))


root.render(
    <>
        <App/>
        <Home/>
    </>
) //It is rendering from JS6 to DOM
