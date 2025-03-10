//definir función
function calcularEdad(fechaNacimiento) {
    var hoy = new Date(); // crea un objeto Date con la fecha y hora actual y la guarda en hoy
    var nacimiento = new Date(fechaNacimiento); // crea un objeto Date de la fecha 15 de mayo del 2000.
    var edad = hoy.getFullYear() - nacimiento.getFullYear(); //se resta el año a cada variable
    var mes = hoy.getMonth() - nacimiento.getMonth(); //obtiene el mes actual y de nacimiento para restarlos
    if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) { //Comparar meses para saber si ya pasó el cumpleaños este año y si es el mismo mes, se revisa si el día actual es mayor o igual al día de nacimiento.
        edad--; // si es false drece un dia
    }
    return edad; // si es true se mantiene la edad calculda
}
// imprimir resultado de la función
console.log("Edad: ".concat(calcularEdad("2000-05-15"), " a\u00F1os"));
