var ship = document.querySelectorAll('.ship');
var pika = document.querySelectorAll('.pikachu');
var reset = document.querySelector('button');

ship.forEach((ship)=>{
    ship.addEventListener('click', function() {

        ship.classList.toggle('is-flipped');
        checkWinCondition();
    })
})

pika.forEach((pika)=>{
    pika.addEventListener('click', function() {

        pika.classList.toggle('is-flipped');
        checkWinCondition();
    })
})

function checkWinCondition(){
    var shipCount = document.querySelectorAll('.ship.is-flipped').length;
    var pikaCount = document.querySelectorAll('.pikachu.is-flipped').length;
    var totalClicks = document.querySelectorAll('.is-flipped').length;

    if (totalClicks >= 8) {
        if (shipCount > 5 || pikaCount > 5 ) {
            alert('You win!');
        } else {
            alert('You lose');
        }
    }
}

reset.addEventListener('click',()=>{
    ship.forEach((ship)=>{
        ship.classList.remove('is-flipped');
     })
    pika.forEach((pika)=>{
            pika.classList.remove('is-flipped');
    })
})



