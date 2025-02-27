const form = document.querySelector("form");
const maindiv = document.querySelector("#leaderBoard");
// console.log(document.form);

const varibale = Array.from(document.forms[0].elements);
varibale.pop();
let ledarboard =[];

form.addEventListener("submit" ,(e)=>{
	e.preventDefault();
	const obj ={
		id:ledarboard.length,
		fname: varibale[0].value,
		lname:varibale[1].value,
		country:varibale[2].value,
		score:varibale[3].value,
	}
	ledarboard.push(obj);
		
	
	console.log(ledarboard);
	
	//clear the forms
	clearform();
	
	//sort asseindin and which score is high it will show on the top 
	sortb_a();
	
	 printleadrboard(); //creating all elements div p span and appneding them to maindiv 
	
	//after that want modifiy aswill
	//idtodelete
})
//this for each for chking cleaing the form 
function clearform() {
	varibale.forEach((val)=>(val.value = ""));
		varibale[0].focus();
	}
	
	//this sorting is sort high to low you check
function sortb_a() {
	ledarboard.sort((a,b)=>{
		return b.score - a.score;
	})
}
//printing  whole data to new div maindiv
function printleadrboard() {
	maindiv.innerHTML ="";
	const fragment = document.createDocumentFragment();
	ledarboard.forEach(obj => {
		const father  =  document.createElement("div");
		const name = document.createElement("p");
		const country = document.createElement("p");
		const score = document.createElement("p");
		const actions = document.createElement("p");
		const dlt = document.createElement("span");
		const plus5 = document.createElement("span");
		const minus5 = document.createElement("span");
		
		father.classList.add("father");
		name.innerText = `${obj.fname} ${obj.lname}`;
		country.innerText =`${obj.country}`;
		score.innerText =`${obj.score}`;
		
		dlt.classList.add("fa-solid", "fa-trash");
		dlt.addEventListener("click", () => deleteData(obj.id));
		
		actions.classList.add("actions");
		
		plus5.innerText="+5";
		minus5.innerText="-5";
		
		plus5.addEventListener("click", () => modifyScore(obj.id, "+"));
		minus5.addEventListener("click", () => modifyScore(obj.id, "-"));
		
		actions.append(dlt,plus5,minus5);
		
		father.append(name,country,score,actions);
		fragment.append(father);
	});
	maindiv.append(fragment);
}


function deleteData(idToDelete) {
	ledarboard = ledarboard.filter((existingData) => {
	  return existingData.id !== idToDelete;
	});
	//sorting the leaderBoard
	sortb_a();
	//print values on the DOM
	printleadrboard();
  }
  
  function modifyScore(idToModify, sign) {
	if (sign === "+") {
		ledarboard.map((existingData) => {
		if (existingData.id === idToModify)
		  existingData.score = Number(existingData.score) + 5;
	  });
	} else {
		ledarboard.map((existingData) => {
		if (existingData.id === idToModify)
		  existingData.score = Number(existingData.score) - 5;
	  });
	}
  
	//sorting the leaderBoard
	sortb_a();
  
	//print values on the DOM
	printleadrboard();
  }
  
  