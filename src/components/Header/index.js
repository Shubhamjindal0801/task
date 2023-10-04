import React from 'react'
import './header.css'
import { useNavigate } from 'react-router'

function Header({prop}) {
  const navigate = useNavigate()
  return (
    <div>
        <header>
            <h1 onClick={()=>{navigate('/')}}>Doc Chat<span><p>.</p></span></h1>
            {
              prop ? <button onClick={()=>{navigate('/upload-pdf-get-answer')}}>Get Started</button>:<></>
            }
        </header>
    </div>
  )
}

export default Header