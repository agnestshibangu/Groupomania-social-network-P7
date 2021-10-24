import { createContext, useState, useEffect} from "react";
import Axios from "axios";

export const DataContext = createContext({}); 

export const DataProvider = ({ children }) => {

 const [dataUser, setDataUser] = useState([])
 const LStoken = localStorage.getItem('token')
 const userId = localStorage.getItem('id')
// const isModeraror = localStorage.getItem('moderator')


useEffect(() => {
    Axios.get(`http://localhost:3001/api/user/${userId}`)
    .then((response) => {
        console.log(response.data)
        setDataUser(response.data)
    })
}, [])



    return (
        <DataContext.Provider value={{
            dataUser, LStoken
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext;