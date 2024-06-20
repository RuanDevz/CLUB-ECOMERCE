import React, { useContext } from 'react'
import HeaderLogged from '../HeaderLogged/HeaderLogged'
import Categories from '../Categories/Categories'
import Context from '../../Context/Context'

const DashboardLogged = () => {

  const {accessToken} = useContext(Context)

  return (
    <>
        <HeaderLogged/>
        <Categories/>
    </>
  )
}

export default DashboardLogged
