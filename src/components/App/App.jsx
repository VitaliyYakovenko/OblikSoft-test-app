import Context from '../Context/Context';
import Sidebar from '../Sidebar/Sidebar';
import SearchBox from "../SearchBox/SearchBox";
import Workspace from '../Workspace/Workspace';
import ListItem from '../ListItem/ListItem';
// import { getAllNotes } from '../../utils/getAllNotes';


       
export default function App() {

    // getAllNotes().then(console.log);

    return (
        <Context>
        <header>
         <Sidebar />
        <SearchBox/>
        </header>
        <main>
        <ul>
        <ListItem/>
        </ul>    
        <Workspace />
        </main>   
        </Context>
)}