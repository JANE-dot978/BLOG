import {Link} from "react-router-dom";
const Navbar = () => {
    return (
        <nav className="navbar">
            <h2>Blog post</h2>
            <div>
                <Link to="/">HOME</Link>
                 <Link to="/Create">NEWBLOG</Link>
                 <Link to="/NOTFOUND">NOTFOUND</Link>
                 <Link to="/Blog-details/:id">BLOGDETAIL</Link>
            </div>
        </nav>
    );
}
export default Navbar;