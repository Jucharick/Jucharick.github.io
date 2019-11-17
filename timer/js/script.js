$(document).ready(function () {

function get_timer() {
	
	// var date_new = "December 31,2019 23:59";

	var date_t = new Date(2019,11,31,23,59,59);
	var date = new Date();

	var timer = date_t - date;
	

	if(date_t > date) {	

		// дней до даты_т делим на:60(час) 60(минута) 1000(секунда) 24(часов в сутках)	
		var day = parseInt(timer/(60*60*1000*24)); // функция в числовой формат, откидывается дробная часть
		if(day < 10) {
			day = '0' + day;
		} // если у нас 1 число, то к значение будет выводиться как 01	
		day = day.toString(); // преобразуем в строку

		// часов до даты_т делим на: 60(час) 60(минута) 1000(секунда)	
		var hour = parseInt(timer/(60*60*1000))%24; // % - остаток от деления на 24 (чтоб не отображалось все кол-во часов до даты, т.к. дни (24) у нас учитываются в day)
		if(hour < 10) {
			hour = '0' + hour;
		}
		hour = hour.toString();
		
		// minutes
		var min = parseInt(timer/(1000*60))%60;
		if(min < 10) {
			min = '0' + min;
		}
		min = min.toString();
		
		// seconds
		var sec = parseInt(timer/1000)%60;
		if(sec < 10) {
			sec = '0' + sec;
		}
		sec = sec.toString();
		


		///////// day /////////
		if(day[1] == 9 && 
			hour[0] == 2 && 
			hour[1] == 3 && 
			min[0] == 5 && 
			min[1] == 9 && 
			sec[0] == 5 && 
			sec[1] == 9) {
			animation($("#day0"),day[0]);
		}
		// [] - обращаемся по индексу

		else {
			$("#day0").html(day[0]);
		}
		if(hour[0] == 2 && 
			hour[1] == 3 && 
			min[0] == 5 && 
			min[1] == 9 && 
			sec[0] == 5 && 
			sec[1] == 9) {
			animation($("#day1"),day[1]);
		}
		else {
			$("#day1").html(day[1]);
		}


		///////// hour /////////
		if(hour[1] == 3 && // 24 часа (при 3 в единицах часов происходит смена разряда)
			min[0] == 5 && 
			min[1] == 9 && 
			sec[0] == 5 && 
			sec[1] == 9) {
			animation($("#hour0"),hour[0]);
		}
		else {
			$("#hour0").html(hour[0]);
		}
		if(min[0] == 5 && 
			min[1] == 9 && 
			sec[0] == 5 && 
			sec[1] == 9) {
			animation($("#hour1"),hour[1]);
		}
		else {
			$("#hour1").html(hour[1]);
		}
		

		///////// minutes /////////
		if(min[1] == 9 &&  // учитываем так же секунды
			sec[0] == 5 && // десятые секунд
			sec[1] == 9) { // единица секунд
			animation($("#min0"),min[0]);
		}
		else {
			$("#min0").html(min[0]);
		}
		if(sec[0] == 5 && sec[1] == 9) {
			animation($("#min1"),min[1]);
		}
		else {
			$("#min1").html(min[1]);
		}


		///////// seconds /////////
		if(sec[1] == 9) {
			// десятые появляются когда единыца равна 9
			animation($("#sec0"),sec[0]);
		}
		else {
			$("#sec0").html(sec[0]);
		}
		animation($("#sec1"),sec[1]);	
		

		setTimeout(get_timer,1000);
	}
	else {
		$("#clock").html("<span id='stop'>!</span>");
	}
	
}


function animation(option,param) {
	option.html(param)
		.css({'marginTop':'-20px','opacity':'0'})
		.animate({'marginTop':'0px','opacity':'1'});
}


get_timer();
});
