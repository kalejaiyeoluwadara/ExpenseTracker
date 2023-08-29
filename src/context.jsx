import React,{useContext} from 'react'
const AppContext = React.createContext();


function AppProvider({children}) {
  return (
    <AppContext.Provider>
        {children}
    </AppContext.Provider>
  )
}
const useGlobal = () =>{
    return(
        useContext(AppContext)
    )
}

export default AppProvider
