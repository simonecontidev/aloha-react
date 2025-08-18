import "./Navbar.css";
import Link from './Link.jsx';

function Navbar(){
const x = 1;


    return (
<>  
<div className={`box rounded ${x < 10 ? "rotated" : ""}`}>x è {x}</div>


        <ul>
            <li><Link></Link></li>
            <li><Link></Link></li>
            <li><Link></Link></li>
        </ul>
    </>
    )
}
export default Navbar;
