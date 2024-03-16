import {clearContent,getMainDiv,addText} from './utils.js';


export default function loadHome(){
	clearContent();
	let container = getMainDiv();

	let homeHeader = document.createElement('h1')
	addText(homeHeader,"Buona Vita Trattoria & Pizzeria");
	let homePara = document.createElement("p")
	addText(homePara,"A Casual Italian Place")
	let hoursPara = document.createElement("p")
	addText(hoursPara,"5pm - 12am Every day")
	container.appendChild(homeHeader)
	container.appendChild(homePara)
	container.appendChild(hoursPara)
}
