import { useEffect, useState } from "react";

const GALLERY_IMAGES = [
    '/images/gallery/Frogger.jpg',
    '/images/gallery/Garden1.jpg',
    '/images/gallery/AboutHero.jpg',
    '/images/gallery/ContactBackground.jpg',
    '/images/gallery/WallPaint.jpg',
    '/images/gallery/Seating.jpg',
    '/images/gallery/Tree.jpg',
    '/images/gallery/Plants.jpg',
    '/images/gallery/Library.jpg',
    '/images/gallery/Seating2.jpg',
    '/images/gallery/WallPaint2.jpg',
    '/images/gallery/PlantOrn.jpg',
    '/images/gallery/BirdHouses.jpg',
  'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
  // Add more image URLs as needed
];

export function Gallery() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    useEffect(() => {
  GALLERY_IMAGES.forEach(image => {
    try 
    {
      const img = new Image();
      img.src = image;
    } 
    catch (error)
    {
      console.error('Failed to preload image:', image, error);
    }
    });},[]);
    
  return (
    <div className="relative min-h-screen bg-gray-100 overflow-hidden mt-16">
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">Gallery</h1>
        <p className="max-w-4xl">We have been working throughout the summer on some projects at the Lower East
            Side People Care Garden. We have had several volunteer groups, including a regular group
            from the summer day camp program from Henry Street Settlement. We have been working on
            a variety of projects including building a new picnic table and benches, painting old benches,
            waterproofing garden beds, pruning, and general garden cleanup. Thanks so much to all our
            volunteers for their hard work!</p>
        <h2 className="text-lg mb-8 text-center max-w-2xl text-gray-600 mt-4">
          Explore our collection of images showcasing the beauty and diversity of our garden.
        </h2>

         {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
          {GALLERY_IMAGES.map((image, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-[60vh] object-cover hover:opacity-90 transition-opacity"
              />
            </div>
          ))}
        </div>

        {/* Modal Overlay */}
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
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}