import React, { useState, useEffect } from "react";
import Alumno from "./Alumno";
import AlumnoList from "./AlumnoList";
import { getListAlumno, createAlumno } from '../service/AlumnoService'
import { Link } from "react-router-dom";

function AlumnoPage() {



  const [niños, setNiños] = useState([]);
  const [id_alumno, setId_alumno] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [edad, setEdad] = useState('');
  

 
  const onSubmit = (event) => {
    event.preventDefault();
     const alumno={
       id_alumno:id_alumno,
       nombre:nombre,
       apellido:apellido,
     }
    
    createAlumno(alumno);
  

  }
  const onChange = (event) => {
 

  if(event.target.name==='id_alumno'){
   setId_alumno(event.target.value);

  }
  if(event.target.name==='nombre'){
    setNombre(event.target.value);

  }
  if(event.target.name==='apellido'){
  setApellido(event.target.value);
    
  if(event.target.name==='edad'){
    setEdad(event.target.value);

  }


  }

 
  onChange(() => {
    getListAlumno().then(data => {
      setNiños(data);
    }
    );
  }, []);

  return (
    <div>
      <h2>Lista de Niñoa</h2>
      <Link to='/createalumno'>
          Crear      
      </Link>
      <form onSubmit={onSubmit}>
        <label>
          id_alumno
          <input 
            name="id_alumno"
            value={id_alumno}
            onChange={onChange}
        
            
          />
        </label>
        <label>
          nombre
          <input 
            name="nombre"
            value={nombre}
            onChange={onChange}
        
            
          />
        </label>
        <label>
        apellido
          <input
            name="apellido"
            value={apellido}
            onChange={onChange}
          
          />
        </label>
        <label>
       edad
          <input
            name="edad"
            value={edad}
            onChange={onChange}
          
          />
        </label>
        
       

        <button type="submint"> Guardar </button>
      </form>
      <AlumnoList>
        {
          niños.map(item =>
            <Alumno
              key={item.id_alumno}
              itemAlumno={item} />
          )
        }
      </AlumnoList>
    </div>
  );
}
}

export default AlumnoPage;