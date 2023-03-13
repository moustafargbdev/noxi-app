import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.scss';

export default function Navbar() {
    const activeLink = ({ isActive }: { isActive: boolean }) =>
        isActive ? 'active' : '';
    return (
        <nav className={classes.nav}>
            <div className={classes.brand}>
                <h2>Noxi</h2>
            </div>
            <ul className={classes.nav__links}>
                <li className={classes.linkItem}>
                    <NavLink className={activeLink} to="/">
                        Home
                    </NavLink>
                </li>
                <li className={classes.linkItem}>
                    <NavLink className={activeLink} to="movies">
                        Movies
                    </NavLink>
                </li>
                <li className={classes.linkItem}>
                    <NavLink className={activeLink} to="tv-shows">
                        Tv Shows
                    </NavLink>
                </li>
                <li className={classes.linkItem}>
                    <NavLink className={activeLink} to="people">
                        People
                    </NavLink>
                </li>
            </ul>
            <ul className={classes.nav__auth}>
                <li className={classes.linkItem}>
                    <NavLink className={activeLink} to="people">
                        Register
                    </NavLink>
                </li>
                <li className={classes.linkItem}>
                    <NavLink className={activeLink} to="movies">
                        Login
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}
