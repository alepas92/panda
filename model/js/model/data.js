var date = getDate();
var todayKeyWord = 'day' + date.day + '_' + date.month + '_' + date.year;

console.log(todayKeyWord);


// Categories
function Data () {
	this.categories = {};
	this.regular = {};
	this.forecast = {};
	this[todayKeyWord] = {};
	this[todayKeyWord + '_statistic'] = {};
	this.totalStatistic = {};
}
	Data.prototype.getCategories = function () {
		if (!localStorage.categories) {
			var defaultCategories = {
				'outlays' : ['hobbies', 'eating', 'transport'], 
				'incomes' : ['salary']
			};

			LS.set('categories', defaultCategories);
			this.categories = LS.get('categories');
		} else {
			this.categories = LS.get('categories');
		}
	};

	Data.prototype.getRegular = function () {
		if (!localStorage.regular) {
			var defaultRegular = {
				'day' : {
					'outlays' : {
						'out0' : {
							'cat' : 'transport',
							'cost' : 500
						}
					},
					'incomes' : {}
				},

				'month' : {
					'outlays' : {},
					'incomes' : {
						'inc0' : {
							'cat' : 'salary',
							'cost' : 1000
						}
					}
				},

				'year' : {
					'outlays' : {},
					'incomes' : {}
				}
			};

			LS.set('regular', defaultRegular);
			this.regular = LS.get('regular');
		} else {
			this.regular = LS.get('regular');
		}
	};

	Data.prototype.getForecast = function () {
		if (!localStorage.forecast) {
			var defaultForecast = {
				'month' : {
					'outlays' : {},
					'incomes' : {}
				},

				'year' : {
					'outlays' : {},
					'incomes' : {}
				}
			};

			LS.set('forecast', defaultForecast);
			this.forecast = LS.get('forecast');
		} else {
			this.forecast = LS.get('forecast');
		}
	};

	Data.prototype.getDayly = function () {
		if (!localStorage[todayKeyWord]){
			var defaultDayly = {
				'outlays' : {},
				'incomes' : {}
			};

			LS.set(todayKeyWord, defaultDayly);
			this[todayKeyWord] = LS.get(todayKeyWord);
		} else {
			this[todayKeyWord] = LS.get(todayKeyWord);
		}
	};

	Data.prototype.getDaylyStatistic = function () {
		if (!localStorage[todayKeyWord + '_statistic']){
			var defaultDaylyStatistic = {
				'outlays' : {},
				'incomes' : {}
			};

			LS.set(todayKeyWord + '_statistic', defaultDaylyStatistic);
			this[todayKeyWord + '_statistic'] = LS.get(todayKeyWord + '_statistic', defaultDaylyStatistic);
		} else {
			this[todayKeyWord] = LS.get(todayKeyWord + '_statistic');
		}
	};

	Data.prototype.getTotalStatistic = function () {
		if (!localStorage.totalStatistic){
			var defaultTotalStatistic = {
				'month' : {
					'outlays' : {},
					'incomes' : {}
				},

				'year' : {
					'outlays' : {},
					'incomes' : {}
				},

				'currentBalance' : 0,
				'currentOutlays' : 0,
				'currentIncomes' : 0
			};

			LS.set('totalStatistic', defaultTotalStatistic);
			this.totalStatistic = LS.get('totalStatistic');
		} else {
			this.totalStatistic = LS.get('totalStatistic');
		}
	};

var data = new Data();
data.getCategories();
data.getRegular();
data.getForecast();
data.getDaylyStatistic();
data.getDayly();
data.getTotalStatistic();






//Date
function getDate() {
	var d = new Date(),
		date = {};


	date.day = d.getDate(),
	date.month = d.getMonth(),
	date.year = d.getFullYear();
	
	if (date.day < 10) {
		date.day = '0' + date.day;
	}

	if (date.month < 10) {
		date.month = '0' + date.month;
	}


	return date;
}