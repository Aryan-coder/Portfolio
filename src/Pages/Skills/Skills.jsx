import React from 'react'
import './Skills.css'
import {AiFillHtml5} from 'react-icons/ai'
import {DiCss3, DiJqueryLogo, DiSass} from 'react-icons/di'
import {BsFillBootstrapFill} from 'react-icons/bs'
import {SiJavascript, SiReact} from 'react-icons/si'
import {TbBrandFirebase} from 'react-icons/tb'

export default function Skills() {
  return (<div className='Skills' >
    <h1 className='title' >Skills</h1>
    <div className='skills'>
      <div className='skill' >
        <i style={{animationDelay: '.5s'}} ><AiFillHtml5/></i>
        <span>HTML5</span>
      </div>
      <div className='skill' >
        <i style={{animationDelay: '.8s'}}><DiCss3/></i>
        <span>CSS3</span>
      </div>
      <div className='skill' >
        <i style={{animationDelay: '1.1s'}}><DiSass/></i>
        <span>SASS</span>
      </div>
      <div className='skill' >
        <i style={{animationDelay: '1.4s'}}><BsFillBootstrapFill/></i>
        <span>Bootstrap</span>
      </div>
      <div className='skill' >
        <i style={{animationDelay: '1.7s'}}><SiJavascript/></i>
        <span>Javascript</span>
      </div>
      <div className='skill' >
        <i style={{animationDelay: '2s'}}><DiJqueryLogo/></i>
        <span>Jquery</span>
      </div>
      <div className='skill' >
        <i style={{animationDelay: '2.3s'}} ><SiReact/></i>
        <span>React</span>
      </div>
      <div className='skill' >
        <i style={{animationDelay: '2.6s'}} ><TbBrandFirebase/></i>
        <span>Firebase</span>
      </div>
    </div>
  </div>)
}
