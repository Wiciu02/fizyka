function zegar()
{
	var x = new Date();
	var day = x.getDate();
		if (day<10) day = "0"+day;
	var month = x.getMonth()+1;
		if (month<9) month = "0"+month;
	var year = x.getFullYear();
	var hour = x.getHours();
		if (hour<10) hour = "0"+hour;
	var minute = x.getMinutes();
		if (minute<10) minute = "0"+minute;
	var second = x.getSeconds();
		if (second<10) second = "0"+second;
	var weekday = x.getDay();
	{
		if (weekday==1) weekday="Poniedziałek";
		if (weekday==2) weekday="Wtorek";
		if (weekday==3) weekday="Środa";
		if (weekday==4) weekday="Czwartek";
		if (weekday==5) weekday="Piątek";
		if (weekday==6) weekday="Sobota";
		if (weekday==0 || weekday==7) weekday="Niedziela";
	}
	document.getElementById("zegar").innerHTML = weekday+", "+day+"."+month+"."+year+", "+hour+":"+minute+":"+second;
	setTimeout("zegar();", 1000);
}

var number1 = Math.floor(Math.random()*12)+1;
var t1 = 0; 
var t2 = 0;

function Hide()
{
	$("#photos").fadeOut(800);
	$("#napis").fadeOut(800);	
	$("#miasta").fadeOut(800);
	$("#previous").fadeOut(800);
	$("#next").fadeOut(800);
}

function SetPhoto(x)
{
	clearTimeout(t1);
	clearTimeout(t2);
	number1 = x - 1;
	Hide();
	setTimeout("ChangePhoto()", 800);
}

function ChangePhoto()
{
	number1++; 
	if (number1>12) number1=1;
	var photo = "<img src=\"Photos/Photo" + number1 + ".jpg\" width = \"100%\" alt = \"Grafika\" />"; 
	document.getElementById("photos").innerHTML = photo;
	$("#photos").fadeIn(800);
	$("#napis").fadeIn(800);
	$("#miasta").fadeIn(800);
	$("#previous").fadeIn(800);
	$("#next").fadeIn(800);
	switch(number1)
	{
		case 1:
			document.getElementById("miasta").innerHTML = "<i>Sewilla</i>";
			break;
		case 2:
			document.getElementById("miasta").innerHTML = "<i style = \"color: white\";>Madryt</i>";
			break;
		case 3:
			document.getElementById("miasta").innerHTML = "<i>Barcelona</i>";
			break;
		case 4:
			document.getElementById("miasta").innerHTML = "<i>Walencja</i>";
			break;
		case 5:
			document.getElementById("miasta").innerHTML = "<i>Saragossa</i>";
			break;
		case 6:
			document.getElementById("miasta").innerHTML = "<i>Malaga</i>";
			break;		
		case 7:
			document.getElementById("miasta").innerHTML = "<i style = \"color: white\";>Murcja</i>";
			break;
		case 8:
			document.getElementById("miasta").innerHTML = "<i style = \"color: white\";>Palma de Mallorca</i>";
			break;
		case 9:
			document.getElementById("miasta").innerHTML = "<i style = \"color: white\";>Las Palmas</i>";
			break;		
		case 10:
			document.getElementById("miasta").innerHTML = "<i>Bilbao</i>";
			break;
		case 11:
			document.getElementById("miasta").innerHTML = "<i>Alicante</i>";
			break;
		case 12:
			document.getElementById("miasta").innerHTML = "<i>Kordoba</i>";
			break;
	}
	var city = "<i></i>";
	t1 = setTimeout("ChangePhoto()", 6430);
	t2 = setTimeout("Hide()", 5770);
}

function ChangePhoto2()
{
	number1--; 
	if (number1<1) number1=12;
	var photo = "<img src=\"Photos/Photo" + number1 + ".jpg\" width = \"100%\" alt = \"Grafika\" />"; 
	document.getElementById("photos").innerHTML = photo;
	$("#photos").fadeIn(800);
	$("#napis").fadeIn(800);
	$("#miasta").fadeIn(800);
	$("#previous").fadeIn(800);
	$("#next").fadeIn(800);
	switch(number1)
	{
		case 1:
			document.getElementById("miasta").innerHTML = "<i>Sewilla</i>";
			break;
		case 2:
			document.getElementById("miasta").innerHTML = "<i style = \"color: white\";>Madryt</i>";
			break;
		case 3:
			document.getElementById("miasta").innerHTML = "<i>Barcelona</i>";
			break;
		case 4:
			document.getElementById("miasta").innerHTML = "<i>Walencja</i>";
			break;
		case 5:
			document.getElementById("miasta").innerHTML = "<i>Saragossa</i>";
			break;
		case 6:
			document.getElementById("miasta").innerHTML = "<i>Malaga</i>";
			break;
		case 7:
			document.getElementById("miasta").innerHTML = "<i style = \"color: white\";>Murcja</i>";
			break;
		case 8:
			document.getElementById("miasta").innerHTML = "<i style = \"color: white\";>Palma de Mallorca</i>";
			break;
		case 9:
			document.getElementById("miasta").innerHTML = "<i style = \"color: white\";>Las Palmas</i>";
			break;		
		case 10:
			document.getElementById("miasta").innerHTML = "<i>Bilbao</i>";
			break;
		case 11:
			document.getElementById("miasta").innerHTML = "<i>Alicante</i>";
			break;
		case 12:
			document.getElementById("miasta").innerHTML = "<i>Kordoba</i>";
			break;
	}
	var city = "<i></i>";
	t1 = setTimeout("ChangePhoto()", 6430);
	t2 = setTimeout("Hide()", 5770);
}

function NextPhoto()
{
	clearTimeout(t1);
	clearTimeout(t2);
	Hide();
	setTimeout("ChangePhoto()", 800);
}

function PreviousPhoto()
{
	clearTimeout(t1);
	clearTimeout(t2);
	Hide();
	setTimeout("ChangePhoto2()", 800);
}