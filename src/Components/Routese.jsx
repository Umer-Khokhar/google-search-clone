import React from 'react'
import { Results } from './Results'
import { Navbar } from './Navbar'
import { Footer } from './Footer'

import { Route, Navigate, Routes } from 'react-router-dom'


export const Routese = () => {
  return (
    <div>
        <Routes>
          <Route exact path="/" element={<Navigate to="/search" />} />
          <Route path='/search' element={<Results />} />
          <Route path='/images' element={<Results />} />
          <Route path='/news' element={<Results />} />
          <Route path='/videos' element={<Results />} />
        </Routes>
    </div>
  )
}
