import React from 'react'
import {user} from '../../Data'
import { CgMail, CgInstagram } from "react-icons/cg";
import { AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";
import './Styles/Profile.scss'

export default function Profile() {
  return (<div className='profile'>
   
    <span className='name' >{user.name}</span>
    <span className='job' >{user.job}</span>
    <div className='icons' >
        <CgMail/>
        <AiFillLinkedin/>
        <AiOutlineGithub/>
        <CgInstagram/>
    </div>
  </div>)
}
