import DonateBackground from '../assets/Donate.jpg';
export function Donate() {
  return (
    <div className="relative min-h-screen bg-gray-100 overflow-hidden">
    
      <img 
        src={DonateBackground} 
        alt="" 
        className="absolute inset-0 w-full h-full object-cover brightness-50 z-0"
      />
      
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4">
        <h1 className="text-4xl font-bold mb-6 text-white drop-shadow-lg">Support Our Mission</h1>
        <p className="text-lg mb-8 text-center max-w-2xl text-white drop-shadow-lg">
          Your generous donations help us continue our work...
        </p>
        <button
          className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors shadow-xl"
          onClick={() => window.open("https://www.manhattanlandtrust.org/contact-us/donate-2/", "_blank")}
        >
          Donate Now
        </button>
      </div>
    </div>
  );
}