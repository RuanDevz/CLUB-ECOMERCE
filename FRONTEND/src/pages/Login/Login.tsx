import React, { useContext, useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import { FaGoogle } from "react-icons/fa";
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import { FaArrowRightToBracket } from "react-icons/fa6";
import Title from '../../components/Title/Title'
import Context from '../../Context/Context';
import axios from 'axios'



const Login = () => {

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [accessToken, setAccessToken] = useState<string>('')

  const {setMsgsuccess} = useContext(Context)

  useEffect(() =>{
    setMsgsuccess('')
  },[])

  const configlogin = {
    email: email,
    password: password
  }

  const handlelogin = async (e) =>{
    e.preventDefault()
    await axios.post(`${import.meta.env.VITE_API_URL}/auth/login`,configlogin)
    .then((response) =>{
      setAccessToken(response.data.token)
    })
  }

  sessionStorage.setItem('Token', accessToken)

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
            <Input onChange={(e) => setEmail(e.target.value)} label='E-mail' type='text' placeholder='Digite seu e-mail'/>
            <Input onChange={(e) => setPassword(e.target.value)} label='Senha' type='password' placeholder='Digite sua senha'/>
            <Button onClick={handlelogin}>
                <FaArrowRightToBracket/>
                Entrar
            </Button>
        </form>
      </div>
    </div>
  )
}

export default Login
