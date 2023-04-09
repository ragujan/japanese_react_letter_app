import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import DisplayLetterForms from './DisplayLetterForms';

function App() {
  const [englishLetter, setEnglishLetter] = useState("");
  const [selectedLetterItem, setSelectedLetterItem] = useState();
  const [score, setScore] = useState(0);
  const [myLetters, setMyLetters] = useState([
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
    , {
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
  const checkJapaneseLetter = (letter) => {

    let state = "";
    let japaneseEnglishLetter = letter.englishLetter;

    if (japaneseEnglishLetter === englishLetter) {
      state = "Correct";
    } else {
      state = "Wrong"

    }

    changeLetterCorrectionState(letter, state)
    setSelectedLetterItem()

  }

  const changeLetterCorrectionState = (letterItem, value) => {

    const replacingLetterItem =
    {
      id: letterItem.id,
      jpLetter: letterItem.jpLetter,
      englishLetter: letterItem.englishLetter,
      state: value,
    }

    let updatedLetters = myLetters.map((item) => {

      return item.id === letterItem.id ? replacingLetterItem : item

    }
    );
    setMyLetters(updatedLetters);
    //set score 
    myLetters.map((item) => {
      if (item.state === "uk" && value === "Correct" && item.id === letterItem.id) {
        setScore(score + 1);
      }
    })
  }



  return (

    <>
      <div className='h-screen text-white bg-mainDark' >

        <div className='px-5 py-5 text-center'>
          <h1 className='text-4xl font-bold'>Score is {score}</h1>
        </div>
        {/* letter item div */}

        <DisplayLetterForms letterArray={myLetters} checkJapaneseLetter={checkJapaneseLetter} setEnglishLetter={setEnglishLetter} />
      </div>
    </>

  )
}

export default App;
