import React, { useState, useRef, useEffect } from "react";

function PinCode({ onPinEntered, onIncorrectPin }) {
  const [pin, setPin] = useState(["", "", "", "", "", ""]);
  const inputRefs = [
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
  ];

  useEffect(() => {
    speak("Please Enter your Passcode");
  }, []);

  const speak = (text) => {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    synth.speak(utterance);
  };

  const handleInputChange = (event, index) => {
    const { value } = event.target;
    const newPin = [...pin];
    newPin[index] = value;

    if (value !== "" && index < 5) {
      inputRefs[index + 1].current.focus();
    }

    setPin(newPin);

    if (newPin.every(digit => digit !== "")) {
      if (newPin.join("") === "000000") {
        speak("Passcode is correct. Access granted.");
        onPinEntered();
      } else {
        speak("Please Enter Right Passcode");
        if (onIncorrectPin) {
          onIncorrectPin();
        }
      }
    }
  };

  const handleInputKeyDown = (event, index) => {
    if (event.key === "Backspace" && index > 0) {
      inputRefs[index - 1].current.focus();
    }
  };

  return (
    <div
      className="container"
      style={{ display: "flex", justifyContent: "center", gap: "36px" }}
    >
      {pin.map((digit, index) => (
        <div
          key={index}
          className="box-style text-[30px] text-white "
          style={{
            padding: "29px 0px 28px 0px",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "4px",
            border: "0.651px solid rgba(255, 255, 255, 0.20)",
            background:
              "linear-gradient(135deg, rgba(31, 30, 35, 0.10) 0%, rgba(5, 5, 5, 0.10) 100%)",
            boxShadow: "0px 1px 94px 20px rgba(73, 112, 251, 0.15)",
            backdropFilter: "blur(2px)",
            display: "flex",
            alignContent: "center",
          }}
        >
          <input
            type="text"
            className="pin-input"
            value={digit}
            onChange={(e) => handleInputChange(e, index)}
            onKeyDown={(e) => handleInputKeyDown(e, index)}
            maxLength="1"
            ref={inputRefs[index]}
            style={{
              border: "none",
              outline: "none",
              padding: "0",
              color: "white",
              background: "transparent",
              width: "110px",
              textAlign: "center"
            }}
          />
        </div>
      ))}
    </div>
  );
}

export default PinCode;
