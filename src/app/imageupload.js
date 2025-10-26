'use client';

import { useRef } from "react";

export default function ImageUpload() {

  const fileInputRef = useRef(null);

    const handleButtonClick = () => {
        // When the button is clicked, trigger the hidden file input
        fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];     
        if (file) {
            console.log('Selected image:', file);
        }
    };

  return (
    <div>
        <button className="bg-transparent cursor-pointer shadow-[-2px_-2px_6px_rgba(255,255,255,0.3),6px_6px_10px_rgba(0,0,0,0.9)] rounded-full p-3 px-5 text-xs" onClick={handleButtonClick}>+ ADD IMAGE</button>
        <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleFileChange}
            style={{ display: 'none' }} // Hide the file input
        />
    </div>
  );
}   