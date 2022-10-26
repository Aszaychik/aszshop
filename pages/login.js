import React from 'react'
import {useRef} from 'react';
import {AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineUser, AiOutlineLock, AiOutlineGoogle, AiOutlineFacebook, AiOutlineWhatsApp} from 'react-icons/ai'
import Link from 'next/link'
import Image from 'next/image'
import testImg from './assets/44905e73-f4ed-4bcc-9c30-d3860a2ebc69-result.png'


const login = () => {
  const userInput = useRef(null)
  const userPass = useRef(null)
  const isInput = e => {
    e.preventDefault();
    if(userInput.current.value.length >= 3 && userPass.current.value.length >= 8){
      const btnLogin = document.getElementById('btnLogin')
      btnLogin.style.background = '#d90429'
    }else{
      btnLogin.style = '@bg-gray-400'
    }
  }
  const loginBy = [
    {icon: <AiOutlineGoogle/>, text: 'Login By Google Account'},
    {icon: <AiOutlineFacebook/>, text: 'Login By Facebook Account'},
    {icon: <AiOutlineWhatsApp/>, text: 'Login By WhatsApp Account'},
  ]
  
  return (
    <div className='min-h-screen'>
      <header>
        <nav className='sm:bg-primary sm:text-white'>
          <ul className='flex items-center justify-between w-full p-3 text-xl sm:text-3xl'>
            <li className='cursor-pointer flex items-center gap-5'>
              <Link href="./"><AiOutlineArrowLeft/></Link>
              <span>Back</span>
            </li>
            <li className='cursor-pointer flex items-center gap-5'>
              <span>Register</span>
              <Link href=''><AiOutlineArrowRight/></Link>
            </li>
          </ul>
        </nav>
        <main>
          <div className='relative mx-auto mt-4 sm:mt-24 mb-6 sm:mb-12 w-36 sm:w-48 h-36 sm:h-48'>
            <Image className='rounded-full'
            src={testImg}
            layout='fill'
            objectFit='cover'
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
            <button id='btnLogin' type="submit" className='border bg-gray-400 text-white text-2xl p-2 rounded w-1/2 sm:w-1/5 lg:w-1/12 transition-colors'>Login</button>
              <ul className='flex flex-col justify-evenly items-center flex-wrap gap-3 w-fit' key={loginBy.icon}>
                {loginBy.map((item)=>(
                  <div className='flex items-center gap-5 border p-3 w-full sm:bg-primary rounded cursor-pointer sm:text-white' key={item.icon}>
                    <li className='text-2xl'>
                      {item.icon}
                    </li>
                    <li>
                      {item.text}
                    </li>
                  </div>
                ))}
              </ul>
          </form>
        </main>
      </header>
    </div>
  )
}

export default login