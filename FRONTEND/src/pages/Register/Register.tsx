import React from 'react'
import Title from '../../components/Title/Title'
import Header from '../../components/Header/Header'
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import { FaArrowRightToBracket } from "react-icons/fa6";

const Register = () => {
  return (
    <div>
      <Header/>
      <main className='flex justify-center items-center flex-col mt-10'>
        <Title className='border-b border-dark'>Crie a sua conta</Title>
        <form className='mt-16 flex flex-col gap-5 w-96' action="">
          <Input label='Nome' type='text' placeholder='Digite seu nome'/>

          <Input label='Sobrenome' type='etxt' placeholder='Digite seu sobrenome'/>

          <Input label='E-mail' type='email' placeholder='Digite seu e-mail'/>

          <Input label='Senha' type='password' placeholder='Digite sua senha'/>

          <Input label='Confirmação de Senha' type='password' placeholder='Confirme sua senha'/>
        </form>
        <Button className='flex items-center mt-7'>
          <FaArrowRightToBracket/>
          Criar Conta
        </Button>
      </main>
    </div>
  )
}

export default Register
