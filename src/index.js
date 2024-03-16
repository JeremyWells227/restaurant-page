import './style.css'
import loadHome from './home.js';
import loadMenu from './menu.js';
import loadAbout from './about.js';


function initPage(){
	let homebtn = document.getElementById('home')
	homebtn.addEventListener('click',loadHome)
	let menubtn = document.getElementById('menu')
	menubtn.addEventListener('click',loadMenu)
	let aboutbtn = document.getElementById('about')
	aboutbtn.addEventListener('click',loadAbout);
	loadHome();
}
initPage()









