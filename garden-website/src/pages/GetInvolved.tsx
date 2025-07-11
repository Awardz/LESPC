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
          .setHTML('<h3 class="font-bold">LESPC</h3><p>Open daily 9AM-5PM</p>')
      )
      .addTo(map);
  });

    return () => {
      map.remove();
    };
  }, []);

  return (
    <>
      <div className='flex flex-row'>
        <div id="map" style={{ width: '80%', height: '400px', marginTop: '5rem', }} />
        <div className='flex flex-col items-center justify-center p-8 bg-white w-1/2'>
          <h1 className="text-7xl font-bold text-center mt-8">Visit Us!</h1>
          <p className="text-center mt-4 text-gray-600 text-2xl">
            Lower East Side People Care<br />25 Rudgers Street, New York, NY 10002. <br /> (Between Madison Street and Henry Street)
            <br />Come visit us and experience the beauty of our urban garden!
          </p>
        </div>
      </div>


      <div className="mx-auto px-4 py-8 w-screen bg-white shadow-lg rounded-lg border border-gray-200">
        <h1 className="text-7xl  text-center mt-8">Get Involved</h1>
        <div className='relative'>
        <img src={Member} alt="Member"
        className="mx-auto w-full h-auto object-cover rounded-lg shadow-lg brightness-50" />

        <div className='absolute inset-0 flex flex-col items-center justify-center p-4 text-center text-white mb-250'>
        <p className="text-center mb-6 text-3xl  w-[20%]">
          Join us in making a difference in our community! 
        </p>
       

          <button className="px-6 py-3 rounded-lg text-white font-medium transition-colors">
            <a
              href="../public/downloads/LESPC MEMBERSHIP APPLICATION 2025.docx" 
              download="LESPC-Volunteer-Application.pdf"
              className="px-4 py-2 bg-green-900 text-white rounded-lg hover:bg-green-600 transition-colors"
            >
              Download Volunteer Application
            </a>
          </button>
         
        </div>
        </div>
      </div>
    </>
  );
}