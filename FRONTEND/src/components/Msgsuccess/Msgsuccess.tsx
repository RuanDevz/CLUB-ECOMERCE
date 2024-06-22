import React, { PropsWithChildren, useContext } from 'react'
import ProductContext from '../../types/ContextType'

const Msgsuccess = ({children}: PropsWithChildren) => {

    const {msgsuccess} = useContext(ProductContext)

  return (
    <div>
        {msgsuccess && <p className='font-medium text-base text-success'>{msgsuccess || children}</p>}
    </div>
  )
}

export default Msgsuccess
