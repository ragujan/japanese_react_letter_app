import "./styles.css";
import { useState } from "react";

export default function App() {
  const seasons = ["Spring", "Summer", "Autumn", "Winter"];

  const [inputValues, setInputValues] = useState(
    new Array(seasons.length).fill("")
  );

  const handleInput = (index, value) => {
    setInputValues((prevValues) => {
      const newValues = [...prevValues];
      newValues[index] = value;
      return newValues;
    });
  };

  const clearInput = (index) => {
    setInputValues((prevValues) => {
      const newValues = [...prevValues];
      newValues[index] = "";
      return newValues;
    });
  };

  return (
    <div className="">
      <h2>Seasons of the year</h2>
      <ul>
        {seasons.map((season, index) => (
          <div key={season}>
            <input
              value={inputValues[index]}
              onChange={(e) => handleInput(index, e.target.value)}
            />
            <button onClick={() => clearInput(index)}>empty</button>
          </div>
        ))}
      </ul>
    </div>
  );
}
