import React from 'react'
import Image from 'next/image'

export default function Header() {
  return (
    <div>
      <header className="text-gray-600 outline border-black bg-blue-400 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
  <div className="logo">
            <Image src="/logo.jpg" alt="LOGO" height={100} width={100} />
          </div>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <a className="mr-5 hover:text-gray-900" href='/'>HOME</a>
      <a className="mr-5 hover:text-gray-900" href='/about'>ABOUT</a>
      <a className="mr-5 hover:text-gray-900" href='/portfolio'>PORTFOLIO</a>
      <a className="mr-5 hover:text-gray-900" href='/contact'>CONTACT</a>
    </nav>
    
  </div> 
</header>
</div>
  )
}