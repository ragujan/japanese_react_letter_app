import React, { useState, useMemo } from "react";

function App() {
  const [myLetters, setMyLetters] = useState(randomizeArray(letterArray));

  const checkLetter = (letterItem, typedLetter) =>
    changeLetterState(
      letterItem,
      letterItem.englishLetter === typedLetter.toLowerCase()
        ? "Correct"
        : "Wrong"
    );

  const changeLetterState = (letterItem, stateValue) =>
    setMyLetters(
      myLetters.map((item) =>
        item.id === letterItem.id
          ? {
              ...item,
              state: stateValue
            }
          : item
      )
    );
    
  const count = useMemo(
    () => myLetters.filter((letter) => letter.state === "Correct").length,
    [myLetters]
  );

  return (
    <>
      <div>
        <h1>Count is : {count}</h1>
      </div>
      {myLetters.map((item) => (
        <LetterEntry key={item.id} letter={item} submit={checkLetter} />
      ))}
    </>
  );
}

const LetterEntry = ({ letter, submit }) => {
  const [value, setValue] = useState("");
  return (
    <div className="w-56 my-5 ml-10 bg-slate-400">
      <h1>{letter.jpLetter}</h1>
      <input
        id={`typedWord${letter.id}`}
        type="text"
        onChange={(e) => setValue(e.currentTarget.value)}
      />
      <button
        onClick={() => {
          submit(letter, value);
        }}
        className="bg-blue-500"
      >
        Check
      </button>
      <h1>Result : {letter.state}</h1>
    </div>
  );
};

export default App;

const randomizeArray = (arr) => {
  const random = [...arr];
  for (let i = random.length - 1; i > 0; i--) {
    const ridx = Math.floor(Math.random() * (i + 1));
    [random[i], random[ridx]] = [random[ridx], random[i]];
  }
  return random;
};

const letterArray = [
  {
    id: 1,
    jpLetter: "あ",
    englishLetter: "a",
    state: "uk"
  },
  {
    id: 2,
    jpLetter: "い",
    englishLetter: "i",
    state: "uk"
  },
  {
    id: 3,
    jpLetter: "う",
    englishLetter: "u",
    state: "uk"
  }
];
