
import { useCustomContext } from "../Context/Context"


export default function ListItem() {
    

    const { notes } = useCustomContext();
    
         
    return (
        <>
            <div>hello</div>
        {/* {notes.map(note => <li key={note}>{note}</li>)} */}
        </>
    )    
}