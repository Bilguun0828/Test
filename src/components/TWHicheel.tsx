// import React from 'react'

const TWHicheel = () => {
  return (
    <div className="bg-red-400 p-8 min-h-screen flex flex-col items-center gap-10">
      
      <h1 className="text-4xl">Дасгал 2</h1>
      <div className="bg-white p-10 min-h-[200px] border-white shadow-md">
        <div className="flex flex-wrap w-full justify-center md:justify-start">
          <span className="bg-red-400 text-white px-4 py-1 rounded-full border border-red-600 text-sm font-bold">FIRST</span>
          <span className="bg-red-400 text-white px-4 py-1 rounded-full border border-red-600 text-sm font-bold">SECOND</span>
          <span className="bg-red-400 text-white px-4 py-1 rounded-full border border-red-600 text-sm font-bold">THIRD</span>
          <span className="bg-red-400 text-white px-4 py-1 rounded-full border border-red-600 text-sm font-bold">FOURTH</span>
          <span className="bg-red-400 text-white px-4 py-1 rounded-full border border-red-600 text-sm font-bold">FIFTH</span>
          <span className="bg-red-400 text-white px-4 py-1 rounded-full border border-red-600 text-sm font-bold">SIXTH</span>
          <span className="bg-red-400 text-white px-4 py-1 rounded-full border border-red-600 text-sm font-bold">SEVENTH</span>
        </div>
      </div>

      <h1 className="text-4xl">Дасгал 3</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
        <div className="bg-white border-4 border-white shadow-lg flex flex-col">
          <div className="p-4 flex-grow">
            <h2 className="font-bold text-lg mb-1">Card Heading</h2>
            <p className="text-sm leading-tight">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, itaque.
            </p>
          </div>
          <footer className="bg-indigo-600 text-white text-center py-2 text-xs">Card Footer</footer>
        </div>
        <div className="bg-white border-4 border-white shadow-lg flex flex-col">
          <div className="p-4 flex-grow">
            <h2 className="font-bold text-lg mb-1">Card Heading</h2>
            <p className="text-sm leading-tight">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta
              minima voluptatem rerum neque nam deleniti fugit voluptatum? Nulla
              praesentium voluptas dicta veritatis, quibusdam deleniti. Laboriosam
              fugit consectetur alias exercitationem nulla!
            </p>
          </div>
          <footer className="bg-indigo-600 text-white text-center py-2 text-xs">Card Footer</footer>
        </div>
        <div className="bg-white border-4 border-white shadow-lg flex flex-col">
          <div className="p-4 flex-grow">
            <h2 className="font-bold text-lg mb-1">Card Heading</h2>
            <p className="text-sm leading-tight">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut harum
              officia mollitia veritatis asperiores cumque vitae perspiciatis aut
              minus quaerat?
            </p>
          </div>
          <footer className="bg-indigo-600 text-white text-center py-2 text-xs">Card Footer</footer>
        </div>

      </div>
    </div>
  )
}

export default TWHicheel