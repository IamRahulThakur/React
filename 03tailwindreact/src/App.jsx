// import { useState } from 'react'
import './App.css'
import Card from './components/Card.jsx'


  function App() {


    return (
      <>
        <button className=' mb-5 bg-[#3ae1c2] text-black'>CLick Me </button>
        <Card username='Rahul' btntext='Click Me'/>
        <br />
        <Card username='Sunny' btntext='Visit Me' />
      </>
    )
  }

export default App
 