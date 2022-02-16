import {Link} from "react-router-dom";
import "./navbar.css";
function Navbar(){
    return(
<>
<div className="header">
<Link className="home"to="/">Home</Link>
<Link className="fav"to="/favourite">favourite</Link>
</div>
</>
    );
}
export default Navbar;