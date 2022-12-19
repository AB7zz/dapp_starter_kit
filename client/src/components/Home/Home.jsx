import React, {useContext } from 'react'
import { DataContext } from '../../DataContext'

const Home = () => {
    const { web3Handler, account } = useContext(DataContext)
    return (
    <>    
        {account ? <button href="/profile">{account}</button> : <button onClick={web3Handler}>Login</button>}     
    </>      
  )
}

export default Home