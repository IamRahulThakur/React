import { useState } from 'react'
import './App.css'
function App() {

  // Ye hote hai hooks Matlab main fronterd m kese kya dikhana h yahi 
  // manage krte hai
  let [counter, setCounter] = useState(15);

  const incraeaseValue = () => {
    if (counter >= 20) {
      return;
    }
    else {
      setCounter(counter + 1)
      // Agar Ham Yaha pe 4 bar set counter likhenge to kya output ayega
      setCounter(counter + 1)
      setCounter(counter + 1)
      setCounter(counter + 1)
      // Answer Same hi ayega kyu ki useState() value ko bunch m behjta hai 
      // To jab iska bunch jayega to use lagega sab kuch ek hi h to bas 1 se
      // Hi increase hogi v alue



      // Is case m kya hoga ?
      // Is case m vale 4 se increase hogi kyu ki isme humne function pass
      // kiya hai jo value le rha h prevcounter ki matlab jo pichli value 
      // hogi usme + 1 kr rha h isliye isme ek sath 4 se increamet hoga
      // setCounter(prevCounter => prevCounter + 1)
      // setCounter(prevCounter => prevCounter + 1)
      // setCounter(prevCounter => prevCounter + 1)
      // setCounter(prevCounter => prevCounter + 1)

    }
  }

  const decreaseValue = () => {
    if (counter <= 0) {
      return;
    }
    else {
      setCounter(counter - 1)
    }
  }

  return (
    <>
      <h1>Rahul Pratap Singh</h1>
      <h2>Value is {counter} </h2>
      <button
        onClick={incraeaseValue}>
        Increase
      </button>
      <br />
      <button
        onClick={decreaseValue}>
        Decrease
      </button>
    </>
  )
}

export default App
