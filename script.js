var upgrade1_clicks = 1;
var upgrade1_bought = false;

var upgrade2_clicks = 2;
var upgrade2_bought = false;

var upgrade3_clicks = 3;
var ship_bought = false;

var upgrade4_clicks = 0;

var OFF_OPACITY = 0.3;

var score = 0;
var score_multiplier = 1;

var item1, item2, item3, item4, itemArray;
var upgradeArray;
function initialize()
{
	item1 = document.getElementById("buy_up1");
	item1.innerHTML = "UPGRADE 1<br>buy for " + upgrade1_clicks;

	item2 = document.getElementById("buy_up2");
	item2.innerHTML  = "UPGRADE 2<br>buy for " + upgrade2_clicks;

	item3 = document.getElementById("buy_ship")
	item3.innerHTML  = "BUY SHIP<br>buy for " + upgrade3_clicks;

	item4 = document.getElementById("fly_away");
	item4.innerHTML  = "FLY AWAY<br>need ship ";

	itemArray = {item1,item2,item3,item4};

	
}
window.onload = initialize;
function clickFunction()
{
	score+=1*score_multiplier;
	updateScoreText();
	updateShop();
}

function updateScoreText()
{
	document.getElementById("score_place").innerHTML  = ("Evolution: " + score);
}

function updateShop()
{
	if(canBuy(1))
	{
		turnShopItemOn(item1);
	}
	else if(canBuy(2))
	{
		turnShopItemOn(item2);
	}
	else if(canBuy(3))
	{
		turnShopItemOn(item3);
	}
	else if(canBuy(4))
	{
		turnShopItemOn(item4);
	}
}

function numberToItem(number) //arrays have betrayed me...
{
	switch(number)
	{
		case 1: return item1;
		case 2: return item2;
		case 3: return item3;
		case 4: return item4;
	}
}
function buy(number)
{
	if(canBuy(number))
	{
		turnShopItemOff(numberToItem(number));
		switch(number)
		{
			case 1: 
				upgrade1_bought = true;
				score -= upgrade1_clicks;
				break;
			case 2:
				upgrade2_bought = true;
				score -= upgrade2_clicks;
				break;
			case 3:
				ship_bought = true;
				score -= upgrade3_clicks;
				break;
			case 4:
				winGame();
		}
		updateScoreText();
		updateShop();
	}
}

function canBuy(number)
{
	switch(number)
	{
		case 1: return score >= upgrade1_clicks && !upgrade1_bought;
		case 2: return score >= upgrade2_clicks && !upgrade2_bought;
		case 3: return score >= upgrade3_clicks && !ship_bought;
		case 4: return ship_bought;
	}
	return false;
}

function turnShopItemOn(e)
{
	e.style.opacity = 1.0;
	e.style.backgroundColor = "lightgreen";
}

function turnShopItemOff(e)
{
	e.style.opacity = OFF_OPACITY;
	e.style.backgroundColor = "lightblue";
}

function winGame()
{

}