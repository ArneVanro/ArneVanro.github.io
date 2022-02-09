
const setup = () => { 
	let btnOptellen=document.getElementById("btnOptellen");
	
	btnOptellen.addEventListener("mouseover", optellen);
} 

const optellen = () => {
	let txtOutput=document.getElementById("txtOutput");
	let txtLinks=document.getElementById("txtLinks");
	let txtRechts=document.getElementById("txtRechts");
	
	let g1=parseInt(txtLinks.value, 10);
	let g2=parseInt(txtRechts.value, 10);
	let resultaat = g1+g2;
	if(g1 === g2){
		resultaat = (g1+g2)*3;
	}
	let resultaatTekst=g1+" + "+g2+" = "+resultaat;
	txtOutput.innerHTML=resultaatTekst;
}

 
window.addEventListener('load',setup); 
