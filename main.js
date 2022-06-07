const imagesArray = [
    'https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/9/9d/Jake%27s_Invisible_Spiderweb_PANTS.png/revision/latest?cb=20111025050004',
    'https://i.stack.imgur.com/tqB4N.png',
    'https://vignette.wikia.nocookie.net/adventure-time-facts/images/0/0c/BMO.jpg/revision/latest/scale-to-width-down/340?cb=20130102063835',
    'https://images.wikia.com/adventuretimewithfinnandjake/images/4/48/A_kiss_from_princess_bubblegum_by_sircinnamon-d4pnkcd.png',
    'https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/8/83/1AT_ice_king_character.png/revision/latest/scale-to-width-down/340?cb=20110915231820',
    'https://i.pinimg.com/originals/1d/f2/96/1df2969aec3b29bb6c89811469a3dc25.png'
];

const addRandomEl = document.querySelector('.add-random')
const container = document.querySelector('.container')

addRandomEl.addEventListener('click', (e) => {
    addRandomImage()
})

const addRandomImage = () => {
    const randomImageUrl = imagesArray[Math.floor(Math.random() * imagesArray.length)]
    const imgEl = createImgELAndAppendUrl(randomImageUrl)
    imgEl.addEventListener('click', (e) => {
        e.target.remove()
    })
    container.appendChild(imgEl)
}


const createImgELAndAppendUrl = (url) => {
    const imgEl = document.createElement('img')
    imgEl.setAttribute('src', url)
    imgEl.classList.add('box')
    return imgEl
}