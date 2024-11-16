import React from 'react'

const ThemeContext = React.createContext({
  isDarkTheme: false,
  toggleTheme: isDarkTheme => {},
})

export default ThemeContext
