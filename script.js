
const and = document.querySelector('.fim')

function escrever () {
    let textoVetor = and.innerHTML.split('')
    and.innerHTML = ''
    textoVetor.forEach((letra, i) =>  {
        setTimeout(() => {
            and.innerHTML += letra
        }, 100 * i)
    }) 

}

setInterval(() => {
    escrever()
}, 2000);