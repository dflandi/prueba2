import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { findByIdAlumno, updateAlumno} from '../service/AlumnoService'
import './Alumno.css'


function AlumnoPage() {
    const {alumnoId} = useParams();
    const [alumno, setAlumno] = useState({id_alumno:'', nombre:'',apellido:'', edad:''});

    const onSubmit = (event) => {
        event.preventDefault();
        updateAlumno(alumno);
    }
    const onChange = (event) => {
        if(event.target.name==='id_alumno')
        setAlumno({...alumno,id_alumno:event.target.value})
        if(event.target.name==='nombre')
        setAlumno({...alumno,nombre:event.target.value})
        if(event.target.name==='apellido')
        setAlumno({...alumno,apellido:event.target.value})
        if(event.target.name==='edad')
        setAlumno({...alumno,edad:event.target.value})
       
    }
    useEffect(() =>  {
    
    findByIdAlumno(AlumnoId).then(data =>{
        setAlumno(data);
    }
        
    

    );
},[AlumnoId]);


return(
    <div className="boxUpdate">
      <form onSubmit={onSubmit} className="boxFormUpdate">
      <h2> Actulizar Alumno</h2>
      
      <input 
      className="formUpdateInput"
          name="id_alumno"
          placeholder="Id_alumno"
          value={alumno.id_alumno}
          onChange={onChange}
      />
       <input className="formUpdateInput"
          name="nombre"
          placeholder="nombre"
          value={campeon.nombre}
          onChange={onChange}
      />
       <input className="formUpdateInput"
          name="apellido"
          placeholder="apellido"
          value={campeon.apellido}
          onChange={onChange}
      />
      <input className="formUpdateInput"
          name="edad"
          placeholder="edad"
          value={campeon.edad}
          onChange={onChange}
      />
         <button type="submit" className="formUpdateBtn">Guardar</button>
         </form>

    </div>
);
}
export default AlumnoPage;