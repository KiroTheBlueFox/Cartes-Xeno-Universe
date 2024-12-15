const $cardList = $("#cardList");

let data;

$.getJSON("data/data.json")
	.done(jsonData => data_ready(jsonData))
	.fail(error => console.error("Erreur :", error));

function data_ready(jsonData) {
	data = jsonData;
	console.log(data);
	$.each(data.cards, (index, card_data) => {
		createCard(card_data);
	});

	$('.js-tilt').tilt({
		glare: true,
		scale: 1.1,
		maxGlare: .5
	});
}

function createCard(card_data) {
	const $card = $("<div class=\"js-tilt card-xeno\"></div>");
	const $image = $("<img>").attr("src", "images/card_cover.png");
	$card.append($image);
	$cardList.append($card);

	
}