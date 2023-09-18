/* eslint-disable react/jsx-no-target-blank */
// import { useState } from 'react'
import './App.css'
import { GlobalContext } from './context'
import {router} from "./routers"
import {RouterProvider} from "react-router-dom"

function App() {
const user = {
  username : 'muaz'
}
  return (
    <>
     <div className="App">
      {/* homepage need to stay inside GlobalContext to access information in GlobalContext */}

        <GlobalContext.Provider value={user}>
      {/* in this parent component, we're just handle the router, so we don't need home, in the of component, we give to router to manages all of them */}
        {/* <Home/> */}
        <RouterProvider router={router}/>
        </GlobalContext.Provider>
     </div>
    </>
  )
}

export default App
