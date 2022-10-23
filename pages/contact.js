import navbar from "./navbar"
import {AiFillFacebook, AiFillTwitterSquare, AiFillGithub, AiFillLinkedin} from "react-icons/ai"
import Link from 'next/link';

const contact = () => {
  const contactSocial = [
    {icon : <AiFillFacebook/>, link : 'https://www.facebook.com/AsZaychik/'},
    {icon : <AiFillTwitterSquare/>, link : 'https://twitter.com/ZaychikAs'},
    {icon : <AiFillGithub/>, link : 'https://github.com/Aszaychik'},
    {icon : <AiFillLinkedin/>, link : 'https://www.linkedin.com/in/aszaychik/'},
  ]
  return (
    <main className="bg-white min-h-screen">
      {navbar()}
      <div className="flex flex-col justify-center items-center mt-10 gap-10">
        <h1 className="text-4xl">Contact Us</h1>
        <form action="" className="flex w-1/2 flex-col mt-10 gap-10">
          <fieldset>
            <input className="border border-black rounded-lg p-2 w-full" type="text" name="inputUser" placeholder="Username..."/>
          </fieldset>
          <fieldset>
            <input className="border border-black rounded-lg p-2 w-full" type="email" name="inputEmail" placeholder="Example@gmail..."/>
          </fieldset>
          <fieldset>
            <textarea className="border border-black rounded-lg p-2 w-full" name="inputMssg" id="" cols="30" rows="10" placeholder="Message..."></textarea>
          </fieldset>
          <button className="border border-black mx-auto w-1/2 p-2 rounded" type="submit">SEND</button>
        </form>
        <ul className="flex text-4xl gap-3">
          {contactSocial.map((item) => (
            <li className="cursor-pointer">
            <Link href={item.link} key={item.icon}>{item.icon}</Link>
          </li>
          ))}
        </ul>
      </div>
    </main>
  )
}

export default contact