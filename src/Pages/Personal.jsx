import React from 'react'
import './Styles/Personal.scss'
import {user} from '../Data'

export default function Personal() {
  return (<div className='Personal' >
    <img src={user.photo} />
    <div className='personal-details' >
        <p>Hi.. My self <span>Aryan Behal</span>, living in <span>Saharanpur-UtterPradesh</span>, aspire to become  
        <span> Web Devoloper</span></p>
    </div>
  </div>)
}
