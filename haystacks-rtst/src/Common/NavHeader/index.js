import { Link } from "react-router-dom";


/* links to 
market solutions /market
sfr solutions /portfolio
people
published
*/
const NavHeader = () => {

    return (
        <header id="header-common">
            <nav id="nav-header">
                <Link className="nav-header-link" to="/market">Market Solutions</Link>
                <Link className="nav-header-link" to="/portfolio">SFR Solutions</Link>
                <Link className="nav-header-link" to="/people">People</Link>
                <Link className="nav-header-link" to="/published">Published</Link>
            </nav>
        </header>
    )

}

export default NavHeader