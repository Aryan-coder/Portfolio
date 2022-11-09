import './Background.css'
import {useState, useEffect} from 'react'
import { useTheme } from '../../ThemeContext'

export default function Background() {

  const [theme] = useTheme()

return (<div className={theme=='dark' ? 'background dark-theme' : 'background light-theme'} >

</div>)
}
