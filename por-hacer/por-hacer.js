const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('db/data.json',data,(err)=>{
        if (err) return err;
        return console.log('correcto')
    })

    
}

const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }
    
}


const crear = (descripcion) => {
    cargarDB()
    let porHacer = {
        descripcion,
        completado:false
    };
    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
}

const getListado = (completado = false) => {
    cargarDB();
    if (completado) {
        listadoPorHacer = listadoPorHacer.filter(tarea => tarea.completado !== false)
    }
    return listadoPorHacer
}

const actualizar = (descripcion, completado = true) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    if (index != -1){
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true
    }else{
        return false
    }
}
const borrar = (descripcion) => {
    cargarDB();
    let nuevoListado = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion)

    if (listadoPorHacer.length === nuevoListado.length){
        return false
    }else{
        listadoPorHacer = nuevoListado;
        guardarDB();
        return true
    }
    
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}