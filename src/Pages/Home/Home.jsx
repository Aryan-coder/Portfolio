import React from 'react'
import './Home.css'
import { useTheme } from '../../ThemeContext'
import {BsGithub, BsInstagram, BsLinkedin} from 'react-icons/bs'
import {FiMail} from 'react-icons/fi'

export default function Home() {

  const [theme] = useTheme()
  //<div className='img' style={{animationDelay: '6s'}} ></div> 

  return (<div className='Home' style={theme=='dark' ? {color: 'white'} : {color: 'black'}} >
 
  <div className='container'  >
  <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png' />
  <div style={{display: 'flex', flexDirection: 'column'}} >
<div className='greatings' >
      <span  >Hello</span>
      <span  >, My self</span>
  </div>
  <span className='name'   >Aryan Behal</span>
  <span className='profession' >Web Devoloper</span>
  <div className='icons' >
    <i><BsGithub/></i>
    <i><BsLinkedin/></i>
    <i><FiMail/></i>
    <i><BsInstagram/></i>
  </div>
  </div>
</div>
  

 
  </div>)
}
