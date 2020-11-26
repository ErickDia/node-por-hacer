const descripcion = {
    demand:true,
    alias:'d',
    desc:'descripcion de la tarea por hacer'
}

const completado = {
    alias:'c',
    default:true,
    desc: 'marca como completado o pendiente la tarea'
}



const argv = require('yargs')
    .command('crear','crea un elemento',{descripcion})
    .command('actualizar','actualiza el estado completado de la tarea',{descripcion,completado})
    .command('borrar','borrar una tarea',{descripcion})
    .help()
    .argv;


module.exports = {
    argv
}