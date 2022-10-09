import React from 'react'
import '../App.css';
import imgLogo from '../imags/imgLogo.png'
import Items from './Items';
import {Link} from "react-router-dom";
export default function Home() {
  return (
 <>
 <div className='container'>
   <div className='imageHolder'>
      <img src={imgLogo} alt="pig"/>  
   </div>
   <div>
    <button className='getBtn' >
      <Link to='Items'>Get Started</Link></button>
  
    </div>

 </div>
 </>
  )
}
