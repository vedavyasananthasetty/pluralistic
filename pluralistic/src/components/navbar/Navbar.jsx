import React from 'react'
import "./Navbar.css";
import logo from '../../assets/img20pl.svg';
import { MenuData } from './MenuData';
const Navbar = () => {
  return (
    
    <nav className='bg-[#e23aaad9] shadow-2xl rounded-lg h-20 w-5/6 fixed mt-4 mr-8 ml-8' >
    <div className='flex items-center font-medium justify-around '>
        <h1>Pluralistic</h1>
        <img src={logo} className='md:cursor-pointer h-14 rounded-full ' alt="logo"></img>
        <ul className='md:flex hidden uppercase items-center gap-8 font-[poppins]'>
        {MenuData.map((item, index) =>{
            return(

            <li key={index} className='md:flex hidden py-7 px-3 inline-block'>
                <a href={item.url}
                >{item.i}{item.title}</a>
               
            </li>
            )
        })}
        </ul>
        </div>
        </nav>
    
  )
}

export default Navbar