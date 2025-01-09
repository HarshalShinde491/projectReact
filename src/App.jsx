import React from 'react'
import Background from './components/Background'
import Foreground from './components/Foreground'

function App() {
  return (
    <div className='z-[2] relative w-full h-screen bg-sky-200 '>
      <Background/>
      <Foreground/>
      
    </div>
  )
}

export default App
