import {useState, useContext, createContext} from 'react'

const ThemeContext = createContext()

export const useTheme=()=>useContext(ThemeContext).Theme

export default function ThemeProvider({children}) {

    const [theme, setTheme] = useState('dark')

  return (<ThemeContext.Provider value={{Theme: [theme, setTheme]}}>
        {children}
  </ThemeContext.Provider>)
}
