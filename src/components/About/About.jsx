
import ReactLogo from '../../assets/About.png';

export default function About() {
  return (
    <div className="container mx-auto p-4">
      
      {/* About Header */}
      <div className='flex justify-center items-center flex-col text-center'>
        <h1 className='font-bold text-2xl sm:text-3xl p-6 sm:p-10'>
          Build a following without draining your time
        </h1>
        <p className='max-w-md sm:max-w-2xl text-sm sm:text-base'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum 
          eaque, unde aut quas <br /> sapiente deserunt esse natus a voluptas aperiam quasi consequatur?
        </p>
      </div>
      
      {/* About Content */}
      <div className='flex flex-wrap justify-center items-center gap-6 sm:gap-10 p-6 sm:p-10'>
        <div className='w-full sm:w-[45%]'>
          <h2 className='p-2 text-lg sm:text-2xl font-bold text-blue-600'>
            1. CREATE CLICK-WORTHY CONTENT
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
            Start Creating
          </a>
        </div>
        
        <div className='w-full sm:w-[45%] flex justify-center'>
          <img src={ReactLogo} className="w-full max-w-xs sm:max-w-md h-auto" alt="About section graphic" />
        </div>
      </div>
      
    </div>
  );
}
