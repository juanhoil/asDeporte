"use client"
import * as React from "react";
import { useState } from "react";

const Newsletter = () => {
  const [selected, setSelected] = useState('Próximos eventos');

  return (
    <div id="join-section" className="-mt-8 relative z-2">
      <div className="mx-auto md:max-w-4xl text-white bg-black md:text-black md:bg-white lg:px-6 shadow-lg">
        {/* COLUMN-1 */}
        <div className="max-h-60 overflow-y-auto">
          <nav className="flex sm:justify-center space-x-4 py-6 px-6">
            {['Próximos eventos', 'Paquetes', 'Eventos pasados', 'Tribus destacadas'].map((title, index) => (
              <button
                key={index}
                className={`flex-shrink-0 rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900 focus:outline-none ${selected === title ? 'bg-orange text-white' : ''}`}
                onClick={() => setSelected(title)}
              >
                {title}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;