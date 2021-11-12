import { Link } from "react-router-dom";

const  Navbar = () => {
    return ( 
        <nav className="navbar">
            <div className="homeTitle"><h1>Magazin Electronice</h1></div>
        <div className="links">
            <Link to="/">Home</Link>
            <Link to="/create" style={{
                color: "white",
                backgroundColor: "#f1356d",
                borderRadius: '8px'

            }}>New Product</Link>
        </div>
        </nav>
     );
}
 
export default Navbar;