import Hero from '../components/Hero'
//Images
import Sign from '../assets/gardenSign.jpg'
import HeroImage from '../assets/AboutHero.jpg'

export function AboutUs() {
  return (
    <>
     
           <Hero 
        image={HeroImage}
        alt="Community garden"
        title="Welcome to Our Garden"
        className="h-[80vh] w-screen object-cover rounded-lg shadow-lg"
/>


      <div className="absolute inset-0 flex items-start bg-opacity-40 p-30">
        <div className="text-white max-w-2xl "> 
          <h1 className="text-5xl font-bold mb-4">About LESPC</h1>
          <p className="text-2xl mb-6">A Member of The Manhattan Land Trust</p>
      
        </div>
      </div>


      <div className='flex flex-col items-center justify-center p-8 bg-white'>
        <div className="max-w-5xl text-center">
          <h1 className="text-3xl font-bold mt-8">
            Lower East Side People Care (501c3) is an urban gardening green space <br />that is staffed 
            by hard working community volunteers who oversee the daily maintenance of the garden. </h1>
          <p className="mt-4 text-gray-600 text-2xl italic">
        Thanks so much to all our volunteers for their hard work!
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row p-4 md:p-8 bg-white items-center justify-center">
      <div className='flex justify-center w-full md:w-auto mb-6 md:mb-0 md:mr-8'>
        <img 
          src={Sign} 
          alt="Garden Sign" 
          className="w-[80vw] md:w-[20vw] max-w-[300px] object-contain rounded-lg shadow-lg md:mr-40" 
        />
      </div>

      {/* Content Section */}
      <div className='flex flex-col items-center justify-center w-full md:w-auto'>
        <h1 className="text-3xl md:text-3xl font-bold text-center text-green-900 mb-4 md:mt-8">
          Visitor Information
        </h1>
        
        <div className='w-full px-4 md:px-8'>
          <ul className='list-disc pl-5 space-y-3 text-gray-600 text-base md:text-xl lg:text-2xl'>
            <li>LESPC Garden welcomes visitors whenever the gates are opened, and member(s) are inside.</li>
            <li>Please note the irregular pathways — exercise caution, when entering and whenever inside.</li>
            <li>Dogs on leash only.</li>
            <li>Please take out your refuse when you leave.</li>
            <li>Note: "closed" dates, hours are signifier of times not committed to by members.</li>
          </ul>
        </div>
      </div>
    </div>

     {/*  <div className="flex flex-row  p-8 bg-white items-center justify-center">
        <div className='flex flex-row items-center justify-center '>
           
            <img src={Sign} alt="Garden Sign" className="w-[20vw] object-cover rounded-lg shadow-lg mt-8" />
        </div>

        <div className='flex flex-col items-center justify-center p-8'>
        <h1 className="text-3xl font-bold text-center mt-8 text-green-900">Visitor Information</h1>
        <div className='flex flex-col items-center justify-center p-8 bg-white'>
            <ul className='list-disc pl-5 space-y-2 text-gray-600 text-2xl'>
              <li>LESPC Garden welcomes visitors whenever the gates are opened, and member(s) are inside.</li>

            <li>Please note the irregular pathways, and exercise caution, when entering and whenever inside.</li>
             <li>Dogs on leash only.</li>
            <li>Please take out your refuse when you leave.</li>
             <li>Note: "closed" dates, hours are signifier of times not committed to by members.</li>
            
           
           </ul>
        </div>
        </div>
      </div> */}
     
    </>
  );
}