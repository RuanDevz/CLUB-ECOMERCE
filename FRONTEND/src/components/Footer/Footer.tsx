import React from 'react';
import { FaInstagram, FaCreditCard, FaTruck, FaWhatsapp, FaLinkedinIn, FaPaperPlane, FaConnectdevelop } from 'react-icons/fa'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { TfiWorld } from "react-icons/tfi";




export default function Footer() {
  return (
    <>
      <div className='flex w-screen flex-col items-center justify-center font-primary bg-dark text-primary mt-20'>
        <h1 className='text-center text-4xl font-bold font-primary py-10'>CLUB CLOTHING</h1>
        <div className='flex w-[90%] justify-around items-center flex-wrap my-8'>
          <div className='my-10 flex justify-center lg:flex w-[350px] items-center'>
            <FaTruck className='text-4xl mr-3 text-segundary' />
            <div>
              <h1 className='text-xl text-primary font-medium'>Serviço de Entrega</h1>
              <p className='text-xl text-primary font-medium'>Entregamos em todo país.</p>
            </div>
          </div>

          <div className='my-10 flex justify-center lg:flex w-[350px] items-center'>
            <FaCreditCard className='text-4xl mr-3 text-segundary' />
            <div>
              <h1 className='text-xl text-primary font-medium'>Pagamento  facilitado</h1>
              <p className='text-xl text-primary font-medium'>Paypal ou Cartão de Crédito.</p>
            </div>
          </div>

          <div className='my-10 flex justify-center lg:flex w-[350px] items-center'>
            <FaWhatsapp className='text-4xl mr-3 text-segundary' />
            <div>
              <h1 className='text-xl text-primary font-medium'>Compre pelo Whatsapp</h1>
              <p className='text-xl text-primary font-medium'>Estamos sempre prontos</p>
            </div>
          </div>
        </div>
        <h2 className='text-center font-bold text-3xl pt-20'>Redes Sociais</h2>
        <div className='flex-col lg:flex justify-center items-center gap-40 py-10 lg:flex-row'>
          <span className='my-10 flex lg:flex items-center gap-3  text-2xl cursor-pointer'>
          <FaGithub/>
          <span className='hover:text-segundary transition-all 4s'><a href="https://github.com/RuanDevz" target='_blank'>Github</a></span>
          </span>
          <span className='my-10 flex lg:flex items-center gap-3  text-2xl cursor-pointer'><FaLinkedin/><span className='hover:text-segundary transition-all 4s'><a href="https://www.linkedin.com/in/ruan-batista-26790b1b8/" target='_blank'>Linkedin</a></span></span>
          <span className='my-10 flex lg:flex items-center gap-3  text-2xl cursor-pointer'><TfiWorld/><span className='hover:text-segundary transition-all 4s'><a href="https://portfolio-jraj.vercel.app/" target='_blank'>Portfolio</a></span></span>
        </div>
        <div className='flex-col text-xs text-center py-3 lg:flex justify-around items-center pt-20 mb-3 lg:text-base'>
          <p>COPYRIGHT © CLUB CLOTHING - 2024. TODOS OS DIREITOS RESERVADOS.</p>
          <p>Desenvolvido por <a className='hover:underline' href="https://www.linkedin.com/in/ruan-batista-26790b1b8/" target='_blank'><strong>Ruan</strong></a></p>
        </div>
      </div>
    </>
  )
}