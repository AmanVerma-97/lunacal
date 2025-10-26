'use client';
import { useState, useRef, useEffect } from 'react';

export default function Nav() {
  const [activeTab, setActiveTab] = useState('about');
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const navRef = useRef(null);

  const divValues = [
    {name : 'About Me', id: 'about', },
    {name : 'Experiences', id: 'exp'},
    {name : 'Recommended', id: 'rec'},
  ];

  // Update indicator position on activeTab change
  useEffect(() => {
    const activeElement = navRef.current?.querySelector(`#${activeTab}`);
    if (activeElement) {
      setIndicatorStyle({
        width: activeElement.offsetWidth, // Set width to match active tab
        transform: `translateX(${activeElement.offsetLeft}px)`, // Move to active tab position using left position
      });
    }
  }, [activeTab]);

  return (
    <nav 
      ref={navRef}
      className="w-5/6 m-auto flex flex-row justify-between rounded-3xl items-center mb-4 bg-black p-1 gap-1 top-0 relative"
    >
      {/* Sliding indicator */}
      <div
        className="absolute bg-[#28292F] rounded-full h-[calc(100%-8px)] transition-all duration-500 ease-in-out shadow-[10px_12px_85px_rgba(0,0,0,0.89),10px_12px_25px_rgba(0,0,0,0.9)]"
        style={{
          width: indicatorStyle.width,
          transform: indicatorStyle.transform,
          top: '4px',
          left: '0px',
        }}
      />

      {/* Tab buttons */}

      {
        divValues.map((div) => {
            return (
                <div key={div.id} id={div.id} className={`relative z-10 ${activeTab === div.id ? 'hover:bg-[#28292F]' : 'hover:bg-[#171717]/80'} rounded-full p-2 cursor-pointer flex-1 text-center transition-colors duration-300`}
                onClick={() => setActiveTab(div.id)}> 
                    <a href='#' className={activeTab === `${div.id}` ? 'text-white' : 'text-gray-400'}>{div.name}</a>
                </div>
            )
        }) 
      }
      
    </nav>
  );
}

