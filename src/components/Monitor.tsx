// import React from 'react'
import MonitorImg from "../assets/monitor-card.webp";

const Monitor = () => {
  return (
    <div className="flex flex-col md:flex-row w-full items-center justify-between gap-10 px-7 py-20">
      <div className="flex flex-col gap-4 md:w-1/2">
        <p className="text-green-600">MONITOR</p>

        <h2
          className="font-extrabold leading-tight text-gray-900"
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: "2.6rem",
          }}
        >
          Introducing best mobile carousels
        </h2>

        <p className="text-sm text-gray-500 leading-relaxed">
          Before the ship is really back. Round, round, all round the world. Round all around the world. Round all around the world.
        </p>
        <p className="text-sm text-blue-500 leading-relaxed">
            Learn About Monitoring  →
        </p>
      </div>
      <img src={MonitorImg} alt="monitor" className="w-3/4 md:w-1/2 mx-auto" />
    </div>
  )
}

export default Monitor