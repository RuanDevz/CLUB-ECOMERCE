import React, { useEffect, useState } from 'react';
import Category from '../../types/Categories.types';
import axios from 'axios';

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
    <div className='h-full w-full flex justify-center'>
      <div className='h-full w-desktop grid grid-cols-3 gap-5 p-8'>
        {categories.map((category) => {
          return (
            <main key={category.id}>
              {/* Adicione o conteúdo da categoria aqui */}
            </main>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
