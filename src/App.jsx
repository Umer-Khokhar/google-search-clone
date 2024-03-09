import React, { useState } from 'react'
import { Navbar } from './Components/Navbar'
import { Routese } from './Components/Routese'
import { Footer } from './Components/Footer'
import './App.css'
import { Results } from './Components/Results'

function App() {

  const [darkTheme, setDarkTheme] = useState()
  return (
    <>
     <div className={darkTheme ? 'dark' : ''}>
      <div className="container max-w-screen-2xl mx-auto bg-gray-100 min-h-screen dark:bg-gray-800 dark:text-gray-200 min-w-full">
      <div className="wrapper">
        <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
        <Routese/>
        <Footer/>
      </div>
     </div>
      </div>
    </>
  )
}

export default App
