var today = new Date();
const gergoSzulihonapja=12;
const gergoSzulinapja=1;

var day = today.getDate();
var month = today.getMonth() + 1;
var year = today.getFullYear();
var maVan = (gergoSzulihonapja === month && gergoSzulinapja === day);
var out = document.getElementById("output");
out.innerHTML = 'Ma van Gergő szülinapja? ' + (maVan ? 'Igen' : 'Nem');
if(maVan){
	document.body.addEventListener('contextmenu', function(ev) {
    ev.preventDefault();
	if(window.confirm('Boldog szülinapot Gergő!!')){
		window.open('index.html#output','mywindow','width=400,height=200');
	}
    return false;
}, false);
	document.body.addEventListener('click', function(ev) {
    ev.preventDefault();	
    if(window.confirm('Boldog szülinapot Gergő!!')){
		window.open('index.html#output','mywindow','width=400,height=200');		
	}
    return false;
}, false);
}