function clearContent(){
	let content = document.getElementById('content')
	content.innerHTML="";
}

function getMainDiv(){
	let content = document.getElementById('content')
	return content
}

function addText(htmlElement,text){
	htmlElement.appendChild(document.createTextNode(text))
}



export {
	clearContent,
	getMainDiv,
	addText
}
