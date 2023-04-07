<div className='grid grid-cols-2 gap-4 px-5 md:grid-cols-4'>
{myLetters.map((letter) => {
  // letter items divs each
  return (
    <div className="flex flex-col px-4 py-2 rounded-lg bg-mainDark" key={letter.englishLetter}>
      <h1 className='flex items-center justify-center pb-4 text-3xl font-semibold text-white'>
        {letter.jpLetter}
      </h1>
      {/* input container */}
      <div className='flex flex-col gap-6 md:flex-row md:gap-0'>

        <input type="text" className='flex-grow px-4 py-2 font-semibold border border-gray-300 rounded-md sm:rounded-r-none hover:border-violet-400 focus:outline-none ' id="inputLetter" onChange={(event) => { setEnglishLetter(event.target.value) }} />
        <button className='px-4 py-2 font-semibold text-white rounded-md sm:rounded-l-none bg-thirdDark' onClick={() => {
          checkJapaneseLetter(letter);
        }} >Check</button>

      </div>
      <br />
      <div className='flex items-center justify-center pb-4'>
        <h3 className='text-2xl text-white'>Result : {letter.state} </h3>
      </div>
    </div>

  )
},)
}
</div>