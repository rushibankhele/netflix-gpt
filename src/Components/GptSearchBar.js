import React from 'react'
import { useSelector } from 'react-redux'
import lang from '../utils/LangaugeConstants'

const GptSearchBar = () => {

    const langKey = useSelector(store => store.config.lang)

  return (
    <div className='py-[10%] flex justify-center'>
        <form className='bg-transparent rounded-lg w-1/2 grid grid-cols-12'>
            <input type='text' className='rounded-lg p-4 m-4 col-span-9' placeholder={lang[langKey].gptSearchPlaceholder} />
            <button className='p-2 m-4 bg-red-600 rounded-lg col-span-3 text-white'>🔍︎ {lang[langKey].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar