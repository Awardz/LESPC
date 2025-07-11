import React from 'react';

type HeroProps = {
    image: string;
    alt: string;
    title: string;
    className?: string;
};
function Hero({
    image,
    alt,
    title,
    className='',
 }: HeroProps)   {


  return (
    <div className="relative w-screen h-[80vh]"> 
      
      <img src={image} alt={alt} className={className}/>

    
      <div className="absolute inset-0 flex items-start bg-opacity-40 p-30">
        <div className="text-white max-w-2xl "> 
          <h1 className="text-5xl font-bold mb-4">{title}</h1>
          <p className="text-xl mb-6">Explore the beauty of nature and learn about sustainable gardening.</p>
          <button className="px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg text-white font-medium transition-colors">
            Learn More
          </button>
        </div>
      </div>
      
    </div>
    
  );
}

export default Hero;