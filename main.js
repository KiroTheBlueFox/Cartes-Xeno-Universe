const cardList = document.getElementById("cardList");

let data

fetch("data.json")
	.then(response => response.json())
	.then(jsonData => data_ready(jsonData))
	.catch(error => console.error("Erreur:", error))

function data_ready(jsonData) {
	data = jsonData
	console.log(data)
	data.cards.forEach(card_data => {
		createCard(card_data)
	});
}

function createCard(card_data) {
	let card = document.createElement("div")
	let image = document.createElement("img")
	image.setAttribute("src", "Images/card_cover.png")
	card.appendChild(image)
	cardList.appendChild(card)
}