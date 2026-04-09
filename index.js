const characters = ["A","B","C","D","E","F","G","H","I","J",
	"K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d",
	"e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x",
	"y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$",
	"%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


let pass1 = document.getElementById('pass1')
let pass2 = document.getElementById('pass2')
let alert = document.getElementById('alert')
let slider = document.getElementById('myRange')
let length = document.getElementById('length')
let password1 = ""
let password2 = ""
let toggle = document.getElementById('toggle')
function generatePassword(){
	for(let i = 0; i < Number(slider.value); i++){
		let randomIndex1 = Math.floor(Math.random() * characters.length)
		let randomIndex2 = Math.floor(Math.random() * characters.length)
		password1 += characters[randomIndex1]
		password2 += characters[randomIndex2]
	}
	pass1.textContent = password1
	pass2.textContent = password2
	password1 = "" 
	password2 = ""

}

pass1.addEventListener("click", function(){
	navigator.clipboard.writeText(pass1.textContent)
	.then(() => {
		if(pass1.textContent === ""){
			alert.classList.remove('hidden')
		}else{
			alert.classList.add('hidden')
		}
		
	})
	.catch(err => console.error("Failed to copy: ", err))
})

pass2.addEventListener("click", function(){
	navigator.clipboard.writeText(pass2.textContent)
	.then(() => {
		if(pass2.textContent === ""){
			alert.classList.remove('hidden')
		}else{
			alert.classList.add('hidden')
		}
		
	})
	.catch(err => console.error("Failed to copy: ", err))
})

slider.addEventListener("input", function(){
	length.textContent = slider.value
})

toggle.addEventListener("change", function(){
	if(this.checked){
		document.body.classList.toggle("light")
	}else{
		document.body.classList.toggle("light")
	}
})