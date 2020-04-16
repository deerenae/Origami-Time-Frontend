console.log("hello")
fetch('http://localhost:3000/origamis')
    .then(response => response.json())
    .then(origamis => addOrigamis(origamis))

function addOrigamis(origamis) {
    const origamiList = document.getElementById('origami-list')

    origamis.forEach(origami => {
        createCard(origami, origamiList)
    })
}

function createCard(origami, origamiList){
    const origamiCard = document.createElement('div')

    origamiCard.className = "origami-card"
    const name = document.createElement('h2')
    const difficulty = document.createElement('h3')
    const image = document.createElement('img')
    const instructions = document.createElement('a')
    const button = document.createElement('button')

    name.innerText = origami.name
    difficulty.innerText = `Difficulty level: ${origami.difficulty}`
    image.src = origami.image 
    instructions.href = origami.instructions
    instructions.target= "_blank"
    instructions.innerText = `Instructions for making ${origami.name}`
    button.innerText = "Add to favorites"
    
    origamiCard.append(name, difficulty, image, instructions,button)
    origamiList.append(origamiCard)
    
}



// function addToFavorites(origami){

// }