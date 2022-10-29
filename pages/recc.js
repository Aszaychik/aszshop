import Image from "next/image";
import {AiOutlineShoppingCart} from 'react-icons/ai'
import testImg from './assets/44905e73-f4ed-4bcc-9c30-d3860a2ebc69-result.png'

const recc = () => {
  const reccItems = [
    {id : 0,item : testImg, price : '$69'},
    {id : 1,item : testImg, price : '$420'},
    {id : 2,item : testImg, price : '$999'},
    {id : 3,item : testImg, price : '$0'},
    {id : 4,item : testImg, price : '$777'},
  ]
  return (
    <div className="p-5">
          <section className="mt-10 flex flex-col border shadow-inner p-3">
          <h1 className="text-2xl flex justify-center mb-5">Reccomendation</h1>
            <div className="flex flex-wrap justify-around p-5 gap-3">
              {reccItems.map((recItem)=>(
                <article className="bg-primary w-60 h-60 rounded-lg shadow-sm shadow-black" key={recItem.id}>
                  <figure className="relative w-full h-full justify-center">
                    <Image  className="rounded-lg hover:opacity-20 capImg"
                    src={recItem.item}
                    fill
                    objectFit='cover'
                    priority
                    />
                    <div className="flex flex-col justify-around items-center text-white text-2xl font-bold">
                      <div className="gap-24 flex flex-col hover:">
                        <figcaption className="">Test Image</figcaption>
                        <div className="rounded flex justify-center" >
                          <span className="bg-secondary ursor-pointer p-3 border-r rounded-l" >{recItem.price}</span>
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