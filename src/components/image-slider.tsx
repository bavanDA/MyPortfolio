import React, { useState } from "react";

interface ImageSliderProps {
  images: string[];  
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);  

  const handleImageClick = (image: string) => {
    setSelectedImage(image);  
  };

  const closeImage = () => {
    setSelectedImage(null);  
  };

  return (
    <div>
      <div className="p-6 border-t border-gray-200 dark:border-gray-700">
        <h5 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">
          Project Images
        </h5>
        <div className="flex overflow-x-auto pb-4 space-x-4">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Project Image ${index + 1}`}
              className="w-32 object-cover rounded-lg shadow-lg transition-transform hover:scale-105 border-2 border-transparent hover:border-gray-500 dark:hover:border-gray-400 cursor-pointer"
              onClick={() => handleImageClick(img)} 
            />
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50"
          onClick={closeImage} 
        >
          <img
            src={selectedImage}
            alt="Selected Image"
            className="w-64  object-contain rounded-lg"
          />
        </div>
      )}
    </div>
  );
};

export default ImageSlider;
