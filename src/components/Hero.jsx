import React from "react";

function Hero() {
  return (
    <div className="flex flex-col p-10">
      <img src="public/photo-grid.png" className='max-w-md self-center' />
      <h1 className="font-bold text-4xl mt-6">Online Experiences</h1>
      <p className="mt-3 max-w-sm">
        Join unique interactive activities led by <br />one-of-a-kind hosts—all
        without leaving home.
      </p>
    </div>
  );
}

export default Hero;
