"use client"

import { useTheme } from 'next-themes'
import React, { useState, useEffect } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'

const ThemeButton = () => {

  const {theme, setTheme} = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(()=>{
    setMounted(true);
  },[])

  if(!mounted){
    return null;
  }

  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>

      { theme === "dark" ? ( 
        <FaMoon className="h-5 w-5 text-orange-300" />
      ): (
        <FaSun className="h-5 w-5 text-slate-800" /> 
      )}

    </button>
  )
}

export default ThemeButton