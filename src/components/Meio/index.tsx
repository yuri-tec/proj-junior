
import pexels from '../assets/pexels.png'
import ved from '../assets/ved.png'

export function Meio ()  {
    return (
        <>
        <div className='menu-card'>
            <img src={pexels} alt="#" className='h-full rounded mb-10 shadow'/>
            <div className='text-card'>
                <h2 className='text-2xl  '>Frut long</h2>
                <p className='mb-2'>Frutas frescas e combinações lindas!!</p>
                <span>R$10</span>
            </div>
        </div>

        <div className='menu-car'>
        <img src={ved} alt="#" className='h-full rounded mb-10 shadow'/>
            <div className='text-card'>
                <h2 className='text-2xl  '>Juice Green</h2>
                <p className='mb-2'>Suco verde detox!!</p>
                <span>R$10</span>
            </div>
        
         <div className='flex flex-col justify-center items-center bg-white h-screen'>

            

         </div>
      </div>
      </>
        
    )
}