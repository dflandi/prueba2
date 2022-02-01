import Usuarios from "./Usuarios";
import UsuariosList from "./UsuariosList";
import {  createUsuarios, getListUsuarios } from '../Prueba/UsuariosService'
import { Link } from "react-router-dom";


function UsuariosPage(){
const onSubmit = (event) => {
    event.preventDefault();
     const usuarios={
       id_usuarios:id_usuarios,
       username:username,
       password:password,
       status:status,
     }
    
    createUsuarios(usuarios);
  

  }
  const onChange = (event) => {
 

  if(event.target.name==='id_usuarios'){
   setId_usuarios(event.target.value);

  }
  if(event.target.name==='username'){
    setUsername(event.target.value);

  }
  if(event.target.name==='password'){
  setPassword(event.target.value);
    
  if(event.target.name==='status'){
    setStatus(event.target.value);

  }


  }

 
  useEffect(() => {
    getListUsuarios().then(data => {
    
    }
    );
  }, []);

  return (
    <div>
      <h2>Lista de Usuarios</h2>
      <Link to='/createusuarios'>
          Crear      
      </Link>
      <form onSubmit={onSubmit}>
        <label>
          id_usuarios
          <input 
            name="id_usuarios"
            value={id_usuarios}
            onChange={onChange}
        
            
          />
        </label>
        <label>
      username
          <input 
            name="username"
            value={username}
            onChange={onChange}
        
            
          />
        </label>
        <label>
      password
          <input
            name="password"
            value={password}
            onChange={onChange}
          
          />
        </label>
        <label>
     status
          <input
            name="status"
            value={status}
            onChange={onChange}
          
          />
        </label>
        
       

        <button type="submint"> Guardar </button>
      </form>
      <UsuariosList>
        {
          niños.map(item =>
            <Usuarios
              key={item.id_usuarios}
              itemUsuario={item} />
          )
        }
      </UsuariosList>
    </div>
  );
}

}
export default UsuariosPage;