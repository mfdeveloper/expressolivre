dateCalendar = {
	//sortMonthOfNumber
	monthNamesShort:
		[
			'Jan',
			'Fev',
			'Mar',
			'Abr',
			'Mai',
			'Jun',
			'Jul',
			'Ago',
			'Set',
			'Out',
			'Nov',
			'Dez'
		],

	//MonthOfNumber
	monthNames:
		[	
			'Janeiro',
			'Fevereiro',
			'Mar�o',
			'Abril',
			'Maio',
			'Junho',
			'Julho',
			'Agosto',
			'Setembro',
			'Outubro',
			'Novembro',
			'Dezembro'
		],

	//weekOfDay
	dayNames:
		[
			'Domingo',
			'Segunda',
			'Ter�a',
			'Quarta',
			'Quinta',
			'Sexta',
			'S�bado'
		],
	
	dayOfWeek:
		{
			'SUN': 0,
			'MON': 1,
			'TUE': 2,
			'WED': 3,
			'THU': 4,
			'FRI': 5,
			'SAT': 6
		},
		
	dayNamesShort:
		[
			'Dom',
			'Seg',
			'Ter',
			'Qua',
			'Qui',
			'Sex',
			'Sab'
		],
		
	dayNamesShortest:
		[
			'D',
			'S',
			'T',
			'Q',
			'Q ',
			'S ',
			'S'
		],
	
	timeunit : 
	{	
		'h': 'hora',
		'd': 'dia',
		'm': 'minuto'
	},
	
	alarmtype:{
		'alert' : 'alerta',
		'mail' : 'email',
		'sms': 'sms'
	},
	
	defaultToAmPm : function (Hour)
	{
		var HourAmPm = Hour.split(":");
		if(HourAmPm[0] == 0)
			HourAmPm[0] = 12;	
		if(HourAmPm[0] < 12){
			Hour += (Hour.length == 5) ? " am" : "";
		}else if(HourAmPm[0] == 12){
			Hour += (Hour.length == 5) ? " pm" : "";
		}else
			Hour = (((HourAmPm[0]-12)>=10) ? "" : "0") +(HourAmPm[0]-12)+":"+HourAmPm[1]+ ((Hour.length == 5) ? " pm" : "");
		return Hour;
	},
	
	AmPmTo24 : function (Hour)
	{
		var Hour24h = Hour.trim();
		var AmPm;
		if (Hour24h.length == 0) return;
		if (Hour24h.length > 5) {
		  AmPm = Hour24h.slice(-2);
		  Hour24h = Hour24h.substring(0,5);
		}
		
		var Hour24h = Hour24h.split(":");
		
		if (Hour24h[0] == 12)
		  Hour24h[0] = "00";

		if (AmPm === "pm") {
		  Hour24h[0] = parseInt(Hour24h[0]) + 12;
		} 
		
		return Hour24h[0] + ":" + Hour24h[1];
	},
	
    // 01:00 retorna 1, 10:00 retorna 10, 22:00 retorna 10
    getShortestTime : function(Hour) {
                var _hour = this.defaultToAmPm(Hour);
                if (_hour[0] == 0)
                  _hour = _hour[1];
                else
                  _hour = _hour.substring(0,2);
                
                return _hour;
	},
	
	formatDate: function( date, format ){
	
		return dateFormat( date, format.replace(/m/g, 'M') );

	},

	toString: function(date, format){
			return dateFormat( date, format.replace(/M/g, 'm') );
	},
	
	decodeRange: function(date, range){
			return (parseInt(date.getTime()) + (range * 60000));
	}
		
}

