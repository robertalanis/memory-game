document.addEventListener('DOMContentLoaded', () => {
    //card options
    const cardArray = [
        {
            name: 'person-one',
            img: 'images/card-01.png'
        },
        {
            name: 'person-one',
            img: 'images/card-01.png'
        },
        {
            name: 'person-two',
            img: 'images/card-02.png'
        },
        {
            name: 'person-two',
            img: 'images/card-02.png'
        },
        {
            name: 'person-three',
            img: 'images/card-03.png'
        },
        {
            name: 'person-three',
            img: 'images/card-03.png'
        },
        {
            name: 'person-four',
            img: 'images/card-04.png'
        },
        {
            name: 'person-four',
            img: 'images/card-04.png'
        },
        {
            name: 'person-five',
            img: 'images/card-05.png'
        },
        {
            name: 'person-five',
            img: 'images/card-05.png'
        },
        {
            name: 'person-six',
            img: 'images/card-06.png'
        },
        {
            name: 'person-six',
            img: 'images/card-06.png'
        }
    ]
    
    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []

    // Create Board
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'images/back.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    // Check for Matches
    function checkForMatch() {
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        if (cardsChosen[0] === cardsChosen[1]) {
            //alert('Nice! You found a match!')
            cards[optionOneId].setAttribute('src', 'images/blank.png')
            cards[optionTwoId].setAttribute('src', 'images/blank.png')
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'images/back.png')
            cards[optionTwoId].setAttribute('src', 'images/back.png')
            //alert('Sorry, try again.')
        }
        cardsChosen =  []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length/2) {
            resultDisplay.textContent = 'Wow! You found them all!'
        }
    }

    // Flip Card
    function flipCard (){
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }
     
    createBoard();

})



