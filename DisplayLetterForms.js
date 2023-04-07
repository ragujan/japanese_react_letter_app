import React from 'react'

function DisplayLetterForms(props) {

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

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 px-7 gap-x-5'>
                {props.letterArray.map((letter) => {
                    // letter items divs each
                    return (
                        <div className="flex flex-col p-5 sm:bg-pink-500 md:bg-red-900" key={letter.englishLetter}>
                            <div>
                                <h1 className='pb-4 text-4xl font-bold text-center'>
                                    {letter.jpLetter}
                                </h1>
                            </div>                            {/* input container */}
                            <div className='flex flex-col bg-red-700 md:flex-row gap-x-4'>
                                <input type="text" className='flex-grow w-[100px] text-2xl pl-4 text-black bg-yellow-400 ' id="inputLetter" onChange={(event) => { props.setEnglishLetter(event.target.value) }} />

                                <button className='flex-grow px-3 bg-green-500 md:text-2xl lg:text-3xl left' onClick={() => {
                                    props.checkJapaneseLetter(letter);
                                }} >Check
                                
                                </button>
                            </div>

                            <div className='pt-4'>
                                <h3 className='text-2xl font-bold'>Result : {letter.state} </h3>
                            </div>
                        </div>

                    )
                },)
                }
            </div>
        </div>
    )
}

export default DisplayLetterForms
