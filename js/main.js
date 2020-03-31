const tarjeta = document.getElementById('tarjeta')
const botonAbrir = document.getElementById('btn-abrir')
const formulario = document.getElementById('formulario-tarjeta')
const mes = document.getElementById('selectMes')
const year = document.getElementById('selectYear')
const numeroTarjeta = document.querySelector('#tarjeta .numero')
const nombreTarjeta = document.querySelector('#tarjeta .nombre')
const logoMarca = document.querySelector('#logo-marca')
const firma = document.querySelector('#tarjeta .firma p')
const mesExpiarcion = document.querySelector('#tarjeta .mes')
const yearExpiarcion = document.querySelector('#tarjeta .year')
const ccv = document.querySelector('#tarjeta .ccv')


//funcion para que la tarjeta se ponga de frente si escribo algo del frente
const mostrarFrenteTarjeta = ()=> {
    if(tarjeta.classList.contains('active')){
        tarjeta.classList.remove('active')
    }
}
//Rotacion tarjea
tarjeta.addEventListener('click', ()=>{ 
    tarjeta.classList.toggle('active')
})
//abrir formuario
botonAbrir.addEventListener('click', ()=>{
    botonAbrir.classList.toggle('active')
    formulario.classList.toggle('active')
})
//agregar opciones al mes

for(let i = 0; i <=12; i++){
    let option = document.createElement('option')
    option.value = i
    option.innerText = i
    mes.appendChild(option)
}

//agregar opciones al año

let actualYear = new Date().getFullYear()
for(let i = actualYear;i <= actualYear+10;i++){
    let option = document.createElement('option')
    option.value = i
    option.innerText = i
    year.appendChild(option)
}

// input numero tarjeta con validacion

formulario.inputNumero.addEventListener('keyup', (e)=>{
    let valorInput = e.target.value

    formulario.inputNumero.value = valorInput
    //elimnar espacios en blanco
    .replace(/\s/g, '')
    //elimar letras
    .replace(/\D/g, '')
    // poner espacios cada cuatro numeros
    .replace(/([0-9]{4})/g, '$1 ')
    //elimina el ultimo espacio en blanco
    .trim()

    numeroTarjeta.textContent = valorInput

    if(valorInput == ''){
        //vuelve a por defecto si borro todos los numeros del input
        numeroTarjeta.textContent = '#### #### #### ####'
        //desaparece el logo si borro todos los numeros
        logoMarca.innerHTML = ''
    }
    //pone el logo de la tarjeta dependiendo el numero con le que empieza
    if(valorInput[0] == 4){
        logoMarca.innerHTML = ''
        let image = document.createElement('img')
        image.src = 'img/logos/visa.png'
        logoMarca.appendChild(image)
    }else if(valorInput[0] == 5){
        logoMarca.innerHTML = ''
        let image = document.createElement('img')
        image.src = 'img/logos/mastercard.png'
        logoMarca.appendChild(image)
    }
    //funcion que muestra la parte del frente de la tarjeta
    mostrarFrenteTarjeta()
})

//Input nombre de tarjeta

 formulario.inputNombre.addEventListener('keyup', (e)=>{
    let valorInput = e.target.value

    formulario.inputNombre.value = valorInput.replace(/[0-9]/g, '')
    nombreTarjeta.innerText = valorInput
    firma.textContent = valorInput

    if(valorInput == ""){
        nombreTarjeta.textContent = 'Jhon Doe'
    }

    mostrarFrenteTarjeta()
 })

 //select mes

 formulario.selectMes.addEventListener('change', (e)=>{
    mesExpiarcion.textContent = e.target.value
    mostrarFrenteTarjeta()
  //select año  
 })
 formulario.selectYear.addEventListener('change', (e)=>{
    yearExpiarcion.textContent = e.target.value.slice(2)
    mostrarFrenteTarjeta()
 })

 //codigo de seguridad ccv

 formulario.inputccv.addEventListener('keyup', (e)=>{
    if(!tarjeta.classList.contains('active')){
        tarjeta.classList.add('active')
    }
    let valorInput = e.target.value
    inputccv.value = valorInput.replace(/\s/g, '').replace(/\D/g, '')

    ccv.textContent = valorInput

})