import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Categories.css'; // Importe o arquivo de estilos
import CategoryItem from '../CategoryItem/CategoryItem'; // Importe o componente CategoryItem
import Category from '../../types/Categories.types';

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  const fetchCategories = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/categories`);
      console.log(response.data);
      setCategories(response.data);
    } catch (error) {
      console.error("There was an error fetching the categories!", error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className='categories-container'>
      <div className='categories-content'>
        {categories.map((category) =>(
          <div>
            <CategoryItem category={category} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;