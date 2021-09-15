let quizDB=[

{
	question:'Q1: Where is the source of the Volga river?',
	a:'Lake Junin',
	b:'Furtwangen',
	c:'Valdai Hills',
	d:'Gangotri Glacier',
	ans:'ans3'
},
	{question:'Q2: What was the Route of the ten thousand?',
	a:'The journey Greek soldiers made out of Persia after the rebellion of Prince Cyrus.',
	b:'The trade route through Persia that claimed to either leave a man devoid of $10,000 or a man with riches over $10,000',
	c:'The path that Greek soldiers took to eventually invade Persia and capture Prince Cyrus',
	d:'The extraordinarily long path between Greece and Persia notable for its intense and scorching heat.',
	ans:'ans1'
	},

	{question:'Q3: One Meter=39.37 inches, Using this information how many Kilometer is 4 Miles?',
	a:'3.93',
	b:'9.46',
	c:'5.88',
	d:'6.44',
	ans:'ans4'
	},

	{question:'Q4: What is the difference between Athens and Sparta?',
	a:'Athens had a strong army while Sparta had a strong navy',
	b:'Athens had a king while Sparta did not',
	c:'Athens was a city-state while Sparta was a township.',
	d:'Athens was a democracy while Sparta was an oligarchy',
	ans:'ans4'
	},

	{question:'Q5: Who was Jugurtha?',
	a:'A King of Numanthia',
	b:'A Prince of Carthage',
	c:'A Military General of Sparta',
	d:'An Oracle of Greek Methoology',
	ans:'ans1'
	},

	{question:'Q6: a+b+c=216, a+c=3b, b+c=0.5, now find a,b,c?',
	a:'a:124, b:41. c:28',
	b:'a:144, b:54, c:18',
	c:'a:144, b:54, c:28',
	d:'a:144, b:54, c:38',
	ans:'ans2'
	},




]

let question=document.querySelector('.question')
let option1=document.querySelector('#option1')
let option2=document.querySelector('#option2')
let option3=document.querySelector('#option3')
let option4=document.querySelector('#option4')
let answers=document.querySelectorAll('.answer')
let ShowScore=document.querySelector('#showscore')


let questionCount=0
let score=0
let loadQuestion=()=>{
	let list=quizDB[questionCount]
	question.innerText=list.question
	option1.innerText=list.a
	option2.innerText=list.b
	option3.innerText=list.c
	option4.innerText=list.d
}

let getAnswer=()=>{
	let answer
	answers.forEach(function(curEle){
		if(curEle.checked){
			answer=curEle.id

		}
	})
	return answer

}

let deSelect=()=>{
	answers.forEach(function(i){
		if(i.checked){
			i.checked=false
		}
	})
}

loadQuestion()

submit.addEventListener('click',()=>{
	let checkAnswer=getAnswer()
	console.log(checkAnswer)

	if(checkAnswer===quizDB[questionCount].ans){
		score++
	}


	questionCount++
	if(questionCount<quizDB.length){
		deSelect()
		loadQuestion()
	}


	else{
		ShowScore.innerHTML=`<h2>Here Goes the result ${score}/${quizDB.length}</h2><br>

		<button class="subBtn2" onclick="location.reload()">Play Again</button>`
		ShowScore.classList.remove('scoreBoard')
	}
})