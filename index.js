const cardArray = [
    {
      name: 'fries',
      img: './fries.png'
    },
    {
      name: 'cheeseburger',
      img: './cheeseburger.png'
    },
    {
      name: 'ice-cream',
      img: './ice-cream.png'
    },
    {
      name: 'pizza',
      img: './pizza.png'
    },
    {
      name: 'milkshake',
      img: './milkshake.png'
    },
    {
      name: 'hotdog',
      img: './hotdog.png'
    },
    {
        name: 'fries',
        img: './fries.png'
      },
      {
        name: 'cheeseburger',
        img: './cheeseburger.png'
      },
      {
        name: 'ice-cream',
        img: './ice-cream.png'
      },
      {
        name: 'pizza',
        img: './pizza.png'
      },
      {
        name: 'milkshake',
        img: './milkshake.png'
      },
      {
        name: 'hotdog',
        img: './hotdog.png'
      },
]
cardArray.sort(()=>0.5-Math.random())

const grid = document.getElementById("grid");
const resultDisplay = document.getElementById("result")
let cardsChosen = []
let cardsChosenId = []
let cardsWon = []

function createBoard(){
    for(let i=0;i<cardArray.length;i++){
        const card = document.createElement('img')
        card.setAttribute('src','./flip.jpg');
        card.setAttribute('data-id',i)
        card.addEventListener('click',flipcard)
        grid.appendChild(card)
    }
    
}

function checkForMatch(){
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]

    if(optionOneId == optionTwoId){
        cards[optionOneId].setAttribute('src','./flip.jpg')
        cards[optionTwoId].setAttribute('src','./flip.jpg')
        alert("you have clicked the same image")
    }
    else if(cardsChosen[0] === cardsChosen[1]){
        alert("found a match")
        cards[optionOneId].setAttribute('src', './white.png')
        cards[optionTwoId].setAttribute('src', './white.png')
        cards[optionOneId].removeEventListener('click', flipcard)
        cards[optionTwoId].removeEventListener('click', flipcard)
        cardsWon.push(cardsChosen)
    }
    else{
        cards[optionOneId].setAttribute('src','./flip.jpg')
        cards[optionTwoId].setAttribute('src','./flip.jpg')
        alert('sorry, try again')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length

    if(cardsWon.length === cardArray.length/2){
        alert('you found tham all')
        resultDisplay.textContent = 'Congrats you won'
    }
}

createBoard()

function flipcard(){
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src',cardArray[cardId].img)
    if(cardsChosen.length === 2){
        setTimeout(checkForMatch,500)
    }
}
