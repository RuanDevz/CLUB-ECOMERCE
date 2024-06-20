import React, { PropsWithChildren, useContext, useState } from 'react';
import Title from '../../components/Title/Title';
import Header from '../../components/Header/Header';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { FaArrowRightToBracket } from 'react-icons/fa6';
import axios from 'axios';
import Context from '../../Context/Context';
import Error from '../../components/Error/Error';
import { useNavigate } from 'react-router-dom';
import Msgsuccess from '../../components/Msgsuccess/Msgsuccess';

const Register = () => {


  const navigate = useNavigate()

  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmpassword] = useState('');

  const { error, setError, msgsuccess, setMsgsuccess } = useContext(Context);

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const configRegister = {
    nome: nome,
    sobrenome: sobrenome,
    email: email,
    password: password
  };

  const handleClick = async () => {
    if (password !== confirmpassword) {
      setError('As senhas precisam ser iguais');
      return;
    } else if (nome.length < 3) {
      setError('Seu nome precisa ter pelo menos 3 caracteres');
      return;
    } else if (!emailRegex.test(email)) {
      setError('Insira um e-mail válido');
      return;
    } else {
      setError('');
      try {
        await axios.post(`${import.meta.env.VITE_API_URL}/auth/register`, configRegister);
        setMsgsuccess('Usuario criado!')
        setTimeout(() => {
          navigate('/login')
        }, 2000);
      } catch (error) {
        setError('Email já cadastrado!');
        console.error(error);
      }
    }
  };

  return (
    <div>
      <Header />
      <main className='flex justify-center items-center flex-col mt-1'>
        <Title className='border-b border-dark'>Crie a sua conta</Title>
        <form className='mt-16 flex flex-col gap-5 w-96' onSubmit={(e) => e.preventDefault()}>
          <Input onChange={(e) => setNome(e.target.value)} label='Nome' type='text' placeholder='Digite seu nome' />

          <Input onChange={(e) => setSobrenome(e.target.value)} label='Sobrenome' type='text' placeholder='Digite seu sobrenome' />

          <Input onChange={(e) => setEmail(e.target.value)} label='E-mail' type='email' placeholder='Digite seu e-mail' />

          <Input onChange={(e) => setPassword(e.target.value)} label='Senha' type='password' placeholder='Digite sua senha' />

          <Input onChange={(e) => setConfirmpassword(e.target.value)} label='Confirmação de Senha' type='password' placeholder='Confirme sua senha' />
            <div className='flex justify-center items-center'>
              <Error>{error}</Error>
              <Msgsuccess>{msgsuccess}</Msgsuccess>
            </div>
        </form>
        <Button onClick={handleClick} className='flex items-center mt-7'>
          <FaArrowRightToBracket />
          Criar Conta
        </Button>
      </main>
    </div>
  );
};

export default Register;
