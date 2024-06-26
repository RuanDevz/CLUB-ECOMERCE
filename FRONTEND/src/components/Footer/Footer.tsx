import React from 'react';
import { FaInstagram, FaCreditCard, FaTruck, FaWhatsapp, FaLinkedinIn, FaPaperPlane, FaConnectdevelop } from 'react-icons/fa'

export default function Footer() {
  return (
    <>
      <div className='flex w-screen flex-col justify-center font-primary'>

        <div className='flex w-[90%] justify-evenly flex-wrap my-8'>
          <div className='flex w-[350px] items-center'>
            <FaTruck className='text-3xl mr-3' />
            <div>
              <h1>Serviço de Entrega</h1>
              <p>Entregamos em todo país.</p>
            </div>
          </div>

          <div>
            <FaCreditCard className='text-2xl' />
            <div>
              <h1>Pagamento  facilitado</h1>
              <p>Paypal ou Cartão de Crédito.</p>
            </div>
          </div>

          <div>
            <FaWhatsapp className='text-2xl' />
            <div>
              <h1>Compre pelo Whatsapp</h1>
              <p>Estamos sempre prontos para te atender!</p>
            </div>
          </div>
        </div>

        <div className='flex w-screen justify-center mt-8 py-8 lg:gap-[6rem]'>
          <div className='w-[350px]'>
            <p>Navegação</p>
            <ul>
              <li><a target="blank" href="https://www.linkedin.com/in/ruan-batista-26790b1b8/"><FaLinkedinIn /> Ruan Batista</a></li>
            </ul>
          </div>
          <div>
            <p>Contato</p>
            <div><FaPaperPlane /> Ruanbatista1509@outlook.com</div>
          </div>
        </div>

        <div className='flex items-center justify-center'>
            <span><FaConnectdevelop /> Desenvolvido por <strong>Ruan</strong></span>
          <p>COPYRIGHT © Club Clothing - 2024. Todos os direitos reservados. </p>
        </div>
      </div>
    </>
  )
}