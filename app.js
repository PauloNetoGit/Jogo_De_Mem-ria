document.addEventListener('DOMContentLoaded', () => {
    const cardArray = [

        {
            name: '01',
            img: 'imagens/01.jpg'
        },
        {
            name: '01',
            img: 'imagens/01 - Copia.jpg'
        },
        {
            name: '02',
            img: 'imagens/02.jpg'
        },
        {
            name: '02',
            img: 'imagens/02 - Copia.jpg'
        },
        {
            name: '03',
            img: 'imagens/03.jpg'
        },
        {
            name: '03',
            img: 'imagens/03 - Copia.jpg'
        },
        {
            name: '04',
            img: 'imagens/04.jpg'
        },
        {
            name: '04',
            img: 'imagens/04 - Copia.jpg'
        },
        {
            name: '05',
            img: 'imagens/05.jpg'
        },
        {
            name: '05',
            img: 'imagens/05 - Copia.jpg'
        },
        {
            name: '06',
            img: 'imagens/06.jpg'
        },
        {
            name: '06',
            img: 'imagens/06 - Copia.jpg'
        },
        {
            name: '07',
            img: 'imagens/07.jpg'
        },
        {
            name: '07',
            img: 'imagens/07 - Copia.jpg'
        },
        {
            name: '08',
            img: 'imagens/08.jpg'
        },
        {
            name: '08',
            img: 'imagens/08 - Copia.jpg'
        },
        {
            name: '09',
            img: 'imagens/09.jpg'
        },
        {
            name: '09',
            img: 'imagens/09 - Copia.jpg'
        }
    ]

    cardArray.sort(() => 0.5 - Math.random())

    function block(){
        ('a, #click').toggleClass('block');
    }

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []

    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {

            var card = document.createElement('img')

            card.setAttribute('src', 'imagens/00 - Inicio.jpg')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    function checkForMatch() {
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        if (cardsChosen[0] === cardsChosen[1]) {

            cards[optionOneId].setAttribute('src', 'imagens/00 - Branco.jpg')
            cards[optionTwoId].setAttribute('src', 'imagens/00 - Branco.jpg')

            alert('Você encontrou a Carta!')

            cardsWon.push(cardsChosen)

        } else {
            alert('Tente Novamente!')
            cards[optionOneId].setAttribute('src', 'imagens/00 - Inicio.jpg')
            cards[optionTwoId].setAttribute('src', 'imagens/00 - Inicio.jpg')
        }

        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length / 2) {
            resultDisplay.textContent = 'Parabéns! você encontrou todas as Peças.'
        }
    }

    function flipCard() {
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 100)
        }
    }

    createBoard()
})