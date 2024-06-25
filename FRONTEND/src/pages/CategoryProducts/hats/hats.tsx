import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import MenubarLogged from '../../../components/Menubar/MenubarLogged';
import ImageProduct from '../../../components/ImageProduct/ImageProduct';
import Spacer from '../../../components/Spacer/Spacer';
import Header from '../../../components/Header/Header';
import Backpage from '../../Backpage/Backpage';
import Context from '../../../context/Context';
import Product from '../../../types/Product.types';

const Hats = () => {
    const [hats, setHats] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const { products, setProducts,totalprice, setTotalprice } = useContext(Context)

    const userlogged = sessionStorage.getItem('token');
    const GoogleLogged = sessionStorage.getItem('Googletoken');

    const fetchHats = () => {
        setLoading(true);
        axios.get(`${import.meta.env.VITE_API_URL}/products/hats`)
            .then((response) => {
                setHats(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching hats:', error);
                setLoading(false);
            });
    };

    const addProductToContext = (product: Product) => {
        const newProducts = [...products, product];
        setProducts(newProducts);
        console.log(newProducts)
        setTotalprice(product.price)
    };

    useEffect(() => {
        fetchHats();
    }, []);

    return (
        <div>
            {userlogged || GoogleLogged ? <MenubarLogged /> : <Header />}
            <main>
                <Backpage>Explorar Chapéus</Backpage>
                <section className='max-w-default flex justify-around items-center gap-10 flex-wrap mx-auto'>
                    {loading ? (
                        <Spacer />
                    ) : (
                        <>
                            {hats.map((hat) => (
                                <div key={hat.id}>
                                    <ImageProduct src={hat.imageUrl} alt={hat.name} add={() => addProductToContext(hat)} />
                                    <div className='flex justify-between py-2'>
                                        <p className='font-medium text-base text-center'>{hat.name}</p>
                                        <p className='font-medium text-base text-center'>R${hat.price}</p>
                                    </div>
                                </div>
                            ))}
                        </>
                    )}
                </section>
            </main>
        </div>
    );
};

export default Hats;