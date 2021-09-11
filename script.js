let secretNumber = Math.trunc(Math.random()*20)+1;
let score = 10;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function(){
	let guess = Number(document.querySelector('.guess').value)
	console.log(guess)

if(!guess || guess<1 || guess>20){
	document.querySelector('.message').textContent = '->Enter number between 1-20 only!'
}else if(guess === secretNumber){
	document.querySelector('.message').textContent = 'Correct Number!'
	document.querySelector('.number').textContent = secretNumber

document.querySelector('body').style.backgroundColor = '#1CB640'

if(score>highScore){
	highScore = score;
	document.querySelector('.highscore').textContent = highScore
}

}else if(guess > secretNumber){
	if (score>1) {
	document.querySelector('.message').textContent = 'Guess is too high!!'
	score--;
	document.querySelector('.score').textContent = score;
}else{
	document.querySelector('.message').textContent = 'You have lost the game!!'
	document.querySelector('.score').textContent = 0;
}
}else if(guess < secretNumber){
if (score>1) {
	document.querySelector('.message').textContent = 'Guess is too low!!'
	score--;
	document.querySelector('.score').textContent = score;
}else{
	document.querySelector('.message').textContent = 'You have lost the game!!'
	document.querySelector('.score').textContent = 0;
}
}
})

document.querySelector('.again').addEventListener('click',function(){
	score = 10;
	secretNumber = Math.trunc(Math.random()*20)+1;
	document.querySelector('.message').textContent = 'Start Guessing...';
	document.querySelector('.score').textContent = score;
	document.querySelector('.number').textContent = '?';
	document.querySelector('.guess').value = '';
	document.querySelector('body').style = '#C62525';

})