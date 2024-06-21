import React from 'react';
import { useState } from 'react';
import { FaCartPlus } from 'react-icons/fa';
import Button from '../Button/Button'; // Importe seu componente de botão aqui
import './styles.css'

const ImageProduct = ({ src, alt }: { src: string; alt: string }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative group image-container"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={src} alt={alt} className="w-productwidth h-96 rounded-lg shadow-md" />

      {hovered && (
        <div className="absolute inset-0 flex items-center justify-center  rounded-lg transition-opacity duration-1000 opacity-100 group-hover:opacity-100 ">
          <div className='z-50'>
            <Button className="text-white px-4 py-2 rounded-lg flex items-center w-64 mt-72 space-x-2 hover:bg-gray-950 transition-colors duration-1000">
            <FaCartPlus />
            <span>Adicionar ao carrinho</span>
          </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageProduct;
