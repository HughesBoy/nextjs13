"use client"
import React from 'react'
import ThemeButton from './ThemeButton';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
const Header = () => {

  const currentRoute = usePathname();

  return (
    <header className="header">
      <nav className="nav-container">
        <ul className="list-container">
          <li>
            <Link 
              href="/"
              className={currentRoute === "/" ? "active-link" : "non-active-link"}  
              >home</Link>
            <Link 
              href="/about"
              className={currentRoute === "/about" ? "active-link" : "non-active-link"}
            >about</Link>
            <Link 
              href="/contact"
              className={currentRoute === "/contact" ? "active-link" : "non-active-link"}
            >contact</Link>
            <Link 
              href="/work"
              className={currentRoute === "/work" ? "active-link" : "non-active-link"}
            >work</Link>
          </li>
        </ul>
        <ThemeButton />
      </nav>
            
    </header>


    
  )
}

export default Header

