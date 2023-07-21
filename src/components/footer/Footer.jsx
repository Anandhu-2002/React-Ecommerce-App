import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer className='footer'>
       &copy; Infinity {new Date().getFullYear()}
    </footer>
  )
}

export default Footer