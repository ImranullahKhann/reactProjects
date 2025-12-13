import "./styles.css";
import { useState } from "react";

export default function RandomColor() {
  function randomGenerator(maxExclusive) {
    return Math.floor(Math.random() * maxExclusive);
  }

  const [bgColor, setBgColor] = useState("#ffffff");
  const [type, setType] = useState("hex");

  function generateRandomHex() {
    setType("hex");
    const hexDigits = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
    ];

    let randomHex = "#";
    for (let i = 0; i < 6; i++)
      randomHex += hexDigits[randomGenerator(hexDigits.length)];

    setBgColor(randomHex);
  }

  function generateRandomRGB() {
    setType("rgb");
    let randomRGB = "rgb(";
    for (let i = 0; i < 3; i++) randomRGB += randomGenerator(256) + ",";
    randomRGB = randomRGB.substring(0, randomRGB.length - 1) + ")";

    setBgColor(randomRGB);
  }

  return (
    <div className="random-color">
      <h2>Random Color Generator</h2>
      <div className="interface">
        <button
          onClick={type === "hex" ? generateRandomHex : generateRandomRGB}
        >
          Generate Random Color
        </button>
        <button onClick={generateRandomRGB}>Random RGB color</button>
        <button onClick={generateRandomHex}>Random Hex color</button>
      </div>
      <div
        className="color-block"
        style={{
          backgroundColor: bgColor,
        }}
      >
        <h2>{bgColor}</h2>
      </div>
    </div>
  );
}
