


function Persona(nombre, edad, telefono, email){
    this.nombre = nombre;
    this.edad = edad;
    this.telefono = telefono;
    this.email = email;
}

let nombre= prompt("Ingresa tu nombre")
if (nombre) {
    alert("Bienvenido " + nombre + "!");
    }else{  
    alert("No ingresaste nada!");    
    }
    console.log(nombre);

let edad= prompt("Ingresa tu edad")
if(isNaN(edad)){
    alert("No ingresaste nada!");
}else{
    console.log(edad);
}

let telefono= prompt("Ingresa tu telefono")
if(isNaN(telefono)){
    alert("No ingresaste nada!");
}else{
    console.log(telefono);
}

let email= prompt("Ingresa tu email")
if(email ===""){
    alert("No ingresaste nada!");
}else{
    console.log(email);
}

const persona2= new Persona(nombre, edad, telefono, email)
console.table(persona2);




let marcaRaqueta= prompt("Ingresá el nombre de la marca de raquetas que conozcas:").toLowerCase();

if(marcaRaqueta == ""){
    alert("No ingresaste nada!");
}else if(marcaRaqueta == "babolat"){
    alert("Tenemos las mejores raquetas de " + marcaRaqueta + " para ofrecerte!");
}else if(marcaRaqueta == "head"){
    alert("Tenemos las mejores raquetas de " + marcaRaqueta + " para ofrecerte!");
}else if(marcaRaqueta == "yonex"){
    alert("Tenemos las mejores raquetas de " + marcaRaqueta + " para ofrecerte!");
}else if(marcaRaqueta == "dunlop"){
    alert("Tenemos las mejores raquetas de " + marcaRaqueta + " para ofrecerte!");
}else if(marcaRaqueta == "wilson"){
    alert("Tenemos las mejores raquetas de " + marcaRaqueta + " para ofrecerte!");
}else if(marcaRaqueta == "prince"){
    alert("Tenemos las mejores raquetas de " + marcaRaqueta + " para ofrecerte!");
}else if(marcaRaqueta == "tecnifibre"){
    alert("Tenemos las mejores raquetas de " + marcaRaqueta + " para ofrecerte!");
}


// Acá hice un bucle para que el usuario me indique sus 3 jugadores profesionales de tenis preferidos.

for (let index = 1; index <= 3; index++) {
    let nombreJugador= prompt("Mencioná 3 jugadores de tenis profesionales:");
    console.log(nombreJugador);
    if(nombreJugador == ""){
        alert("No ingresaste nada!");
        break;
    }
}

// Acá puse funciones para el calculo del precio con IVA de 3 raquetas de tenis.

function precio_raquetas(param1){
    return param1*1.21
}

let raquetaBabolat = precio_raquetas(70000);
console.log("Precio raqueta Babolat: " + raquetaBabolat);

let raquetaHead = precio_raquetas(65000);
console.log("Precio raqueta Head: " + raquetaHead);

let raquetaYonex = precio_raquetas(75000);
console.log("Precio raqueta Yonex: " + raquetaYonex);



// Acá tenemos armado un array que lo llamamos 'productos'
const productos= [
    {id:1, nombre: "Remera nike blue", precio: 8000},
    {id:2, nombre: "Pantalon adidas white summer", precio: 7000},
    {id:3, nombre: "Short adidas white summer", precio: 6000},
    {id:4, nombre: "Zapatillas nike black winter", precio: 45000},
    {id:5, nombre: "Medias yonex red summer", precio: 3500},
    {id:6, nombre: "Campera nike rafa nadal signature", precio: 60000},
    {id:7, nombre: "Gorra babolat white summer", precio: 15000},
  ];
  

  // METODOS DE BUSQUEDA:


  // METODO FOR EACH:
  productos.forEach((indumentaria)=>{
    console.log(indumentaria); 
  })


  // METODO FIND:
  const camperas = productos.find((el)=>{
    return el.nombre === "Campera nike rafa nadal signature"
  })
  console.log(camperas);


 
  // METODO FILTER:

  // Voy a filtrar los productos que tengan un precio mayor a 7500:

  let filtrado = productos.filter((el)=>{
    return el.precio > 7500
  })

  console.log(filtrado);



  // METODO SOME:
  // Voy a corroborar si existe el elemento "Pantalon dorado dunlop" en mi lista de productos, del array "productos".

  const existe= productos.some((el)=>{
    return el.nombre == "Pantalon dorado Dunlop"
  })

  console.log(existe); // No existe, por lo tanto, resultado en la consola del navegador es false.



  // Ahora voy a corroborar si existe el elemento "Remera nike blue" en mi lista de productos,  del array "productos".

  const existeremera= productos.some((el)=>{
    return el.nombre == "Remera nike blue"
  })

  console.log(existeremera); // Si existe, por lo tanto, resultado en la consola del navegador es true.


// METODO PUSH:
// Ahora voy a agregar 3 productos nuevos al final de mi array "productos".

productos.push({
    id:8,
    nombre:"Raqueta Babolat pure drive team",
    precio:90000,
})
console.log(productos);


productos.push({
    id:9,
    nombre:"Raqueta Babolat Aero Drive",
    precio:95000,
})
console.log(productos);


productos.push({
    id:10,
    nombre:"Raqueta Head 360 MP Extreme",
    precio:99000,
})
console.log(productos);




// METODO MAP:
// Ahora voy a hacer una copia de mi array, pero con los precios aumentados en un 40% 

const precioActualizado= productos.map((el)=>{
    return {
      id: el.id, 
      nombre: el.nombre,
      precio: el.precio*1.40
    }
  })

  console.log(precioActualizado);




// METODO SPLICE:
// Vamos a sacar todos los elementos de nuestro nuevo array raquetas, y solamente vamos a dejar los ultimos 3 productos que agregamos a nuestro array originalmente.

precioActualizado.splice(0,7)
console.log(precioActualizado);


// METODO REDUCE:
// Ahora voy a sumar el total de lo que me saldría comprarme las 3 raquetas.
let capital = precioActualizado.reduce((acc,raqueta)=>{
    return acc + raqueta.precio
  },0);
  
  console.log(capital); // El precio total por comprar las 3 raquetas es de 397600
  

  