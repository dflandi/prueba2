import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import AlumnoPage from './Alumnos/AlumnoPage';
import AlumnoCreate from './Alumnos/AlumnoCreate';
import Navbar from './Actividades/Actividades';
import ActividadesPage from './Actividades/ActividadesPage';
import Actividades from "./Actividades/Actividades"
import { getListAlumno } from './service/AlumnoService';



function App() {

 

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/alumno" element={<AlumnoPage />} />
        
        <Route path="/actividades" element= {<AlumnoPage />}/>
        <Route path="/createalumno" element= {<AlumnoCreate />}/> 

        
  
        
        
      </Routes>
    </BrowserRouter>   
  );
}

export default App;