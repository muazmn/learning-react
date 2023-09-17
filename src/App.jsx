/* eslint-disable react/jsx-no-target-blank */
// import { useState } from 'react'
import './App.css'
import HomePage from "./pages/index"
import { GlobalContext } from './context'

function App() {
const user = {
  username : 'muaz'
}
  return (
    <>
     <div className="App">
      {/* homepage need to stay inside GlobalContext to access context in GlobalContext */}
        <GlobalContext.Provider value={user}>
        <HomePage/>
        </GlobalContext.Provider>
     </div>
    </>
  )
}

export default App
