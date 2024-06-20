import React, { PropsWithChildren, useContext } from 'react'
import Context from '../../Context/Context'

const Msgsuccess = ({children}: PropsWithChildren) => {

    const {msgsuccess} = useContext(Context)

  return (
    <div>
        {msgsuccess && <p className='font-medium text-base text-success'>{msgsuccess || children}</p>}
    </div>
  )
}

export default Msgsuccess
