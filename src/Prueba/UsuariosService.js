const urlCrud = 'http://localhost:3001';

const getListUsuarios = async () => {
    const response = await fetch(`${urlCrud}/usuarios`);    
    const data = await response.json();
    console.log(data)
    return data;
}
const createUsuarios = async (alumno) => {
    console.log(alumno);
    const resp = await fetch(`${urlCrud}/usuarios`, {
        method: 'POST',
        body: JSON.stringify(usuarios),
        headers: {
            'Content-type': 'application/json'
        }
    });
    return await resp.json();
}

export{
    getListUsuarios,
    createUsuarios
}