import navbar from "./navbar"
import {AiOutlineArrowLeft ,AiFillFacebook, AiFillTwitterSquare, AiFillGithub, AiFillLinkedin} from "react-icons/ai"
import Link from 'next/link';
import { useState } from "react";

const contact = () => {
  const [contactSocial, setContactSocial] = useState([
    {icon : <AiFillFacebook/>, link : 'https://www.facebook.com/AsZaychik/'},
    {icon : <AiFillTwitterSquare/>, link : 'https://twitter.com/ZaychikAs'},
    {icon : <AiFillGithub/>, link : 'https://github.com/Aszaychik'},
    {icon : <AiFillLinkedin/>, link : 'https://www.linkedin.com/in/aszaychik/'},
  ])
  return (
    <main className="bg-white min-h-screen">
      <nav className='sm:bg-primary sm:text-white'>
          <ul className='flex items-center justify-between w-full p-3 text-xl sm:text-3xl'>
            <li className='cursor-pointer flex items-center gap-5'>
              <Link href="./"><AiOutlineArrowLeft/></Link>
              <span>Back</span>
            </li>
          </ul>
        </nav>
      <div className="flex flex-col justify-center items-center mt-5 sm:mt-10 gap-5 sm:gap-10">
        <h1 className="text-4xl">Contact Us</h1>
        <form action="" className="flex w-3/4 sm:w-1/2 flex-col mt-5 sm:mt-10 gap-5 sm:gap-10">
          <fieldset>
            <input className="border border-black rounded-lg p-2 w-full" type="text" name="inputUser" placeholder="Username..."/>
          </fieldset>
          <fieldset>
            <input className="border border-black rounded-lg p-2 w-full" type="email" name="inputEmail" placeholder="Example@gmail..."/>
          </fieldset>
          <fieldset>
            <textarea className="border border-black rounded-lg p-2 w-full" name="inputMssg" id="" cols="30" rows="10" placeholder="Message..."></textarea>
          </fieldset>
          <button className="bg-primary text-white mx-auto w-1/2 p-2 rounded" type="submit">SEND</button>
        </form>
        <ul className="flex text-4xl gap-3">
          {contactSocial.map((item) => (
            <li className="cursor-pointer" key={item.icon}>
            <Link href={item.link}>{item.icon}</Link>
          </li>
          ))}
        </ul>
      </div>
    </main>
  )
}

export default contact