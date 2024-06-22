import React, { useContext } from 'react'
import Menubar from '../Menubar/Menubar'
import Categories from '../Categories/Categories'
import Context from '../../Context/Context'

const DashboardLogged = () => {

  const {accessToken} = useContext(Context)

  return (
    <>
        <Menubar/>
        <Categories/>
    </>
  )
}

export default DashboardLogged
