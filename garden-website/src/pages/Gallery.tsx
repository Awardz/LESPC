import { useEffect, useState } from "react";
import 'react-lazy-load-image-component/src/effects/blur.css';
import { motion, } from 'framer-motion';

import 'swiper/swiper-bundle.css'

const GALLERY_IMAGES = [
    '/images/gallery_optimized/Frogger.webp',
    '/images/gallery_optimized/Garden1.webp',
    '/images/gallery_optimized/ContactBackground.webp',
    '/images/gallery_optimized/WallPaint.webp',
    '/images/gallery_optimized/EventSpace.webp',
    '/images/gallery_optimized/Seating.webp',
    '/images/gallery_optimized/Tree.webp',
    '/images/gallery_optimized/PlantOrn.webp',
    '/images/gallery_optimized/Plants.webp',
    '/images/gallery_optimized/Library.webp',
    '/images/gallery_optimized/Seating2.webp',
    '/images/gallery_optimized/WallPaint2.webp',
  
    '/images/gallery_optimized/AboutHero.webp',
    '/images/gallery_optimized/BirdHouses.webp',
    
    '/images/gallery_optimized/PinkFlower.webp',
  // Add more image URLs as needed
];

export function Gallery() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

useEffect(() => {
  const preloadImages = async () => {
    try {
      // Preload only first 3 images
      await Promise.all(
        GALLERY_IMAGES.slice(0, 3).map((img) => {
          return new Promise((resolve, reject) => {
            const image = new Image();
            image.src = img;
            image.onload = resolve;
            image.onerror = () => reject(`Failed to load ${img}`);
          });
        })
      );
    } catch (err) {
      console.warn('Image preload warning:', err); 
      // Fails gracefully - site still works
    }
  };

  preloadImages();
}, []);

    
  return (
    <div className="relative min-h-screen bg-gray-100 overflow-hidden mt-16">
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4">
        <h1 className="text-3xl font-bold mb-6 text-green-900">Gallery</h1>
        <p className="max-w-4xl items-center justify-center text-center text-xl"> We have been working on a variety of projects including building a new picnic table and benches, 
            painting old benches, waterproofing garden beds, pruning, and general garden cleanup. </p>

          <p className="text-xl mt-8"> Thanks so much to all our volunteers for their hard work!</p>
        <h2 className="text-3xl mt-10 text-center max-w-2xl text-green-900 mt-4">
          Explore our collection of images showcasing the beauty and diversity of our garden.
        </h2>

         {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
          
  


        {GALLERY_IMAGES.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.3,
              delay: index * 0.05 
            }}
            className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow"
            onClick={() => setSelectedImage(image)}
          >
            
            
            <img
              src={image}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-[60vh] object-cover hover:opacity-90 transition-opacity"
            />
          </motion.div>
        ))}
        </div>

        {/* Modal Overlay Add Swiping Ability*/}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-6xl max-h-[90vh]">
              <img
                src={selectedImage}
                alt="Enlarged view"
                className="max-w-full max-h-[90vh] object-contain"
              />
              <button 
                className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white rounded-full p-2 backdrop-blur-sm transition-all"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(null);
                }}
              >

              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}