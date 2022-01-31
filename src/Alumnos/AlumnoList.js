function AlumnoList(props){
    return(
        <table>
        <thead >
          <tr>
            <th >Id_alumno</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Edad</th>
         
          </tr>
        </thead>
        <tbody>
        
            {props.children}
        
            </tbody>
      </table>
    );
    }
    
    export default AlumnoList