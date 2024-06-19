import React from 'react'
import Header from '../../components/Header/Header'
import { FaGoogle } from "react-icons/fa";
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import { FaArrowRightToBracket } from "react-icons/fa6";
import Title from '../../components/Title/Title'



const Login = () => {
  return (
    <div>
      <Header/>
      <div className='flex justify-center items-center flex-col mt-24'>
        <Title>Entre com sua conta</Title>
        <Button className='flex items-center justify-center gap-5 bg-dark text-light  rounded-lg py-3 px-4 text-base font-bold w-96 hover:bg-hoverbutton'>
            <FaGoogle/> Entrar com o Google
        </Button>
        <p className=' text-base text-center pb-6 font-medium text-dark mt-5 border-b-2 w-96 border-dark'>Ou entre com o seu e-mail</p>
        <form className='flex  flex-col gap-10 mt-10 w-96' action="">
            <Input label='E-mail' type='text' placeholder='Digite seu e-mail'/>
            <Input label='Senha' type='password' placeholder='Digite sua senha'/>
            <Button>
                <FaArrowRightToBracket/>
                Entrar
            </Button>
        </form>
      </div>
    </div>
  )
}

export default Login
