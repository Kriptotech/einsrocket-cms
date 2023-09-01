import React, { useState } from 'react'
import MyContext from './MyContext'
const CreateContext = ({ children }) => {
  const [mobile, setMobile] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [currentRoute, setCurrentRoute] = useState('')

  return (
    <MyContext.Provider
      value={{
        mobile,
        setMobile,
        currentRoute,
        setCurrentRoute,
        darkMode,
        setDarkMode
      }}
    >
      {children}
    </MyContext.Provider>
  )
}

export default CreateContext
