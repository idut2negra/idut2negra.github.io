let tg = window.Telegram.WebApp;

tg.expand()

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";

let usercard = document.getElementById("usercard");

let p = document.createElement("p");

console.log(`${tg.initDataUnsafe.first_name}`)

p.innerText = `${tg.initDataUnsafe.first_name}
${tg.initDataUnsafe.full_name}`

usercard.appendChild(p)

let item = "";

let btn1 = document.getElementById("btn1");

btn1.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Вы выбрали товар 1");
		item = "1";
		tg.MainButton.show();
	}
});

Telegram.WebApp.onEvent("mainButtonClicked", function(){
	tg.sendData(item);
});
