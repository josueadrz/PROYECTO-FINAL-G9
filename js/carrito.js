
let carrito = {}


const detectarBotones = (data) => {
  const botones = document.querySelectorAll('.card button')

  botones.forEach(btn =>{
      btn.addEventListener('click',()=>{
        const producto = data.find(item => item.id == btn.dataset.id)
        producto.cantidad = 1
        if(carrito.hasOwnProperty(producto.id)){
           producto.cantidad = carrito[producto.id].cantidad +1
        }
        carrito[producto.id]={...producto}

        renderCarrito()
      })
  })
}
const items = document.querySelector('#items')

const renderCarrito = ()=>{
 items.innerHTML =''
  const template=document.querySelector('#template-carrito').content
  const fragment=document.createDocumentFragment()

  Object.values(carrito).forEach(producto =>{
  template.querySelector('th').textContent = producto.id
  template.querySelectorAll('td')[0].textContent = producto.title
  template.querySelectorAll('td')[1].textContent = producto.cantidad
  template.querySelector('span').textContent = producto.precio * producto.cantidad

    const clone = template.cloneNode(true)
    fragment.appendChild(clone)
  })
  item.appendChild(fragment)
}
const footer = document.querySelector('#footer-carrito') 
const renderFooter =()=>{
      const template = document.querySelector('#template-footer').content
      const fragment = document.createDocumentFragment()

      const nCantidad = Object.values(carrito).reduce((acc,{ cantidad }) => acc + cantidad, 0)
      const nPrecio = Object.values(carrito),reduce((acc,{cantidad,precio}) => acc + cantidad * precio, 0)
} 
accionBotones()