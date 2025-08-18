import "./Navbar.css";
import Link from './Link.jsx';

function Navbar(){
const x = 11;


    return (
<>  
<div className={`rounded-lg w-72 h-72 ${x < 10 ? "bg-red-500 rotate-45" : " bg-sky-500"}`}>x è {x}</div>


        <ul>
            <li><Link></Link></li>
            <li><Link></Link></li>
            <li><Link></Link></li>
        </ul>
    </>
    )
}
export default Navbar;
