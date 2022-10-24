import React from 'react'
import {useRef} from 'react';
import {AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineUser, AiOutlineLock} from 'react-icons/ai'
import Link from 'next/link'
import Image from 'next/image'
import testImg from './assets/44905e73-f4ed-4bcc-9c30-d3860a2ebc69-result.png'


const login = () => {
  const userInput = useRef(null)
  const userPass = useRef(null)
  const isInput = event => {
    event.preventDefault();
    if(userInput.current.value.length >= 4 && userPass.current.value.length >= 8){
      const btnLogin = document.getElementById('btnLogin')
      btnLogin.style.background = '#d90429'
    }else{
      btnLogin.style = '@bg-gray-400'
    }
  }
  
  return (
    <header>
      <nav className='bg-primary text-white'>
        <ul className='flex items-center justify-between w-full p-3 text-3xl'>
          <li className='cursor-pointer flex items-center gap-5'>
            <Link href="./"><AiOutlineArrowLeft/></Link>
            <span>Back</span>
          </li>
          <li>Login</li>
          <li className='cursor-pointer flex items-center gap-5'>
            <span>Register</span>
            <Link href=''><AiOutlineArrowRight/></Link>
          </li>
        </ul>
      </nav>
      <main className='min-h-screen'>
        <div className='flex justify-center mt-24 mb-12'>
          <Image className='rounded-full'
          src={testImg}
          width="200"
          height="200"
          />
        </div>
        <form id='formLogin' className='flex flex-col justify-center items-center gap-10'>
          <fieldset className='flex justify-center items-center gap-5 text-xl border-b w-fit border-black'>
            <span className='text-4xl'><AiOutlineUser/></span>
            <input id='inputUser' type="text" className='black p-2 outline-none' placeholder='Username...' required ref={userInput} onChange={isInput}/>
          </fieldset>
          <fieldset className='flex justify-center items-center gap-5 text-xl border-b w-fit border-black'>
            <span className='text-4xl'><AiOutlineLock/></span>
            <input id='inputPass' type="password" className='black p-2 outline-none' placeholder='Password...' required ref={userPass} onChange={isInput}/>
          </fieldset>
          <button id='btnLogin' type="submit" className='border bg-gray-400 text-white text-2xl p-2 rounded w-1/4'>Login</button>
        </form>
      </main>
    </header>
  )
}

export default login