import React from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

import Member from '../assets/Member.jpg';

export function GetInvolved() {
  // Add this import at the top if not already present:
  // import { useEffect } from 'react';

  React.useEffect(() => {
    const map = new maplibregl.Map({
      container: 'map', // container id
      style: 'https://tiles.stadiamaps.com/styles/osm_bright.json', // style URL
      center: [-73.989896, 40.712811], // starting position [lng, lat]
      zoom: 15 // starting zoom
    });

    map.on('load', () => {
    new maplibregl.Marker({
      color: '#4CAF50', // Green color
      draggable: false, // Set to true if you want movable markers
    })
      .setLngLat([-73.989896, 40.712994]) // Same as your center or specific spot
      .setPopup(
        new maplibregl.Popup() // Optional popup
          .setHTML('<h3 class="font-bold">LESPC NYC</h3>')
      )
      .addTo(map);
  });

    return () => {
      map.remove();
    };
  }, []);

  return (
    <>
      <div className='flex md:flex-row flex-col items-center justify-center p-8 bg-white'>
        <div id="map" className="w-full md:w-4/5 h-[400px] mt-20 md:mt-20"/>
        <div className='flex flex-col items-center justify-center p-8 bg-white w-full md:w-1/2'>
          <h1 className="text-3xl font-bold text-center mt-8 text-green-900">Visit Us!</h1>
          <p className="text-center mt-4 text-gray-600 text-2xl">
            Lower East Side People Care<br />25 Rudgers Street, New York, NY 10002. <br /> (Between Madison Street and Henry Street)
            <br />Come visit us and experience the beauty of our urban garden!
          </p>
        </div>
      </div>


      <div className="mx-auto px-4 py-8 w-screen bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-center mt-8 text-green-900">Get Involved!</h1>

         {/* Mobile */}
        <div className='md:hidden relative'>
          <img 
            src={Member} 
            alt="Member"
            className="w-full h-64 object-cover rounded-lg shadow-lg brightness-75"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center text-white">
            <p className="text-xl font-medium mb-6 w-4/5">
              Join us in making a difference in our community! 
            </p>
            <a
              href="../public/downloads/LESPC MEMBERSHIP APPLICATION 2025.docx" 
              download="LESPC-Volunteer-Application.pdf"
              className="px-6 py-3 bg-green-900 text-white rounded-lg hover:bg-green-600 transition-colors"
            >
              Download Member Application
            </a>
          </div>
        </div>

    <div className='hidden md:block relative'>
  <img 
    src={Member} 
    alt="Member"
    className="w-full h-auto object-cover rounded-lg shadow-lg brightness-50"
  />
  <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center text-white">
    <div className="w-full max-w-2xl px-8"> 
      <p className="text-3xl mb-8 leading-tight"> 
        Join us in making a difference in our community! 
      </p>
      <a
        href="../public/downloads/LESPC MEMBERSHIP APPLICATION 2025.docx" 
        download="LESPC-Volunteer-Application.pdf"
        className="inline-block px-8 py-4 bg-green-900 text-white rounded-lg hover:bg-green-600 transition-colors text-xl"
      >
        Download Membership Application
      </a>
    </div>
  </div>
</div>
      </div>
    </>
  );
}