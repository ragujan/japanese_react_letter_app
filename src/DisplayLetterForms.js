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
            <div className='grid grid-cols-2 py-3 md:grid-cols-3 lg:grid-cols-4 px-7 gap-x-5 gap-y-3'>
                {props.letterArray.map((letter) => {
                    // letter items divs each
                    return (
                        <div className="flex flex-col p-5 rounded-[8px] bg-secondaryDark" key={letter.englishLetter}>
                            <div>
                                <h1 className='pb-6 text-3xl font-bold text-center md:text-4xl lg:text-5xl'>
                                    {letter.jpLetter}
                                </h1>
                            </div>                            {/* input container */}
                            <div className='flex flex-col md:flex-row gap-x-4 gap-y-2 md:gap-y-0'>
                                <input type="text" className='rounded-lg md:w-[80px] w-auto text-md md:text-2xl pl-4 text-white bg-thirdDark focus:outline-none py-2' id="inputLetter" onChange={(event) => { props.setEnglishLetter(event.target.value) }} />

                                <button className='flex-grow md:px-2 rounded-lg bg-buttonColor text-white font-semibold lg:px-3 md:w-[20px] lg:w-[120px] py-2  md:text-2xl left'  onClick={() => {
                                    props.checkJapaneseLetter(letter);
                                }} >
                                    Check
                                </button>
                            </div>

                            <div className='pt-4'>
                                <h3 className='text-2xl font-bold text-center md:text-left'>Result : {letter.state} </h3>
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
