if (!localStorage.categories) {	
	var categories = ['hobbies', 'eating','transport','phone&internet'];
	setItemIntoLS('categories', JSON.stringify(categories));
} else {
	var categories = getLSItem('categories');
};var todayKeyWord = getDate() + '';
	if (localStorage.getItem(todayKeyWord) !== null) {
}


function setItemIntoLS(name, value) {
	if (typeof(value) === 'object') {
		localStorage[name] = JSON.stringify(value);
	} else {
		localStorage[name] = value;
	}
}	

function addNewCategoryIntoLsItem(itemName, value) {
	var item = getLSItem(itemName);
	item.push(value);
	setItemIntoLS('categories', item);
	categories = getLSItem('categories');
}

function getLSItem(name) {
	if (localStorage[name] !== null) {
		return JSON.parse(localStorage[name]);
	} 

	return false;
}


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

function getUserCategories() {
	return JSON.parse(localStorage.categories);
}

function deleteItem(itemName) {
	localStorage.removeItem(itemName);
}
;function displayCategoriesContainer() {
	var block = document.getElementById('categories');
	if (block.className === 'noneDisplay') {
		block.className = 'displayBlock'; 	
	} else {
		block.className = 'noneDisplay';
	}
}

function addCategoryIntoLS() {
	var field = document.getElementById('newCategoryName');
	if (field.value === '') {
		console.log('Field is empty');
	} else {
		categoryName = field.value;
		addNewCategoryIntoLsItem("categories", categoryName);
		addCategoryIntoLayout();
	}
}

function displaySpendsTools() {
	var block = document.getElementById('spendsTools');
	if (block.className === 'noneDisplay') {
		block.className = 'displayBlock'; 	
	} else {
		block.className = 'noneDisplay';
	}
}


;var iterator = 0;
createField();

function createField() {
	var placeHolder = document.getElementById("spendsContainer");

	var fieldset = document.createElement("fieldset");
	fieldset.className = "cost-field";

	placeHolder.appendChild(fieldset).appendChild(createLable("Category: ", "category"));
	placeHolder.appendChild(fieldset).appendChild(createLable("Cost: ", "cost"));
	iterator++;
}
	function createLable(lblCnt, type) {
		var label = document.createElement("label");
			label.textContent = lblCnt;
		if (type === "cost") {
			label.appendChild(createInput("cost"));
		} else {
			label.appendChild(createInput("category"));
		}
		return label;
	}

	function createInput(inpName) {
		var input = document.createElement("input");
		if (inpName === "category") {
			input.setAttribute("list", "categoriesOptionList");
		} else {
			input.type = "number";
			input.className = "costInput";
			input.addEventListener("keyup", addValue, false);
		}
		input.name = inpName + iterator;

		return input;
	}

(function createCategoriesDatalist() {
	var datalist = document.createElement("datalist");
		datalist.id = "categoriesOptionList",
		categories = getUserCategories();

	for (var i = 0; i < categories.length; i++) {
		var option = document.createElement("option");
		option.value = categories[i];
		datalist.appendChild(option);
	}

	document.body.appendChild(datalist);
})();

(function putCategoriesIntoTools() {
	var catTools = document.getElementById("categoriesToolsList");
	for (var key in categories) {
		var li = document.createElement("li");
			li.textContent = categories[key];
		
		catTools.appendChild(li);
	}

})();

function addCategoryIntoLayout() {
	var datalist = document.getElementById('categoriesOptionList'),
		option = document.createElement('option');
		option.value = categories[categories.length-1];
	datalist.appendChild(option);

	var catTools = document.getElementById('categoriesToolsList'),
		li = document.createElement('li');

	li.textContent = categories[categories.length-1];
	catTools.appendChild(li);
}

function addValue() {
	var form = document.getElementById('spendsContainer'),
		totalCost = 0;

	for (var i = 0; i < iterator; i++) {
		var cost = form['cost' + i].value;
		if(cost !== ''){
			totalCost += parseInt(cost);
		}
	}

	document.getElementById('totalCost').value = totalCost;
}