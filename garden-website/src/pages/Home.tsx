import Hero from '../components/Hero'
import HeroImage from '../assets/IMG_7989.jpg'

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/swiper-bundle.css'
//Images
import Picture from '../assets/sky.jpg'
import Garden1 from '../assets/garden1.jpg'
import Frogger from '../assets/frogger.jpg'
import Library from '../assets/library.jpg'


export function Home() {
    return (
      <>
      <Hero 
        image={HeroImage}
        alt="Community garden"
        title="Welcome to Our Garden"
        className="h-[80vh] w-screen object-cover rounded-lg shadow-lg "
/>
        <div className='flex flex-row items-center justify-center p-8 bg-white'>
                <div>
                    <h1 className="text-3xl font-bold text-center mt-8">Our Mission, Vision, and Values</h1>
                    <p className="text-center mt-4 text-gray-600">Lower East Side People Care is an urban gardening green space that is staffed by hard working
                        community volunteers who oversee the daily maintenance of the garden. We are committed to
                        ensuring that our LESPC garden is a dynamic and vibrant space for all to enjoy. LESPC is
                        grounded in the community, environmental, and opportunities for active engagement. As we
                        look to the future, we see a space where users feel safe and welcomed, where nature is
                        nurtured and protected. We cultivate opportunities for social interaction and recreation in a
                        positive atmosphere that is representative of our neighborhood. LESPC is a valued part of the
                        Lower East Side community, providing a green space for enjoyment and fostering connections
                        among neighbors.</p>
                </div>

                <div>
                    <img src={Picture} alt="Sky" className="h-[80vh] max-w-2xl object-cover rounded-lg shadow-lg" />
                </div>
            </div>
            
            <div className="container mx-auto px-4 py-8 items-center">
                    <h1 className="text-3xl font-bold text-center mt-8">Gallery</h1>
                    <Swiper
                        space-between={50}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        className="mySwiper w-full h-[80vh] mt-8"
                    >
                        <SwiperSlide>
                            <img src={Frogger} alt="Frogger" className="w-[80vw] h-[80vh] object-cover rounded-lg shadow-lg" />
                        </SwiperSlide>

                        <SwiperSlide>
                            <img src={Picture} alt="Garden" className="w-[80vw] h-[80vh] object-cover rounded-lg shadow-lg" />
                        </SwiperSlide>

                        <SwiperSlide>
                            <img src={Garden1} alt="Garden" className="w-[80vw] h-[80vh] object-cover rounded-lg shadow-lg" />
                        </SwiperSlide>

                          <SwiperSlide>
                            <img src={Library} alt="Garden" className="w-[80vw] h-auto object-contain rounded-lg shadow-lg" />
                        </SwiperSlide>
                    </Swiper>

                </div>
            </>
    );
    }