import Image from 'next/image'

export default function jumbotron() {
  return (
    <section className="text-white">
      <div className='bg-primary relative flex justify-center items-center w-full h-72 shadow-lg overflow-hidden bg-no-repeat'>
        <Image className='blur-[2px] brightness-75 opacity-20' 
        src='https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
        alt="Banner"
        fill
        objectFit='cover'
        priority
        />
        <div className='relative flex flex-col justify-center items-center gap-10 uppercase'>
          <h1 className='text-4xl'>Welcome!</h1>
          <a className='outline outline-white text-xl p-3 cursor-pointer rounded-md  hover:bg-white hover:text-black hover:'>Start Exploring</a>
        </div>
      </div>
    </section>
  )
}
