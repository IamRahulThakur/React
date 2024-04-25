import { useState, useEffect } from 'react'
import './App.css'


function App() {

  // isme 1 cheej hai count and setCount count m initially useState m jo value hoti
  // Hai vo jati hai fir ham setCount se use update krte hai to count update hota 
  // Rhta hai
  const [count, setCount] = useState(0);
  // Javascript m ham ye kaam direct bhi kar sakte the initialise count to 0 and 
  // Function m count += 1 to vo kaam krte par react m nahi krta 
  // React depends upon setState to trigger re-render if we change variable directly
  // Then react is not aware that variable has changed
  function clicked() {
    setCount(count + 1);
  }


  // useEffect(<function>, <dependency>) depencency m agar ham kuch pass nahi krenge to bhi 
  // kaam karega
  // useEffect ka kaam hota hai ki agar ham <dependency> m jo bhi dalte hai agar uski value m 
  // Ya ham kah sakte hai ki agar usme koi change hota hai to useEffect us function ko fir se
  // run kar deta hai
  // To ye ham vaha use krenge jaha koi 1 cheej change krne par dusari cheej automatically
  // Change krni ho

  const [calculation , setCalculation] = useState(0);
  useEffect(() => {
    setCalculation(() => count * 2);
  }, [count]); 

  
  return (
    <>

      <button
        onClick={clicked}>
        You clicked me {count} times
      </button >
      <h1>calculation : {calculation} </h1>
    </>
  )
}

export default App
