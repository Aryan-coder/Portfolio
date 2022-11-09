import './Projects.css'
import {SiJavascript, SiReact} from 'react-icons/si'
import {DiCss3, DiJqueryLogo, DiSass} from 'react-icons/di'
import {AiFillHtml5} from 'react-icons/ai'
import {TbBrandFirebase} from 'react-icons/tb'
import chatappImg from './chatapp.png'


export default function Projects() {
  return (<div className='Projects' >
  <h1>Projects</h1>
    <div className='project' >
        <img src={chatappImg} />
    <div className='title' >
    <span className='name' >Chatapp</span>
            <div className='icons' >
                <i><AiFillHtml5/></i>
                <i><DiSass/></i>
                <i><SiJavascript/></i>
                <i><SiReact/></i>
                <i><TbBrandFirebase/></i>
            </div>
    </div>
        
    </div>
  </div>)
}
