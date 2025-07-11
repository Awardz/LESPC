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
      <div className='flex flex-col items-center justify-center p-8 bg-white'>
        <div className="max-w-2xl text-center">
          <h1 className="text-3xl font-bold mt-8">
            Lower East Side People Care is an urban gardening green space that is staffed 
            by hard working community volunteers who oversee the daily maintenance of the garden. </h1>
          <p className="mt-4 text-gray-600">
           We have been working throughout the summer on some projects at the Lower East
            Side People Care Garden. We have had several volunteer groups, including a regular group
            from the summer day camp program from Henry Street Settlement. We have been working on
            a variety of projects including building a new picnic table and benches, painting old benches,
            waterproofing garden beds, pruning, and general garden cleanup. Thanks so much to all our
            volunteers for their hard work!
          </p>
        </div>
      </div>

      <div className="flex flex-col  p-8 bg-white">
        <div className='flex flex-row items-center justify-center '>
           {/*  <img src={Banner} alt="Garden Banner" className="w-[20vw] min-h object-cover rounded-lg shadow-lg mt-8" /> */}
            <img src={Sign} alt="Garden Sign" className="w-[20vw] min-h object-cover rounded-lg shadow-lg mt-8" />
        </div>

        <h1 className="text-3xl font-bold text-center mt-8">Visitor Information</h1>
        <div className='flex flex-col items-center justify-center p-8 bg-white'>
            <ul className='list-disc pl-5 space-y-2'></ul>
            <li>Please note the irregular pathways, and exercise caution, when entering and whenever inside.</li>
            <li>Dogs on leash only.</li>
            <li>Please take out your refuse when you leave.</li>
            <li>Note: "closed" dates, hours are signifier of times not committed to by members.</li>
            <li>LESPC Garden welcomes visitors whenever the gates are opened, and member(s) are inside.</li>
        </div>
      </div>
     
    </>
  );
}