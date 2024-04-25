import { useState, useCallback, useRef, useEffect } from 'react'

function App() {
  
  const [length, setLength] = useState(8);
  const [numAllowed, setnumAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);


  // Hamne yaha useCallback kyu use kiya hai ?
  // dekh hamne useEffect k andar ye funcion call kiya hai or use effect k dependency array m
  // password generator ko dala hai to ye to infinite loop ho gya jab passwordGenerator change
  // Hoga to useEffect passwordGenerator function ko call kar dega jab function call hoga to fir 
  // se ye kuch naya password dega to ham infinite loop m fas jayenge to us se bachne k liye 
  // Hamne useCall back ka use kiya hai ab useCallback k andar hamne  length , numAllowed ,
  // charAllowed dale hai jab in teeno m se kuch change hoga tabhi new password generate hoga
  // Nahi to nahi hoga 

  // Agar ham chahate hai ki ham useCallback ka use na kare to useEffect k dependency array m se
  // passwordGenerator ko hata do to ya useCallback use krne ki koi jarurat nahi hai kyu ki fir 
  // Ham loop m nahi fasenge
  
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numAllowed)
      str += "1234567890";

    if (charAllowed)
      str += "!@#$%^&*()";

    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);

  }, [length, numAllowed, charAllowed ])


  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password]);
  

  // jab bhi ArrayList m di gyi list m kuch change hoga password generator call ho jayega
  useEffect(() => { passwordGenerator() }, [length, numAllowed, charAllowed , passwordGenerator])

  return (
    <>
      <div className="ml-96 py-12 w-full rounded-lg px-4  my-8 bg-gray-800 text-orange-500">
        <h1 className=' text-white text-center'>Password
          generator</h1>
        <div className=" gap-2 flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none  w-full py-1 px-3 rounded-md"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
          >Copy</button>
        </div>
        <div className=' flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1 flex-grow'>
            <input
              type="range"
              min={6}
              max={20}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }}
            />
            < label >Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1 flex-grow">
            <input
              type="checkbox"
              defaultChecked={numAllowed}
              id="numberInput"
              onChange={() => setnumAllowed((prev => !prev))}
            />
            Number
          </div>
          <div className="flex items-center gap-x-1 flex-grow">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="numberInput"
              onChange={() => setcharAllowed((prev => !prev))}
            /> Character
          </div>
        </div >

      </div >
    </>
  )
}

export default App
