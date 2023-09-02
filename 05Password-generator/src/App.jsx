import { useState, useEffect } from "react";
import "./index.css";

function App() {
  const [length, setLength] = useState(6);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const randomPassword = () => {
    let pass = "";
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) {
      string += "0123456789";
    }

    if (charAllowed) {
      string += '!@#$%^&*(){}[]:"<>?';
    }

    for (let i = 1; i <= length; i++) {
      const randomLetter = Math.floor(Math.random() * string.length + 1);
      pass += string.charAt(randomLetter);
    }

    setPassword(pass);
  };

  useEffect(() => {
    randomPassword();
  }, [length, numberAllowed, charAllowed]);

  const copyHandler = () => {
    const text = document.getElementById('inputText');
    text.select();
    navigator.clipboard.writeText(text.value);
  }

  return (
    <div className="bg-black w-full h-screen flex flex-col justify-center items-center">
      <h1 className="text-white text-2xl text-center p-6">
        Random Password Generator
      </h1>
      <div className="bg-gray-800 p-32 w-8/12 rounded-xl flex flex-col items-center">
        <div className="flex items-center">
          <input
            type="text"
            id="inputText"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
          />
          <button onClick={copyHandler} className="outline-none bg-blue-700 text-white py-1 px-3">
            Copy
          </button>
        </div>

        <div className="flex text-white items-center m-7 gap-4">
          <div className="flex items-center">
            <input
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => {
              setLength(e.target.value);
            }}
            />
          <label>Length: {length}</label>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
