const tarjetas = document.getElementById("tarjetas")
const items = document.getElementById('items')
const footer = document.getElementById('footerCarrito')
const templateFooter = document.getElementById('template-footer').content
const templateCarrito = document.getElementById('template-carrito').content
const contadorCarrito = document.getElementById('contadorCarrito')
const fragment = document.createDocumentFragment()

let carrito = {}

document.addEventListener('DOMContentLoaded',()=>{
   if(localStorage.getItem('carrito')){
      carrito = JSON.parse(localStorage.getItem('carrito'))
      renderCarrito()
   }
})

tarjetas.addEventListener('click', e=>{
   agregarCarrito(e)
})

items.addEventListener('click',e=>{
   accionesBtn(e)
})
//Añadir item a carrito, trigger de captura de tarjeta
const agregarCarrito = e =>{  
   if(e.target.classList.contains('agregarCarrito')){     
      setCarrito(e.target.closest('.card'))
   }
   e.stopPropagation()
}

//crea objeto producto con informacion de la card
const setCarrito = objeto => { 
         const opcion=objeto.querySelector('.form-select').value;
         const partes = opcion.split(",");
         const precio = partes[0];
         const size = partes[1];

    
         const producto = {
         id: objeto.querySelector('.agregarCarrito').dataset.id,
         title: objeto.querySelector('.card-title').textContent,
         size: size,
         precio: precio,
         cantidad: 1,
         imagen:objeto.querySelector('.card-img-top').src
      }
      
      if(carrito.hasOwnProperty(producto.id) ){     
         producto.cantidad = carrito[producto.id].cantidad + 1
     }

      carrito[producto.id] = {...producto}
      renderCarrito()
}
//pinta los productos en el template del carrito
const renderCarrito = () =>{  
 
   
   items.innerHTML=''
   Object.values(carrito).forEach(producto =>{
      templateCarrito.querySelector('img').src = producto.imagen
      templateCarrito.querySelectorAll('td')[0].textContent = producto.title
      templateCarrito.querySelectorAll('td')[2].textContent = producto.cantidad
      templateCarrito.querySelectorAll('td')[1].textContent = producto.size
      templateCarrito.getElementById('botonMas').dataset.id = producto.id
      templateCarrito.getElementById('botonMenos').dataset.id = producto.id
      templateCarrito.querySelector('span').textContent = producto.cantidad * producto.precio
      const clone = templateCarrito.cloneNode(true)
      fragment.appendChild(clone)
   })
   items.appendChild(fragment)

   renderFooter()

   localStorage.setItem('carrito',JSON.stringify(carrito))
}
//pinta los totales
const renderFooter =()=>{
   footer.innerHTML =''
   contadorCarrito.innerHTML =''
   if(Object.keys(carrito).length === 0){
      footer.innerHTML =`
      <th scope="row" colspan="5">CARRITO VACIO</th>
      `
      return
   }
    
   const nCantidad = Object.values(carrito).reduce((acc,{cantidad})=> acc + cantidad,0)
   const nPrecio = Object.values(carrito).reduce((acc,{cantidad,precio})=>acc + cantidad * precio,0)

   templateFooter.querySelectorAll('td')[1].textContent = nCantidad
   templateFooter.querySelector('span').textContent = nPrecio

   //actualiza la notificacion del boton
   contadorCarrito.innerText = nCantidad 
   //para dibujar el footer del carrito
   const clone = templateFooter.cloneNode(true)
   fragment.appendChild(clone)
   footer.appendChild(fragment)

   //vaciar carrito
   const vaciarCarrito = document.getElementById('vaciar-carrito')
   vaciarCarrito.addEventListener('click',()=>{
      carrito = {}
      contadorCarrito.innerText = 0
      renderCarrito()
   })
}
//agregar o retirar item directo del carrito
const accionesBtn =e=>{
   if(e.target.classList.contains('btn-info')){
      const producto = carrito[e.target.dataset.id]
      producto.cantidad++
      carrito[e.target.dataset.id]={...producto}
      renderCarrito()
   }
   if(e.target.classList.contains('btn-danger')){
      const producto = carrito[e.target.dataset.id]
      producto.cantidad--
     if(producto.cantidad === 0){
      delete carrito[e.target.dataset.id]
     }
     renderCarrito()
   }
   e.stopPropagation()
}





