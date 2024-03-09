import React from 'react';
import { useResultContext } from '../Context/ResultContextProvider'

export const Input = () => {
    const { setSearchTerm, searchTerm, getResults } = useResultContext();
    function onKeyDown(e) {
      if (e.key === "Enter") {
        getResults(`/?query=${searchTerm}&limit=20&related_keywords=true`);
      }
    }
  return (
    <div className='m-4'>
         <input type="text" placeholder='Search Google' className='p-2 m-2 min-w-96 rounded-full outline-none' autoComplete="off" autoFocus value={ searchTerm } onChange={ (e) => setSearchTerm(e.target.value) } onKeyDown={onKeyDown}  />
    </div>
  )
}
