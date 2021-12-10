import { Link } from "react-router-dom";
import styles from './Components.module.css';

export const  Navbar = () => {
    return ( 
        <nav className={styles.navbar}>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <div className={styles.homeTitle}><h1>Magazin Electronice</h1></div>
        <div className={styles.links}>
            <Link to="/"><button className={styles.homeButton}><i className="fa fa-home"></i></button></Link>
            <Link to="/catalogue/searchProducts" ><button className={styles.catalogueButton}><i className="fa fa-search"></i></button></Link>
            <Link to="/create"><button className={styles.addButton}><i className="fa fa-plus-square"></i></button></Link>
            <Link to="/"><button className={styles.cartButton}><i className="fa fa-shopping-cart"></i></button></Link>
        </div>
        </nav>
     );
}