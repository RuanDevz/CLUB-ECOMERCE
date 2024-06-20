import React, { PropsWithChildren, useContext } from 'react'
import Context from '../../Context/Context'

const Error = ({children}: PropsWithChildren) => {

    const {error} = useContext(Context)
  return (
    <div>
      {error && <p className='font-medium text-base text-error'>{error || children}</p>}
    </div>
  )
}

export default Error
