import React, {createContext} from "react"

// import Components
import Navbar from "./components/Navbar"
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Call from "./components/Call";
import Features from "./components/Features";
import Clients from "./components/Clients";
import Stats from "./components/Stats";
import Pricing from "./components/Pricing";
import Questions from "./components/Questions";
import Contact from "./components/Contact";


//let's create a context;
const themeContext = createContext(); 


function App() {
  const theme = {
    themeColor: "#009961",
    themeColorHover: "#01784c",
    lightBgColor: "#F9F9F9",
  }
  return (
    <>
    <themeContext.Provider value={theme}>
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Services></Services>
      <Call></Call>
      <Features></Features>
      <Clients></Clients>
      <Stats></Stats>
      <Pricing></Pricing>
      <Questions></Questions>
      <Contact></Contact>
    </themeContext.Provider>
    </>
  )
}

export default App
export {themeContext};