import React from 'react'

import { useState, useEffect } from "react";
function DisplayLetters(props) {

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
        , 
        {
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
        }, 
        {
            id: 5,
            jpLetter: "お",
            englishLetter: "o",
            state: "uk",
        }, 
        {
            id: 6,
            jpLetter: "か",
            englishLetter: "ka",
            state: "uk",
        }, 
        {
            id: 7,
            jpLetter: "き",
            englishLetter: "ki",
            state: "uk",
        }
        , 
        {
            id: 8,
            jpLetter: "く",
            englishLetter: "ku",
            state: "uk",
        }
    ])

     useEffect(()=>{
        // alert(props.myLetters.length)
     })


    let checkLetter = (letterItem, typedLetter) => {
        if (letterItem.englishLetter === typedLetter) {
            changeLetterState(letterItem, "Correct");

        } else {

            changeLetterState(letterItem, "Wrong");
        }
        // setTypedLetter("");
    }
    let changeLetterState = (letterItem, stateValue) => {
        const replacingLetterItem =
        {
            id: letterItem.id,
            jpLetter: letterItem.jpLetter,
            englishLetter: letterItem.englishLetter,
            state: stateValue,
        }

        let letters = myLetters.map((item) => {
            return item.id === letterItem.id ? replacingLetterItem : item;
        })
        setMyLetters(letters);


        myLetters.map((item) => {
            if (item.state === "uk" && stateValue === "Correct" && item.id === letterItem.id) {
                let count = props.count;
                count++;

                props.setCount(count)
            }
        })


    }
    return (
        <>
            {myLetters.map((item) => {
                return (


                    <div key={item.id.toString()} className='w-56 my-5 ml-10 bg-slate-400'>
                        <h1 key={item.jpLetter.toString()} >{item.jpLetter}</h1>
                        <input key={item.englishLetter.toString()} id={`typedWord${item.id}`} type="text" />
                        <button key={item.toString()} onClick={() => { checkLetter(item, document.querySelector(`#typedWord${item.id}`).value) }} className='bg-blue-500'>Check</button>
                        <h1 key={item.id.toString()} >Result : {item.state}</h1>

                    </div>
                )
            })}
        </>
    )
}

export default DisplayLetters
