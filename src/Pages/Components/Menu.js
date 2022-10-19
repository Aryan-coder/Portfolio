import React, {useEffect, useState} from 'react'
import './Styles/Menu.scss'
import { IoBuildOutline} from "react-icons/io5";
import { BsFillPersonFill} from "react-icons/bs";
import { FaCode} from "react-icons/fa";
import { CgWorkAlt} from "react-icons/cg";
import { BsBook} from "react-icons/bs";

export default function Menu() {

 const [style, setStyle] = useState('side')

 const handleClick=()=>{
    
 }

  return (<div className={style+'-menu-area'} >
     <div className={style+'-menu'} >
            <button onClick={()=>handleClick('Personal')} className='option' ><BsFillPersonFill/><span className='text' >Personal Details</span></button>
            <button onClick={()=>handleClick('Experience')} className='option' ><CgWorkAlt/><span className='text' >Work Experience</span></button>
            <button onClick={()=>handleClick('Projects')} className='option' ><IoBuildOutline/> <span className='text' >Projects</span></button>
            <button onClick={()=>handleClick('Education')} className='option' ><BsBook/><span className='text' >Education</span></button>
            <button onClick={()=>handleClick('Skills')} className='option' ><FaCode/><span className='text' >Skills</span></button>
        </div>
  </div>)
}
