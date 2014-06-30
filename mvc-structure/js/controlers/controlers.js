function addOutlayControler () {
	var form = document.getElementById('newOutlayForm');
	var size = 0, key, value = form.outlay.value;
	
	for (key in data[todayKeyWord].outlays) {
		size++;
		if (data[todayKeyWord].outlays[key] === value) {
			return false
		}
	}

	data[todayKeyWord].outlays['out' + size] = value;
}

function addCategoryControler () {
	var form = document.getElementById('newCategoryForm');
	var value = form.categoryName.value;

	for (var i = 0; i < data.categories.outlays.length; i++) {
		if (data.categories.outlays[i] === value) {
			return false;
		}
	}
	data.addItem();
}