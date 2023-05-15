"use client"
import Image from 'next/image';
import React, { useState } from 'react'
import close from "../../assets/close.png";
import github from "../../assets/github.png"

const Navbar = () => {
    const [hamburger, setHamburger] = useState(false);
    const [colorMode, setColorMode] = useState(false);

    const hamburgerHandler = () => {
        setHamburger(!hamburger)
        console.log(hamburger);
    }

    const colorHandler = () => {
        setColorMode(!colorMode);
    }
    return (
        <nav className='container max-w-6xl bg-blue-600 mx-auto flex items-center pl-5 relative justify-between'>
            {/* logo */}
            <a href="#">
                <span className="after:content-['<>'] font-serif text-2xl font-bold after:text-slate-50"></span>
                <span className="after:content-['</>'] font-serif text-2xl font-bold after:text-slate-50 text-slate-50">🎁 Portfolio</span>
            </a>
            {/* humberger-menu */}
            <div className='ml-auto cursor-pointer md:hidden' onClick={hamburgerHandler}>
                {
                    hamburger ?
                        <div className='p-5'>
                            <Image src={close} className='w-7' />
                        </div>
                        :
                        <div className='flex flex-col gap-2 p-5 ' >
                            <span className='w-8 inline-block h-1 bg-slate-50'></span>
                            <span className='w-8 inline-block h-1 bg-slate-50'></span>
                            <span className='w-8 inline-block h-1 bg-slate-50'></span>
                        </div>
                }

            </div>
            {/* middle navbar */}

            <ul className='md:flex hidden md:gap-5'>
                <li className=' py-5'>
                    <a href="#" className=' text-2xl text-slate-50'>Home</a>
                </li>

                <li className='py-5'>
                    <a href="#" className=' text-2xl text-slate-50'>Portfolio</a>
                </li>

                <li className=' py-5'>
                    <a href="#" className=' text-2xl text-slate-50'>Contact</a>
                </li>
            </ul>

            {/* github */}

            <ul className='md:flex justify-center items-center hidden gap-3 pr-5'>
                <li onClick={colorHandler}>
                    {
                        colorMode ?
                            <a href="#" className='text-4xl'>☀</a> :
                            <a href="#" className='text-2xl'>🌙</a>

                    }
                </li>
                <li>
                    <a href="#">
                        <Image src={github} className='w-7'/>
                    </a>
                </li>
            </ul>



            {/* navigation box */}

            <ul className={` absolute mt-60 flex flex-col gap-3  border p-4 rounded-lg right-8 ${hamburger ? "block" : "hidden"} drop-shadow-lg bg-blue-600 text-slate-50`} >
                <li>
                    <a href="#" className='text-2xl hover:text-slate-200'>Home</a>
                </li>

                <li>
                    <a href="#" className='text-2xl hover:text-red-500'>Portfolio</a>
                </li>

                <li>
                    <a href="#" className='text-2xl hover:text-red-500'>Contact</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;