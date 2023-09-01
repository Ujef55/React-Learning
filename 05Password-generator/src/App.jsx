import { useState, useEffect } from "react"

function App() {
  const [length, setLength] = useState(6)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')

  const randomPassword = useEffect(() => {
    let pass = '';
    let string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    if(numberAllowed) {
      string += '0123456789';
    }

    if(charAllowed) {
      string += '!@#$%^&*(){}[]:"<>?';
    }

    for(let i = 1; i <= length; i++ ) {
      const randomLetter = Math.floor(Math.random() * string.length + 1);
      pass += string.charAt(randomLetter);
    }

    setPassword(pass);

  }, [length, numberAllowed, charAllowed])

  return (
   <>
     
   </>
  )
}

export default App
