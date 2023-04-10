import React from 'react'
import { useState, useEffect } from "react";

function DisplayLettersProper(props) {

    const [typedLetter, setTypedLetter] = useState([]);
    const [inputValues, setInputValues] = useState(
        new Array(props.myLetters.length).fill("")
    )

    const onChangeSetInputValues = (value, index) => {
        setInputValues(
            (previousValues) => {
                let newValues = [...previousValues];
                console.log(newValues)
                newValues[index] = value;
                return newValues;
            }
        )
    }

    const clearInput = (index) => {
        setInputValues(
            (previousValues) => {
                let newValues = [...previousValues];
                newValues[index] = "";
                console.log(newValues)
                return newValues;
            }
        )
    }

    const setTypedLettertoState = (id, typedLetter, index) => {
        setTypedLetter(
            {
                id: id,
                typedLetter: typedLetter
            }
        )
        onChangeSetInputValues(typedLetter, index);

    }

    const checkLetter = (letter, index) => {
        if (typedLetter.typedLetter === letter.englishLetter
            && typedLetter.id === letter.id
            && letter.state == states.UK
        ) {

            changeLetterStatus(letter, states.Correct);
        } else {
            changeLetterStatus(letter, states.Wrong);
        }
        clearInput(index)
    }


    const changeLetterStatus = (letter, status) => {
        props.setMyLetters(
            props.myLetters.map((item) => {
                return item.id === letter.id ? { ...item, state: status } : item
            })
        )
    }


    return (
        <div className='grid grid-cols-1 gap-4 px-4 py-4 bg-mainDark md:grid-cols-2 lg:grid-cols-3 '>
            {
                props.myLetters.filter((item) => item.state === states.UK || item.state === states.Wrong).map((item, index) => (

                    // 'text-center rounded-md bg-thirdDark'
                    <div key={item.id} className={item.state === states.Wrong ? "text-center rounded-md bg-red-400" : "text-center rounded-md bg-thirdDark"}>
                        <h1 className={item.state === states.Wrong ? 'py-4 text-6xl font-bold text-thirdDark' : 'py-4 text-6xl font-bold text-white'}>{item.jpLetter}</h1>
                        <div className='flex flex-row items-center justify-center gap-x-4'>
                            <>
                                {
                                    item.state === props.states.Wrong ?

                                        <>
                                            <input
                                                className='py-2 pl-3 font-bold text-center text-white rounded-md focus:outline-emerald-600 focus:outline-4 bg-input'
                                                type="text"
                                                value={item.englishLetter}
                                                onChange={(e) => {}
                                                }
                                            />
                                            <button onClick={() => { checkLetter(item, index); }} className='px-3 py-2 font-bold text-white bg-blue-400 rounded-md'>
                                                Correct
                                            </button>
                                        </>
                                        :
                                        <>
                                            <input
                                                className='py-2 pl-3 text-center text-white rounded-md focus:outline-emerald-600 focus:outline-4 bg-input'
                                                type="text"
                                                value={item.state === props.states.Wrong ? item.englishLetter : inputValues[index]}
                                                onChange={(e) => {
                                                    setTypedLettertoState(item.id, e.currentTarget.value, index);

                                                }
                                                }
                                            />
                                            <button onClick={() => { checkLetter(item, index); }} className='px-3 py-2 font-bold text-white bg-blue-400 rounded-md'>
                                                Check
                                            </button>
                                        </>


                                }

                                
                            </>
                        </div>
                        <h4 className={item.state === states.Wrong ? 'py-2 text-2xl font-bold text-thirdDark' : 'py-2 text-2xl font-bold text-lightBlude'}>state : {item.state}</h4>
                    </div>
                ))
            }
        </div>
    )
}

export default DisplayLettersProper


const states = {
    "Correct": "Correct",
    "UK": "UK",
    "Wrong": "Wrong"
}