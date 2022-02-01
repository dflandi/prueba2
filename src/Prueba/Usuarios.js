import { Link } from "react-router-dom";
function Usuarios(props){
    return(
        <tr>        
            <td> {props.itemUsuarios.id_alumno}</td>
            <td> {props.itemUsuarios.username}</td>
            <td> {props.itemUsuarios.password}</td>
            <td> {props.itemUsuarios.status}</td>
            
        </tr>
    
    );
    
    }
    export default Usuarios