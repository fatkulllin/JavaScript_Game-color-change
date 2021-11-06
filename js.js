let rows = 3;
let cols = 3;

let field = document.querySelector('#field');

let colors = ['red', 'green', 'blue'];
let p = document.querySelector('p')
let click = 0

for(let i=0;i<rows;i++){
	let tr = document.createElement('tr');
	field.appendChild(tr);
	for(let k=0;k<cols;k++){
		let td = document.createElement('td');
		td.innerHTML=k;
		td.classList.add(getRandomInt());
		tr.appendChild(td);
		
		td.addEventListener('click',function(){
			td.classList.value = paint(colors,td.classList.value);
			p.innerHTML = ++click
			let allTd = document.querySelectorAll('#field td');
			let k = 0;
			for(let i=1;i<allTd.length;i++){
				if(allTd[i-1].classList.value === allTd[i].classList.value){
					k++;
				}if(k == 8){
					alert('Победа');
				}
			}
		})
	}
}

function getRandomInt() {
	return colors[Math.floor(Math.random() * (2 - 0 + 1)) + 0];
	
};


function paint(colors, color){
	let a = colors.indexOf(color);

	if(a<2){
		return colors[a+1];
	}else if(a>=2){
		return colors[0];
	};
};
