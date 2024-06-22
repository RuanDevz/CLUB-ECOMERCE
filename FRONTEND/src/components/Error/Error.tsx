import React, { PropsWithChildren, useContext } from 'react'
import ProductContext from '../../types/ContextType'

const Error = ({children}: PropsWithChildren) => {

    const {error} = useContext(ProductContext)
  return (
    <div>
      {error && <p className='font-medium text-base text-error'>{error || children}</p>}
    </div>
  )
}

export default Error
