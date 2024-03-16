
import {clearContent,getMainDiv,addText} from './utils.js';


export default function loadmenu(){
	clearContent();
	let container = getMainDiv();

	let menuHeader = document.createElement('h1')
	addText(menuHeader,"Menu");
	let menuList = document.createElement("ul")
	let items = [
		["Margherita Pizza" ,"$9"],
		["Spaghetti" ,"$9"],
		["Chicken Parmigiana" ,"$12"],
		["Linguine Carbonara" ,"$10"],
		["Eggplant Rollatini" ,"$10"],
		["TiraMisu" ,"$8"],
	]
	items.forEach((item)=>{
		let li = document.createElement("li")
		addText(li,`${item[0]} - ${item[1]}`)
		menuList.appendChild(li)
	})


	container.appendChild(menuHeader)
	container.appendChild(menuList)
}
