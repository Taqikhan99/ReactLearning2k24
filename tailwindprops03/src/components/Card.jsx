import React from 'react'

function Card({userName}) {
  return (
    <div>
      <div className="relative h-[400px] w-[300px] rounded-md">
    <img
        src="https://images.pexels.com/photos/1912868/pexels-photo-1912868.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="AirMax Pro"
        className="z-0 h-full w-full rounded-md object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
    <div className="absolute bottom-4 left-4 text-left">
        <h1 className="text-lg font-semibold text-white">{userName}</h1>
        <p className="mt-2 text-sm text-gray-300">
        Welcome to new Place
        </p>
        <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white bg-green-400">
        View Profile →
        </button>
    </div>
    </div>


    </div>
  )
}

export default Card
