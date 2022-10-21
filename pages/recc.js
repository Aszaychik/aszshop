import Image from "next/image";
import { useState } from "react";
import {AiOutlineShoppingCart} from 'react-icons/ai'

const recc = () => {
  const recImg = ["https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80","https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80","https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80","https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"]
  
  return (
    <div className="p-5">
          <section className="mt-10 flex flex-col border shadow-inner p-3">
          <h1 className="text-2xl flex justify-center mb-5">Reccomendation</h1>
            <div className="flex flex-wrap justify-around p-5 gap-3">
              {recImg.map((capImg)=>(
                <article className="bg-primary w-60 h-60 rounded-lg shadow-sm shadow-black">
                  <figure className="relative w-full h-full justify-center">
                    <Image key={capImg} className="rounded-lg hover:opacity-20 capImg"
                    src={capImg}
                    layout='fill'
                    objectFit='cover'
                    />
                    <div className="flex flex-col justify-around items-center text-white text-2xl font-bold">
                  <div className="gap-24 flex flex-col hover:">
                    <caption className="">PC Component</caption>
                    <div className="rounded flex justify-center ">
                      <span className="bg-secondary ursor-pointer p-3 border-r rounded-l">$69</span>
                      <button className="bg-secondary cursor-pointer p-3 hover:brightness-150 hover:bg-secondary2 rounded-r "><AiOutlineShoppingCart/></button>
                    </div>
                  </div>
                </div>
                  </figure>
                </article>
              ))}
            </div>
          </section>
        </div>
  )
}

export default recc