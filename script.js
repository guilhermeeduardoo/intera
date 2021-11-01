
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

function Modais (idmod,Mod) {
    const mod = document.getElementById(idmod)
    const div = document.getElementById(Mod)
    mod.style.display = 'flex'
    mod.addEventListener('click',(e) => {
        if(e.target.id === idmod || e.target.id === Mod) {
            mod.style.display = 'none'
        }
    })
}

const Link = document.querySelector('.link')
Link.addEventListener('click', () => {
    Modais('fundo1','date')
})

const Git = document.querySelector('.github')
Git.addEventListener('click', () => {
    Modais('fundo2','Git')
})