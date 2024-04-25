import { useState } from 'react'
import './App.css'

function App() {

  const [color, setColor] = useState("olive")

  return (
    <>
      <div className=' w-screen h-screen' style={{ backgroundColor: color }}>
        {/* onclick hamesha function hi leta hai */}
        <button onClick={() => setColor('Green')} className='bg-green-600 text-black'>Green</button>
        <button onClick={() => setColor('Red')} className='bg-red-600 text-black'>Red</button>
        <button onClick={() => setColor('Orange')} className='bg-orange-600 text-black'>Orange</button>
      </div>

    </>
  )
}

export default App
