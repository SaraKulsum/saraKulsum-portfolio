import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './NavBar.css'
const NavBar = () => {
  const navigate =  useNavigate()
  

   
   const handleAbout = ()=>{
   
   
  
      navigate("/about")
      document.querySelector('.selector_bg').setAttribute('data-active', "about"); 
      document.querySelector('.test').setAttribute('data-active', "about"); 
   
   
   }
   const handlework = ()=>{
    
    document.querySelector('.selector_bg').setAttribute('data-active', "work"); 
    document.querySelector('.test').setAttribute('data-active', "work"); 

     navigate("/") 
   }
   const handleContact = () =>{
    document.querySelector('.selector_bg').setAttribute('data-active', "contact"); 
    document.querySelector('.test').setAttribute('data-active', "contact"); 

     navigate("/contact") 
   }
  return (
    <>
     <div className='navContainer fixed z-50  w-[100vw] bg-transparent top-0   font-[500] text-white'>
          <div className='flex justify-between items-center mx-2 py-4'>
          <div className='credit-top'>
                <span className='capitalize pl-3'>©sara kulsum</span>
            </div>
            <div className='links p-3'>
                <ul className='linksContainer flex bg-transparent backdrop:blur-lg relative gap-2 border border-gray-600 rounded-full p-[8px] '>
                    <li onClick={()=>handlework()} className='work capitalize z-10  p-3 transition-all font-normal rounded-full hover:cursor-pointer   flex justify-center'>
                      work           
                    </li>
                    <li onClick={()=>handleAbout()} className='about z-10   capitalize p-3  hover:cursor-pointer  flex justify-center  rounded-full'>
                      about
                    </li>
                    <li onClick={()=>handleContact()} className='contact z-10   capitalize p-3  hover:cursor-pointer   flex justify-center rounded-full'>
                      contact
                    </li>
                <div  data-active = "work" className='test bg-white absolute top-0  rounded-full h-[4px] w-[10%]'></div>
                <div data-active = "work" className='selector_bg  absolute mx-[8px] rounded-full h-[75%] w-[60px] top-2 left-0 bg-gradient-to-b from-[#6b6b6b] to-transparent'></div>
                </ul>
            </div>
       
          </div>
            
     </div>
    </>
  )
}

export default NavBar