import React, { FormEvent, useContext, useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import { FaGoogle } from 'react-icons/fa';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import { FaArrowRightToBracket } from 'react-icons/fa6';
import Title from '../../components/Title/Title';
import axios from 'axios';
import { useGoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import Error from '../../components/Error/Error';
import {CircularProgress} from "@nextui-org/react";
import ProductContext from '../../types/ContextType';

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const [circularloading, setCircularloading] = useState<boolean>(false)

  const { setMsgsuccess, setError, accessToken, setAccessToken } = useContext(ProductContext);

  useEffect(() => {
    setMsgsuccess('');
  }, [setMsgsuccess]);

  const configlogin = {
    email: email,
    password: password,
  };

  const handlelogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!emailRegex.test(email)) {
      return setError('Insira um email válido');
    } else if (password.length < 3) {
      return setError('Insira uma senha válida');
    } else {
      setError('');
      try {
        setCircularloading(true)
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/auth/login`, configlogin);
        const token = response.data.token;
        setAccessToken(token);
        sessionStorage.setItem('token', token);
        navigate('/');
        setCircularloading(false)
      } catch (err) {
        setError('Credenciais inválidas');
        console.log(err);
      }finally{
        setCircularloading(false)
      }
    }
  };


  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      const token = tokenResponse.access_token;
      setAccessToken(token);
      sessionStorage.setItem('Googletoken', token);
      navigate('/');
    },
    onError: (errorResponse) => {
      console.error(errorResponse);
    },
  });

  useEffect(() => {
    if (accessToken) {
      sessionStorage.setItem('token', accessToken);
    }
  }, [accessToken]);

  return (
    <div>
      <Header />
      <div className=' mt-0 lg:flex justify-center items-center flex-col lg:mt-24'>
        <Title className='text-center'>Entre com sua conta</Title>
        <Button onClick={() => login()} className='max-w-80 mx-auto lg:flex items-center justify-center gap-5 bg-dark text-light rounded-lg py-3 px-4 text-base font-bold lg:max-w-96 hover:bg-hoverbutton'>
          <FaGoogle /> Entrar com o Google
        </Button>
        <p className=' w-80 mx-auto lg:text-base text-center pb-6 font-medium text-dark mt-5 border-b-2 lg:w-96 border-dark'>Ou entre com o seu e-mail</p>
        <form className='max-w-80 mx-auto lg:flex flex-col gap-10 mt-10 lg:max-w-96' onSubmit={handlelogin}>
          <Input onChange={(e) => setEmail(e.target.value)} label='E-mail' type='text' placeholder='Digite seu e-mail' />
          <Input onChange={(e) => setPassword(e.target.value)} label='Senha' type='password' placeholder='Digite sua senha' />
          <div className='flex justify-center items-center'>
            <Error />
          </div>
          <Button className='max-w-80 lg:max-w-full mt-5 lg:mt-0' type='submit'>
             {circularloading ? <CircularProgress /> : <>Entrar <FaArrowRightToBracket /></>}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
