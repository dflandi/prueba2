import'./Navbar.css'
import { NavLink } from 'react-router-dom';
export default function Navbar(){

    return(
        <ul>
            <li>
                <NavLink to={"/alumno"} classname="navLink">
                    Niños
                </NavLink>
            </li>
            <li>
                <NavLink to={"/Actividades"} className="navlink">
                    Actividades

                </NavLink>
            </li>
            <li>
                <NavLink to={"/Logros"} className="navlink">
                    Logros

                </NavLink>
            </li>
        </ul>
    );
}