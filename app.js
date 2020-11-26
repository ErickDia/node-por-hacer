const argv = require('./config/yargs').argv;
const {crear,getListado,actualizar,borrar} = require('./por-hacer/por-hacer');
require('colors');

let comando = argv._[0];
switch(comando){
    case 'crear':
        console.log(crear(argv.descripcion));
        break;
    case 'listar':
        console.log(argv);
        let listado = getListado(argv.c);
        for (let tarea of listado){
            console.log('========= por hacer ========='.green);
            console.log(tarea.descripcion);
            console.log('Estado: ' , tarea.completado);
            console.log('============================'.green);
        }
        break;
    case 'actualizar':
        actualizar(argv.descripcion,argv.completado)
        break;
    case 'borrar':
        borrar(argv.descripcion)
        break;
    default:
        console.log('comando no reconocido');
  
}

