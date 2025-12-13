import React from 'react';

function Card({username, btnText = "Learn More"}) {    //if user dont pass btnText prop then it will show Learn More
    console.log(username);
  return (
    <div className="relative h-[400px] w-[300px] bg-white rounded-md overflow-hidden shadow">
      <img
        src="/src/assets/placeholder.jpg"
        alt="Scenery"
        className="object-cover w-full h-full"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      <div className="absolute bottom-4 left-4 text-left text-white">
        <h1 className="text-lg font-semibold">{username}</h1>
        <p className="mt-2 text-sm text-white/90">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <button className="mt-3 inline-flex items-center rounded px-3 py-1 bg-white text-black text-sm font-semibold">
          {btnText} 
        </button>
      </div>
    </div>
  );
}

export default Card;