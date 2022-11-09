import React from 'react'
import './Menu.css'
import { IoBuildOutline} from "react-icons/io5";
import { BsPerson, BsCodeSlash} from "react-icons/bs";
import { FaCode} from "react-icons/fa";
import { CgWorkAlt} from "react-icons/cg";
import { BsBook} from "react-icons/bs";
import {AiOutlineHome} from "react-icons/ai"
import {IoMailOutline} from "react-icons/io5"


export default function Menu() {
  return (<div className='Menu' >
  <button><AiOutlineHome/><span className='button-description'>Home</span></button>
    <button><BsPerson/><span className='button-description'>Personal</span></button>
    <button><BsBook/><span className='button-description'>Education</span></button>
    <button><CgWorkAlt/><span className='button-description'>Experience</span></button>
    <button><IoBuildOutline/><span className='button-description'>Projects</span></button>
    <button><BsCodeSlash/><span className='button-description'>Skills</span></button>
    <button><IoMailOutline/><span className='button-description'>Contact</span></button>
  </div>)
}
