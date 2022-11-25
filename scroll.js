const container = document.querySelector(".container_card")

const scroll = window.addEventListener('scroll', ()=>{
    const {scrollHeight, clientHeight, scrollTop} = document.documentElement

    scrollTop + clientHeight > scrollHeight - 7 && setTimeout(newContainer, 500)
})

const newContainer = () => {
    const card = document.createElement('div')
    card.className= "card"
    container.appendChild(card)
}

export default scroll;