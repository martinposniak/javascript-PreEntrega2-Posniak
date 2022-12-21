


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
    {id:1, nombre: "Remera Nike Blue", precio: 8000},
    {id:2, nombre: "Pantalon Nike white Summer", precio: 7000},
    {id:3, nombre: "Short Nike white Summer", precio: 6000},
    {id:4, nombre: "Zapatillas Nike Black Winter", precio: 45000},
    {id:5, nombre: "Medias Nike Red summer", precio: 3500},
    {id:6, nombre: "Campera Nike Rafa Nadal Signature", precio: 60000},
    {id:7, nombre: "Gorra Nike White Summer", precio: 15000},
    {id:8, nombre: "Remera Adidas Green", precio: 8500},
    {id:9, nombre: "Pantalon Adidas Brown Autumn", precio: 7500},
    {id:10, nombre: "Short Adidas Orange Label", precio: 6500},
    {id:11, nombre: "Zapatillas Adidas Black Spring All Court", precio: 47000},
    {id:12, nombre: "Medias Adidas Yellow Field", precio: 4500},
    {id:13, nombre: "Campera Adidas Andy Murray Signature", precio: 55000},
    {id:14, nombre: "Gorra Adidas champion Signature", precio: 12000},
    {id:15, nombre: "Remera Yonex Grey", precio: 5500},
    {id:16, nombre: "Pantalon Yonex Australian Open Championship", precio: 6800},
    {id:17, nombre: "Short Yonex Masters Series Summer", precio: 5800},
    {id:18, nombre: "Zapatillas Yonex Golden Championship", precio: 35000},
    {id:19, nombre: "Medias Yonex Pink Summer", precio: 3200},
    {id:20, nombre: "Campera Yonex David Nalbandian signature", precio: 45000},
    {id:21, nombre: "Gorra Yonex white Signature summer", precio: 12500},
    {id:22, nombre: "Remera Uniqlo blue", precio: 9500},
    {id:23, nombre: "Pantalon Uniqlo White Summer", precio: 9800},
    {id:24, nombre: "Short Uniqlo White Summer", precio: 10800},
    {id:25, nombre: "Zapatillas Uniqlo Perfection Signature Series Winter", precio: 55000},
    {id:26, nombre: "Medias Uniqlo Red Summer", precio: 5200},
    {id:27, nombre: "Campera Uniqlo Roger Federer Signature", precio: 125000},
    {id:28, nombre: "Gorra Uniqlo White Summer", precio: 17500},
    {id:22, nombre: "Remera Prince blue", precio: 9500},
    {id:23, nombre: "Pantalon Prince White Summer", precio: 9800},
    {id:24, nombre: "Short Prince White Summer", precio: 10800},
    {id:25, nombre: "Zapatillas Prince black winter", precio: 55000},
    {id:26, nombre: "Medias Prince Red Summer", precio: 5200},
    {id:27, nombre: "Campera Prince Gael Monfils Signature", precio: 125000},
    {id:28, nombre: "Gorra Prince Signature Spring", precio: 17500},
  ];



  

  // METODOS DE BUSQUEDA:


  // METODO FOR EACH:
  productos.forEach((indumentaria)=>{
    console.log(indumentaria); 
  })


  // METODO FIND:
  const camperas = productos.find((el)=>{
    return el.nombre === "Campera Nike Rafa Nadal Signature"
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



  // Ahora voy a corroborar si existe el elemento "Short Yonex Masters Series Summer" en mi lista de productos,  del array "productos".

  const existeremera= productos.some((el)=>{
    return el.nombre == "Short Yonex Masters Series Summer"
  })

  console.log(existeremera); // Si existe, por lo tanto, resultado en la consola del navegador es true.


// METODO PUSH:
// Ahora voy a agregar 3 productos nuevos al final de mi array "productos".

productos.push({
    id:29,
    nombre:"Raqueta Babolat pure drive team",
    precio:90000,
})
console.log(productos);


productos.push({
    id:30,
    nombre:"Raqueta Babolat Aero Drive",
    precio:95000,
})
console.log(productos);


productos.push({
    id:31,
    nombre:"Raqueta Head 360 MP Extreme",
    precio:99000,
})
console.log(productos);




// METODO MAP:
// Ahora voy a hacer una copia de mi array 'productos' y lo voy a llamar 'nuevoArrayProductos'

const nuevoArrayProductos= productos.map((el)=>{
    return {
        id: el.id,
        nombre: el.nombre,
        precio: el.precio,
    }
})

console.log(nuevoArrayProductos);

// METODO SORT:
// Ahora voy a ordenar la lista de los productos de mi nuevo array 'nuevoArrayProductos' de mayor a menor precio.
nuevoArrayProductos.sort((a,b)=> b.precio - a.precio)
console.log(nuevoArrayProductos); 

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

precioActualizado.splice(0,35)
console.log(precioActualizado);


// METODO REDUCE:
// Ahora voy a sumar el total de lo que me saldría comprarme las 3 raquetas.
let capital = precioActualizado.reduce((acc,raqueta)=>{
    return acc + raqueta.precio
  },0);
  
  console.log(capital); // El precio total por comprar las 3 raquetas es de 397600
  

  