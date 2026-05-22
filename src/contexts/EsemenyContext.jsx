import { createContext, useState, useEffect } from "react";
import axios from "axios";


export const EsemenyContext = createContext();
export const EsemenyProvider = ({children}) => {
    const[esemenyek,setEsemenyek] = useState([]);
    const[kategoriak,setKategoriak] = useState([]);
    const[kivalasztott,setKivalasztott] = useState(null);
    const[kategoriakFilter,setKategoriakFilter] = useState(" ");


    useEffect(() => {
        axios.get("http://localhost:8000/api/esemenyek")
        .then(res => setEsemenyek(res.data))
        .catch(err => console.log(err));
    },[]);

    return(
        <EsemenyContext.Provider value={{
            esemenyek,
            kategoriak,
            setKategoriak,
            kivalasztott,
            setKivalasztott,
            kategoriakFilter,
            setKategoriakFilter
        }}>
            {children}
            </EsemenyContext.Provider>


    )
}
