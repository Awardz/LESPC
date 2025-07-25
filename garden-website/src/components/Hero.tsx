type HeroProps = {
    image: string;
    alt: string;
    title: string;
    className?: string;
};
function Hero({
    image,
    alt,
    className='',
 }: HeroProps)   {


  return (
    <div className="relative w-screen h-[80vh]"> 
      <img src={image} alt={alt} className={className}/>
    </div>
    
  );
}

export default Hero;