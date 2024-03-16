
import {clearContent,getMainDiv,addText} from './utils.js';


export default function loadabout(){
	clearContent();
	let container = getMainDiv();

	let aboutHeader = document.createElement('h1')
	addText(aboutHeader,"Buona Vita Trattoria & Pizzeria");
	let aboutPara = document.createElement('p');
  let aboutText = "Contact: 555-5555 or on any social media."
	addText(aboutPara,aboutText);
	let addressPara = document.createElement('p');
  let addressText = "123 Pine St. USA City, USA"
	addText(addressPara,addressText);
	container.appendChild(aboutHeader)
	container.appendChild(aboutPara)
	container.appendChild(addressPara)
}
