/* eslint-disable react/jsx-no-target-blank */
import { useState } from 'react'
import Article from "./components/Article"
import './App.css'

function App() {

  return (
    <>
     <div className="App">
      {/* to make the article component reusable, means the data not same, we need to keep it data in it parent component, and use props in Article */}
        <Article name="muaz" titles={["muaz", "software", "engineer"]}/>
     </div>
    </>
  )
}

export default App
