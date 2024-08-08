import React, {createContext} from "react"
import Navbar from "./components/Navbar"
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";


//let's create a context;
const themeContext = createContext(); 


function App() {
  const theme = {
    themeColor: "#009961",
    themeColorHover: "#01784c",
  }
  return (
    <>
    <themeContext.Provider value={theme}>
    <Navbar></Navbar>
    <Home></Home>
    <About></About>
    <Services></Services>
    </themeContext.Provider>
      
    </>
  )
}

export default App
export {themeContext};