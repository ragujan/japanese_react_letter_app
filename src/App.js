import React, { useMemo } from 'react'

import { useState, useEffect } from "react";
function App() {
    const countProcess = (myLetters) => {
        let count = myLetters.filter((item) => item.state === states.Correct).length;
        return count;
    }
    const [myLetters, setMyLetters] = useState(randomizeArray(letterArray));
    const [typedLetter, setTypedLetter] = useState([]);
    const count = useMemo(() => myLetters.filter((item) => item.state === states.Correct).length, [myLetters]);

    const setTypedLettertoState = (id, typedLetter) => {
        setTypedLetter(
            {
                id: id,
                typedLetter: typedLetter
            }
        )
    }

    const checkLetter = (letter) => {


        if (typedLetter.typedLetter === letter.englishLetter
            && typedLetter.id === letter.id
            && letter.state == states.UK
        ) {

            changeLetterStatus(letter, states.Correct);
        } else {
            changeLetterStatus(letter, states.Wrong);
        }


    }


    const changeLetterStatus = (letter, status) => {
        setMyLetters(
            myLetters.map((item) => {
                return item.id === letter.id ? { ...item, state: status } : item
            })
        )
    }
    return (
        <>
            <div>
                <h1>Count is : {count}</h1>
            </div>
            {
                myLetters.map((item) => (
                    <div key={item.id} className='mb-4 bg-red-500'>
                        <h1>{item.jpLetter}</h1>
                        <input type="text" onChange={(e) => { setTypedLettertoState(item.id, e.currentTarget.value) }} />
                        <button onClick={() => { checkLetter(item) }} className='bg-blue-400'>Check</button>
                        <h4>state : {item.state}</h4>
                    </div>
                ))
            }
        </>
    )
}

export default App

const randomizeArray = (arr) => {
    const random = [...arr];
    for (let i = arr.length - 1; i > 0; i--) {
        //generate random index between 0 to (the length of the array-1)
        const ridx = Math.floor(Math.random() * (i + 1));
        [random[i], random[ridx]] = [random[ridx], random[i]]
    }
    return random;
}
const states = {
    "Correct": "Correct",
    "UK": "UK",
    "Wrong": "Wrong"
}

const letterArray = [
    {
        id: 1,
        jpLetter: "あ",
        englishLetter: "a",
        state: states.UK
    },
    {
        id: 2,
        jpLetter: "い",
        englishLetter: "i",
        state: states.UK
    },
    {
        id: 3,
        jpLetter: "う",
        englishLetter: "u",
        state: states.UK

    },
    {
        id: 4,
        jpLetter: "え",
        englishLetter: "e",
        state: states.UK

    },
    {
        id: 5,
        jpLetter: "お",
        englishLetter: "o",
        state: states.UK

    },
    {
        id: 6,
        jpLetter: "か",
        englishLetter: "ka",
        state: states.UK

    },
    {
        id: 7,
        jpLetter: "き",
        englishLetter: "ki",
        state: states.UK

    },
    {
        id: 8,
        jpLetter: "く",
        englishLetter: "ku",
        state: states.UK

    },
    {
        id: 9,
        jpLetter: "け",
        englishLetter: "ke",
        state: states.UK

    },
    {
        id: 10,
        jpLetter: "こ",
        englishLetter: "ko",
        state: states.UK

    }
    ,
    {
        id: 11,
        jpLetter: "さ",
        englishLetter: "sa",
        state: states.UK

    },
    {
        id: 12,
        jpLetter: "し",
        englishLetter: "si",
        state: states.UK

    },
    {
        id: 13,
        jpLetter: "す",
        englishLetter: "su",
        state: states.UK

    },
    {
        id: 14,
        jpLetter: "せ",
        englishLetter: "se",
        state: states.UK

    },
    {
        id: 15,
        jpLetter: "そ",
        englishLetter: "so",
        state: states.UK

    },
    {
        id: 16,
        jpLetter: "た",
        englishLetter: "ta",
        state: states.UK

    },
    {
        id: 17,
        jpLetter: "ち",
        englishLetter: "ti",
        state: states.UK

    },
    {
        id: 18,
        jpLetter: "つ",
        englishLetter: "tu",
        state: states.UK

    },
    {
        id: 19,
        jpLetter: "て",
        englishLetter: "te",
        state: states.UK

    },
    {
        id: 20,
        jpLetter: "と",
        englishLetter: "to",
        state: states.UK

    }
    ,
    {
        id: 21,
        jpLetter: "な",
        englishLetter: "na",
        state: states.UK

    }
    ,
    {
        id: 22,
        jpLetter: "に",
        englishLetter: "ni",
        state: states.UK

    },
    {
        id: 23,
        jpLetter: "ぬ",
        englishLetter: "nu",
        state: states.UK

    },
    {
        id: 24,
        jpLetter: "ね",
        englishLetter: "ne",
        state: states.UK

    },
    {
        id: 25,
        jpLetter: "の",
        englishLetter: "no",
        state: states.UK

    }
    ,
    {
        id: 26,
        jpLetter: "は",
        englishLetter: "ha",
        state: states.UK

    }
    ,
    {
        id: 27,
        jpLetter: "ひ",
        englishLetter: "hi",
        state: states.UK

    },
    {
        id: 28,
        jpLetter: "ふ",
        englishLetter: "hu",
        state: states.UK

    },
    {
        id: 29,
        jpLetter: "へ",
        englishLetter: "he",
        state: states.UK

    },
    {
        id: 30,
        jpLetter: "ほ",
        englishLetter: "ho",
        state: states.UK

    }
    ,
    {
        id: 31,
        jpLetter: "ま",
        englishLetter: "ma",
        state: states.UK

    }
    ,
    {
        id: 32,
        jpLetter: "み",
        englishLetter: "mi",
        state: states.UK

    },
    {
        id: 33,
        jpLetter: "む",
        englishLetter: "mu",
        state: states.UK

    },
    {
        id: 34,
        jpLetter: "め",
        englishLetter: "me",
        state: states.UK

    },
    {
        id: 35,
        jpLetter: "も",
        englishLetter: "mo",
        state: states.UK

    }
    ,
    {
        id: 36,
        jpLetter: "や",
        englishLetter: "ya",
        state: states.UK

    }
    ,
    {
        id: 37,
        jpLetter: "ゆ",
        englishLetter: "yi",
        state: states.UK

    },
    {
        id: 38,
        jpLetter: "よ",
        englishLetter: "yo",
        state: states.UK

    },
    {
        id: 39,
        jpLetter: "ら",
        englishLetter: "ra",
        state: states.UK

    },
    {
        id: 40,
        jpLetter: "り",
        englishLetter: "ri",
        state: states.UK
    }
    ,
    {
        id: 41,
        jpLetter: "る",
        englishLetter: "ru",
        state: states.UK

    },
    {
        id: 42,
        jpLetter: "れ",
        englishLetter: "re",
        state: states.UK

    }
    ,
    {
        id: 43,
        jpLetter: "ろ",
        englishLetter: "ro",
        state: states.UK

    }
    ,
    {
        id: 44,
        jpLetter: "わ",
        englishLetter: "wa",
        state: states.UK

    },
    {
        id: 45,
        jpLetter: "ゐ",
        englishLetter: "wi",
        state: states.UK

    },
    {
        id: 46,
        jpLetter: "ゑ",
        englishLetter: "we",
        state: states.UK

    },
    {
        id: 47,
        jpLetter: "を",
        englishLetter: "wo",
        state: states.UK
    }
    ,
    {
        id: 48,
        jpLetter: "ん",
        englishLetter: "n",
        state: states.UK
    }
]
