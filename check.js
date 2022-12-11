function hasil() {
	var berat = document.getElementById('berat').value;
	var servis = document.getElementById('service').value;
	var tipe = document.getElementById('type').value;
	var member = document.getElementById('membership').value;

	var total;
	if (servis = wd) {
		total = berat*1000;
	}else if (servis = wi) {
		total = berat*1200;
	} else {
		total = berat*900;
	}
	document.getElementById('service').innerHTML = "Total Price is"+total;
}