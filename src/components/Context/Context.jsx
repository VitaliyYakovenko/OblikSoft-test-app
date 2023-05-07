import { createContext , useContext, useState , useEffect} from "react";
import { getAllNotes } from '../../utils/getAllNotes';

const ContextState = createContext();

export const useCustomContext = () =>{
    return useContext(ContextState)
};


export default function Context({children}) {
    const [notes, setNotes] = useState([]);
    
    useEffect(() => {
        getAllNotes().then(resp => setNotes(resp));
    },[])
     
    
    return (
    <ContextState.Provider value={{ notes: notes, setNotes: setNotes }}>
     {children}       
     </ContextState.Provider>
    )
   
}