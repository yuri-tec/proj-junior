import { Link } from "react-router-dom"
export function Hero () {
    return (
        <div className="bg-white h-screen flex flex-col justify-center items-center">
            <h1 className= 'lg:text-9xl md:text-7xl sm:text-5xl text-3xl font-black mb-14' >
                STHIFFJUICE
            </h1>
            <Link to='#' className="py-6 px-10 bg-yellow-500 rounded-full text-3xl hoveribg-yellow-300 transition duration-300 ease-in-out flex item-center animate-bounce"> 
                Order Now 
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-4 mt-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                 <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </Link>
               

        </div>   
        
    )
}