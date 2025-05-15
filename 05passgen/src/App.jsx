import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  // State to store password length
  const [length, setLength] = useState(8);

  // State to toggle inclusion of numbers in the password
  const [numberAllow, setNumberAllowed] = useState(false);

  // State to toggle inclusion of special characters in the password
  const [charAllow, setChar] = useState(false);

  // State to store the generated password
  const [password, setPass] = useState("");

  // useRef for accessing the input field directly for copying
  const passwordref = useRef(null);

  // Password generation function, memoized using useCallback
  const passGen = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    // Append numbers if allowed
    if (numberAllow) str += "0123456789";

    // Append special characters if allowed
    if (charAllow) str += "/';[].,?)(`~";

    // Loop to generate random characters based on selected length
    for (let i = 1; i <= length; i++) {
      // Fixed: Generate a safe random index
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    // Set the generated password
    setPass(pass);
  }, [length, numberAllow, charAllow]);

  // Generate password on component mount and when dependencies change
  useEffect(() => {
    passGen();
  }, [length, numberAllow, charAllow, passGen]);

  // Copy password to clipboard function
  const copypasstoclipboard = useCallback(() => {
    // Select the text inside the input
    passwordref.current?.select();
    passwordref.current?.setSelectionRange(0, 50); // Optional, selects part of the text

    // Use Clipboard API to copy the text
    window.navigator.clipboard.writeText(password);
  }, [password]);

  return (
    <>
      {/* Main container */}
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg py-2 px-4 my-3 text-orange-500 bg-gray-700">
        
        {/* Heading */}
        <h1 className="text-white text-center my-3">
          React Project : Password Generator
        </h1>

        {/* Input field to display password and copy button */}
        <div className="flex shadow-md rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordref} // reference for copying
          />
          <button
            onClick={copypasstoclipboard}
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 hover:bg-red-500"
          >
            Copy
          </button>
        </div>

        {/* Options section: range slider and checkboxes */}
        <div className="flex text-sm gap-x-2">
          {/* Length slider */}
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={50}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value); // update password length
              }}
            />
            <label>Length: {length}</label>
          </div>

          {/* Checkbox to allow numbers */}
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllow}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>

          {/* Checkbox to allow special characters */}
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllow}
              id="charInput"
              onChange={() => {
                setChar((prev) => !prev);
              }}
            />
            <label htmlFor="charInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
