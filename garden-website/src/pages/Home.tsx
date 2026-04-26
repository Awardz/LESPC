import Hero from '../components/Hero'
import HeroImage from '../assets/IMG_7989.jpg'

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/swiper-bundle.css'
//Images
import Picture from '../assets/sky.jpg'
import Garden1 from '../assets/Garden1.jpg'
import Frogger from '../assets/Frogger.jpg'
import Library from '../assets/Library.jpg'
import CleanUp2026 from '/images/gallery_optimized/2026/LESPC2026SpringCleanupandPlanting.webp'


export function Home() {
    return (
      <>
      <Hero 
        image={HeroImage}
        alt="Community garden"
        title="Welcome to Our Garden"
        className="h-[80vh] mt-16 w-full object-cover rounded-lg shadow-lg brightness-75"
/>

        <div className="absolute top-0  left-0 w-full h-[80vh] flex items-end pb-10 px-4 md:px-4 text-grey-800 bg-opacity-50">
                <div className="text-white max-w-2xl px-4">
                <h1 className="text-5xl font-bold mb-4">Welcome to Our Garden</h1>
                <p className="text-2xl mb-6 ">Explore the beauty of nature...</p>
                </div>
            </div>

            <h1 className="text-3xl font-bold text-center mt-16 text-green-900 mb-16">Spring Arrives at the Lower East Side People's Care Garden</h1>

            <div className="w-full bg-white">

                {/* Use grid: 1 column on mobile, 2 on md+ */}
                <div className="grid grid-cols-1 md:grid-cols-2">
                    
                    {/* Left column */}
                    <div className="flex items-center justify-center">
                    <img 
                        src={CleanUp2026} 
                        alt="Clean up 2026" 
                        className="w-full h-full object-cover" 
                    />
                    </div>

                    {/* Right Column */}
                <div className="bg-green-900 p-8 flex flex-col items-center justify-center h-full">
                <p className="text-xl text-white leading-relaxed max-w-prose">
                        After a long New York City winter, spring has finally begun to unfurl across the Lower East Side — and nowhere is that transformation more
                        joyful than in the People’s Care Garden. The first bright daffodils have pushed through the soil, their yellow blooms announcing the season
                        with a burst of color that feels almost celebratory. <br /> <br />

                    
                        These early flowers are more than just a pretty sight. They’re a reminder of resilience, renewal, and
                        the power of community care. Every year, volunteers and neighbors come together to wake the
                        garden from its winter rest, clearing debris, refreshing beds, and preparing the space for the months
                        of growth ahead. <br /> <br />
        
                        This spring cleanup marks the unofficial start of the garden season. Tools come out, compost gets
                        turned, and familiar faces return to reconnect with the land — and with one another. Whether
                        you’re a longtime volunteer or someone discovering the garden for the first time, it’s a moment that
                        invites everyone to take part. <br /> <br />

                        As the daffodils bloom and the days grow warmer, the People’s Care Garden becomes a living symbol of what’s possible when a neighborhood nurtures its green spaces. Spring is here, and the garden is ready to grow again.
                    </p>
                </div>
              </div>
            </div>            
{/* 
             <div className="flex flex-col w-full md:flex-row items-center justify-center bg-white p-8">
                <div className="flex flex-col items-center justify-center p-8 w-full md:w-1/2 md:border-r border-gray-600">
                <h1 className="text-3xl font-bold text-center mt-8 text-green-900">Our Mission, Vision, and Values</h1>
                    <p className="text-center mt-4 text-gray-600 max-w-3xl text-2xl">Lower East Side People Care is an urban gardening green space that is staffed by hard working
                        community volunteers who oversee the daily maintenance of the garden. We are committed to
                        ensuring that our LESPC garden is a dynamic and vibrant space for all to enjoy. LESPC is
                        grounded in the community, environmental, and opportunities for active engagement. As we
                        look to the future, we see a space where users feel safe and welcomed, where nature is
                        nurtured and protected. We cultivate opportunities for social interaction and recreation in a
                        positive atmosphere that is representative of our neighborhood. LESPC is a valued part of the
                        Lower East Side community, providing a green space for enjoyment and fostering connections
                        among neighbors.</p>
                </div>

            <div className="flex justify-center p-4 w-full md:w-1/2 ">
               <img src={Picture} alt="Sky" className="h-[80vh] max-w-2xl object-cover rounded-lg shadow-lg" />
            </div>
        </div>
             */}
            <div className="container mx-auto px-4 items-center mt-16 mb-16">
            <h1 className="text-3xl font-bold text-center text-green-900">Gallery Preview</h1>
      
            <Swiper
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            className="mySwiper w-full h-[80vh] mt-16"
            >
            {/* Mobile-centered slides (flex + justify-center only on mobile) */}
            {[Frogger, Picture, Garden1, Library].map((imgSrc, index) => (
                <SwiperSlide key={index}>
                <div className="flex justify-center md:block"> {/* Centering wrapper */}
                    <img 
                    src={imgSrc} 
                    alt={`Gallery Image ${index + 1}`}
                    className="w-[80vw] h-[80vh] object-cover rounded-lg shadow-lg mx-auto md:mx-0"
                    />
                </div>
                </SwiperSlide>
            ))}
            </Swiper>
                  <h2 className='text-center text-2xl mt-8'> <a className='text-blue-500 underline font-bold'href="/gallery">LESPC GALLERY</a></h2>
            </div>
            </>
    );
    }