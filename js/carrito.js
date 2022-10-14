const detectarBotones = (data) =>{
    const botones = document.querySelectorAll('.card button')

    botones.forEach(btn =>{
      btn.addEventListener('click',()=>{
        console.log('medisteclick')
      })
    })
}