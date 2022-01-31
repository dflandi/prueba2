import './Alumno.css'
function Alumno(props){
    return(
        
        //JSX
        <div className='caja'>
        <h1 className='nombreAlumno'>{props.idCampeon} </h1>
        <h1 className='nombre'>{props.nombre} </h1>
        <p className='detalle'>{props.proviene}</p>
       
        </div>
    );

}
export default Alumno;