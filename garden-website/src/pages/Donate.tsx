import DonateBackground from '../assets/Donate.jpg';

export function Donate() {
  return (
    <div className="relative min-h-screen bg-gray-100 overflow-hidden">
      <img 
        src={DonateBackground} 
        alt="" 
        className="absolute inset-0 w-full h-full object-cover brightness-50 z-0"
      />
      
      <div className="flex flex-col items-center justify-center p-4 relative z-10 min-h-screen"> 
        <h1 className="text-3xl font-bold mb-6 text-white drop-shadow-lg">Support Our Mission</h1>
        <p className="text-xl mb-8 text-center max-w-2xl text-white drop-shadow-lg">
          Your generous donations help us continue our work in the Lower East Side community,
          providing a space for urban gardening, education, and community engagement. Every contribution,
          no matter how small, makes a difference in sustaining our garden and supporting local initiatives.
        </p>
   <button
          className="px-8 py-4 bg-green-900 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors shadow-xl"
          onClick={() => window.open("https://www.manhattanlandtrust.org/contact-us/donate-2/", "_blank")}
        >
          Donate Now
        </button>
        <p className="italic text-center text-xl text-white drop-shadow-lg mt-8">
          Lower East Side People Care (LESPC) is a 501c3 not-for-profit branch of the Manhattan Land Trust. <br />
          Make a tax-exempt contribution to LESPC through the Manhattan Land Trust.
          <br /> <br />
          Thank You for Your Support!
        </p>

        
      </div>
    </div>
  );
}