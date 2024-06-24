import React, { useState } from 'react';
import { FaCartPlus } from 'react-icons/fa';
import Button from '../Button/Button'; // Certifique-se de importar corretamente o componente de botão aqui
import './styles.css';

interface ImageProductProps {
  src: string;
  alt: string;
  add: () => void; // Função para adicionar produto ao carrinho
}

const ImageProduct: React.FC<ImageProductProps> = ({ src, alt, add }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative group image-container"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={src} alt={alt} className="w-productwidth h-96 rounded-lg shadow-md" />

      {hovered && (
        <div className="absolute inset-0 flex items-center justify-center rounded-lg transition-opacity duration-1000 opacity-100 group-hover:opacity-100">
          <div className='z-30'>
            <Button className="text-white px-4 py-2 rounded-lg flex items-center w-buttonwidth mt-72 space-x-2 hover:bg-visible transition-colors duration-1000" onClick={add}>
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
