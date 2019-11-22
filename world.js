var sanitizeHTML = function (str) {
	var temp = document.createElement('div');
	temp.textContent = str;
	return temp.innerHTML;
};
document.addEventListener('click', function (event) {

	if (event.target.matches('#lookup')) {
		
		
				var httpRequest = new XMLHttpRequest();
var url = "https://5116b72309f7452db82dee51fb621baf.vfs.cloud9.us-east-1.amazonaws.com/world.php";
/*-- remember to change url upon submission--->*/
var country = sanitizeHTML(document.getElementById("country").value);

httpRequest.onreadystatechange = function(){
	if (httpRequest.readyState === XMLHttpRequest.DONE) {
		console.log(httpRequest.status);
		//alert(httpRequest.status);
	if (httpRequest.status === 200) {
	
	//alert(guy);
	document.getElementById("result").innerHTML = this.responseText;
	
	
	
	} else {
	alert('There was a problem with the request.');
	}
	}}
httpRequest.open("GET", url +"?country="+country, true);
httpRequest.send();
			
			}
	if (event.target.matches('#context')) {
		var httpRequest = new XMLHttpRequest();
var url = "https://5116b72309f7452db82dee51fb621baf.vfs.cloud9.us-east-1.amazonaws.com/world.php";
/*or var url ="http://localhost:8080/world.php";*/
var country = sanitizeHTML(document.getElementById("country").value);

httpRequest.onreadystatechange = function(){
	if (httpRequest.readyState === XMLHttpRequest.DONE) {
		console.log(httpRequest.status);
		//alert(httpRequest.status);
	if (httpRequest.status === 200) {
	
	//alert(guy);
	document.getElementById("result").innerHTML = this.responseText;
	
	
	
	} else {
	alert('There was a problem with the request.');
	}
	}}
httpRequest.open("GET", url +"?country="+country+ "&context=cities", true);
httpRequest.send();
}
	}
    , false);