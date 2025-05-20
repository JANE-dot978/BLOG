import {Link} from "react-router-dom";
const Navbar = () => {
    return (
        <nav className="navbar">
            <h2>Blog post</h2>
            <div>
                <Link to="/">home</Link>
                 <Link to="/CREATE">NEWBLOG</Link>
                 <Link to="/NOTFOUND">NOTFOUND</Link>
                 <Link to="BLOGDETAIL">BLOGDETAIL</Link>
            </div>

        </nav>
    );
}
export default Navbar;