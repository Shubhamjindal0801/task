import React from 'react'
import './styles.css'
import { useNavigate } from 'react-router'
import img1 from '../../assets/1.jpg'

function DefaultPage() {
  const navigate = useNavigate()
  return (
    <div className='dp-container'>
        <div className='left-div'>
            <h1>PDF Answers Unlocked</h1>
            <h5>Unlock the Wisdom of Documents through Chat.</h5>
            <button onClick={()=>{navigate('/upload-pdf-get-answer')}}>Get Started</button>
        </div>
        <div className='right-div'>
            <img src={img1} width='400px' />
        </div>
    </div>
  )
}

export default DefaultPage