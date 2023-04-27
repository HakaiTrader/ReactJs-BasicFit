import React from 'react';
import "./Header.css"
import NavBar from '../Navbar/Navbar'
import Pubtop from '../Pubtop/Pubtop'

export default function Header() {
  return (
    <div className='Header'>
      <Pubtop />
      <NavBar />
    </div>
  )
}
