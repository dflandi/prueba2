import React, {useState } from "react"
import {createAlumno} from '../service/AlumnoService'

function AlumnoCreate(){
    const[id_alumno, setId_alumno]= useState('');
    const[nombre, setNombre]= useState('');
    const[apellido, setApellido]= useState('');
    const[edad, setEdad]= useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        const objeto = {
            id_alumno: id_alumno,
            nombre: nombre,
            apellido: apellido,
            edad: edad,

        }
        createAlumno(objeto)


    }
    const onChange = (event) =>{
        if(event.target.name==='Id_alumno')
        {
        setId_alumno(event.target.value)
        }
        if(event.target.name==='nombre')
        setNombre(event.target.value)
        if(event.target.name==='apellido')
        setApellido(event.target.value)
        if(event.target.name==='edad')
        setEdad(event.target.value)

    }
    return(
        <div>
            <h2>Crear Niños</h2>
            <form onSubmit={onSubmit}> 
                <label>
                    Id_alumno
                    <input
                    name= "id_alumno"
                    value={id_alumno}
                    onChange={onChange}
                    />

                </label>
                <label>
                    Nombre
                    <input
                    name= "nombre"
                    value={nombre}
                    onChange={onChange}
                    />

                </label>
                <label>
                   Apellido
                    <input
                    name= "apellido"
                    value={apellido}
                    onChange={onChange}
                    />

                </label>
                <label>
                    Edad
                    <input
                    name= "edad"
                    value={edad}
                    onChange={onChange}
                    />

                </label>
                <button type="submit">Guardar</button>
                </form>
        </div>
    );
    }
  

export default AlumnoCreate;