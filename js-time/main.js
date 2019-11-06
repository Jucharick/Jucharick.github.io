function time () {
  var date = new Date();
  text = "Сейчас " + date.getFullYear() + " год" + "<br>";
  monf = date.getMonth()+1;
  text += "\n Месяц сейчас - " + monf + "<br>";
  text += "\n День - " + date.getDate() + "<br>";
  text += "\n Часов - " + date.getHours() + "<br>";
  text += "\n Минут - " + date.getMinutes() + "<br>";
  text += "\n секунд - " + date.getSeconds() + "<br>";
  document.querySelector(".now").innerHTML = text;
};

setInterval(time,1000);

var newDate = new Date(2019, 11, 31, 23, 59, 59);
newDate.setMinutes(58);
text = "Сейчас " + newDate.getFullYear() + " год" + "<br>";
monfNew = newDate.getMonth()+1;
text += "\n Месяц будет - " + monfNew + "<br>";
text += "\n День - " + newDate.getDate() + "<br>";
text += "\n Часов - " + newDate.getHours() + "<br>";
text += "\n Минут - " + newDate.getMinutes() + "<br>";
text += "\n секунд - " + newDate.getSeconds() + "<br>";
document.querySelector("#new").innerHTML = text;


// время считается по Unix. количество миллисекунд, прошедших с юникс эпохи 1970 г 1 янв
document.querySelector("button").onclick = function () {
	var dateStart = document.querySelector("#start-date").value;
	var dateEnd = document.querySelector("#end-date").value;
	dateStart = Date.parse(dateStart); // преобразовываем дату в миллисекунды
	dateEnd = Date.parse(dateEnd);
	var out = document.querySelector("#out");
	for (i = dateStart; i <= dateEnd; i = i+24*60*60*1000) /* увеличиваем i на сутки */ {
		out.innerHTML += new Date(i).toISOString().substr(0,10) + "<br>"; /*toISOString - метод выводит дату год-месяц-день; substr - метод извлечения подстроки*/
	} 

}
// таймер
function time2() {
	today = new Date();
	timeend= new Date(2019, 11, 31, 23, 59, 59);
	today = Math.floor((timeend-today)/1000);
	tsec=today%60; today=Math.floor(today/60); if(tsec<10)tsec='0'+tsec;
	tmin=today%60; today=Math.floor(today/60); if(tmin<10)tmin='0'+tmin;
	thour=today%24; today=Math.floor(today/24);
	timestr=today +" дней "+ thour+" часов "+tmin+" минут "+tsec+" секунд";
	document.getElementById('t').innerHTML=timestr;
};
setInterval(time2,1000);
