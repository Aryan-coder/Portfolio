import { useTheme } from "../../ThemeContext"
import {FaRegMoon} from 'react-icons/fa'
import {ImSun} from 'react-icons/im'
import './ThemeButton.css'

export default function Theme() {

  const [theme, setTheme] = useTheme()

  const handleTheme=()=>{
    setTheme(theme=='dark'?'light':'dark')
  }

  return (<div className='Theme-button' >
    <button onClick={e=>handleTheme()} >{theme=='dark' ? <FaRegMoon/>: <ImSun/>}</button>
  </div>)
}
