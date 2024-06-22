import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Categories.css'; 
import CategoryItem from '../CategoryItem/CategoryItem'; 
import Category from '../../types/Categories.types';
import Loader from '../Loader/Loader';

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  const [loading, setLoading] = useState<boolean>(false)

  const fetchCategories = async () => {
    try {
      setLoading(true)
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/categories`);
      console.log(response.data);
      setCategories(response.data);
      setLoading(false)
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
        {loading ? (
          <div className='flex justify-center items-center h-screen w-screen'>
            <Loader/>
          </div>
        ):(
          <>
          {categories.map((category) =>(
          <div key={category.id}>
            <CategoryItem category={category} />
          </div>
        ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Categories;
