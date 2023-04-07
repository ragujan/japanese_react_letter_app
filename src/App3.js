import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";
import DisplayLetterForms from './DisplayLetterForms';
import DisplayLetters from './App';

function App() {

  const [count, setCount] = useState(0);
  const [myLetters,setMyLetters] = useState([
    {
        id: 1,
        jpLetter: "あ",
        englishLetter: "a",
        state: "uk",
    }
    ,
    {
        id: 2,
        jpLetter: "い",
        englishLetter: "i",
        state: "uk",
    }
    , {
        id: 3,
        jpLetter: "う",
        englishLetter: "u",
        state: "uk",
    },
    {
        id: 4,
        jpLetter: "え",
        englishLetter: "e",
        state: "uk",
    }, {
        id: 5,
        jpLetter: "お",
        englishLetter: "o",
        state: "uk",
    }, {
        id: 6,
        jpLetter: "か",
        englishLetter: "ka",
        state: "uk",
    }, {
        id: 7,
        jpLetter: "き",
        englishLetter: "ki",
        state: "uk",
    }
    , {
        id: 8,
        jpLetter: "く",
        englishLetter: "ku",
        state: "uk",
    }
])
  const randomize = (arr) => {
    let arrLength = arr.length;
    let randomIndex;
    while (arrLength != 0) {
      randomIndex = Math.floor(Math.random() * arrLength);
      console.log(randomIndex)
      arrLength--;
      [arr[arrLength], arr[randomIndex]] = [arr[randomIndex], arr[arrLength]];
    }
    return arr;

  }

  useEffect(()=>{
    // let shufledLetters = randomize(myLetters);
    // // alert(shufledLetters[0].id);
    // setMyLetters(shufledLetters)
    // setMyLetters(randomize(myLetters))
  })
  return (

    <>
      <div>
        <h1>Count : {count}</h1>
      </div>
      <DisplayLetters count={count} myLetters={myLetters} setMyLetters={setMyLetters} setCount={setCount} />
    </>

  )
}

export default App;
