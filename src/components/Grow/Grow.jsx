 
import ReactLogo from '../../assets/Growing.png';

export default function Grow() {
  return (
    <div>
       <div className="container mx-auto p-4">
      
      {/* Grow Content */}
      <div className='flex flex-wrap justify-center items-center gap-6 sm:gap-10 p-6 sm:p-10'>
        <div className='w-full sm:w-[45%]'>
          <h2 className='p-2 text-lg sm:text-2xl font-bold text-blue-600'>
            2. BUID AND ENGAGED AUDIENCE
          </h2>
          <h3 className='p-2 text-2xl sm:text-4xl font-semibold'>
            Build a library of content ideas
          </h3>
          <p className='p-2 text-sm sm:text-lg'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quibusdam<br /> facilis!
          </p>
          <a 
            href="#get-started" 
            className="px-4 py-2 mt-4 inline-block rounded-3xl border border-transparent bg-blue-600 text-white hover:bg-yellow-600"
          >
            Start Growing
          </a>
        </div>
        
        <div className='w-full sm:w-[45%] flex justify-center'>
          <img src={ReactLogo} className="w-full max-w-xs sm:max-w-md h-auto" alt="About section graphic" />
        </div>
      </div>
      
    </div>
    </div>
  )
}

