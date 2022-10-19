import React from 'react'
import {AiFillHtml5} from 'react-icons/ai'
import {IoLogoCss3, IoLogoSass} from 'react-icons/io'
import {SiBootstrap, SiJavascript, SiJquery, SiReact} from 'react-icons/si'
import './Styles/Skills.scss'


export default function Skills() {

  return (<div className='Skills' >
    <div className='skill' ><AiFillHtml5/><span>HTML5</span></div>
    <div className='skill' ><IoLogoCss3/><span>CSS3</span></div>
    <div className='skill' ><IoLogoSass/><span>SASS</span></div>
    <div className='skill' ><SiBootstrap/><span>Bootstrap</span></div>
    <div className='skill' ><SiJavascript/><span>Javascript</span></div>
    <div className='skill' ><SiJquery/><span>JQueary</span></div>
    <div className='skill' ><SiReact/><span>React</span></div>
  </div>)
}
