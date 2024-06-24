import React, { useState } from 'react';
import Title from '../../components/Title/Title';
import Header from '../../components/Header/Header';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { FaArrowRightToBracket } from 'react-icons/fa6';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { CircularProgress } from '@nextui-org/react';

const Register = () => {
  const navigate = useNavigate();

  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmpassword] = useState('');
  const [circularloading, setCircularloading] = useState<boolean>(false);
  const [error, setError] = useState<string>(''); // Estado para exibir erros
  const [msgsuccess, setMsgsuccess] = useState<string>(''); // Estado para exibir sucesso

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleClick = async () => {
    setError('');
    setMsgsuccess('');

    if (!nome || !sobrenome || !email || !password || !confirmpassword) {
      setError('Por favor, preencha todos os campos.');
      return;
    }

    if (!emailRegex.test(email)) {
      setError('Formato de e-mail inválido.');
      return;
    }

    if (password !== confirmpassword) {
      setError('As senhas não coincidem.');
      return;
    }

    try {
      setCircularloading(true);
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/auth/register`, {
        nome,
        sobrenome,
        email,
        password,
      });
      setMsgsuccess('Cadastro realizado com sucesso!');
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } catch (error) {
      setError('Ocorreu um erro ao tentar registrar. Por favor, tente novamente.');
      console.error(error);
    } finally {
      setCircularloading(false);
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
            <p className='text-red-500 font-bold'>{error}</p>
            <p className='text-green-500 font-bold'>{msgsuccess}</p>
          </div>
        </form>
        <Button onClick={handleClick} className='flex items-center mt-7'>
          {circularloading ? <CircularProgress /> : <><FaArrowRightToBracket /> Criar Conta</>}
        </Button>
      </main>
    </div>
  );
};

export default Register;
