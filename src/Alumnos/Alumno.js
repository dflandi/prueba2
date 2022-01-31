import { Link } from "react-router-dom";
import './Alumno.css'

function Alumno(props){
    return(
        <tr>        
            <td> {props.itemCampeon.id}</td>
            <td> {props.itemCampeon.nombre}</td>
            <td> {props.itemCampeon.apellido}</td>
            <td> {props.itemCampeon.edad}</td>
            <td><Link to={`/updatecampeon/${props.itemCampeon.id}`}>Editar</Link></td>
        </tr>
    
    );
    
    }
    export default Alumno