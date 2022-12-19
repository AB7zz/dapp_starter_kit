import React, {useState} from 'react'
import { ethers } from 'ethers';
// import TestAbi from './contractsData/Test.json'
// import TestAddress from './contractsData/Test-address.json'

export const DataContext = React.createContext()

export const DataContextProvider = ({children}) => {
    const [account, setAccount] = useState(null)
    // const [test, setTest] = useState({})

  
    const web3Handler = async() => {
      const accounts = await window.ethereum.request({method: 'eth_requestAccounts'})
      setAccount(accounts[0])
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const signer = provider.getSigner()

      window.ethereum.on('chainChanged', () => {
        window.location.reload()
      })

      window.ethereum.on('accountsChanged', async function(accounts){
        setAccount(accounts[0])
        await web3Handler()
      })
      loadContracts(signer)
    }

  const loadContracts = async(signer) => {
    // const test = new ethers.Contract(TestAddress.address, TestAbi.abi, signer)
    // setTest(test)
  }
    return(
        <>
            <DataContext.Provider
            value={{
                account,
                test,
                web3Handler
            }}
            >
                {children}
            </DataContext.Provider>
        </>
    )
}