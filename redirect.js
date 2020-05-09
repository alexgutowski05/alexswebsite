// JavaScript Document
function microsoftOffice() {
	var redirect = confirm("You are leaving amgutowski.com and heading to a trusted external source.");
	if (redirect == true) {
		window.open("https://www.office.com", "_blank");
	} 
}
					
function office() {
	var redirect = confirm("You are leaving amgutowski.com and heading to a trusted external source.");
	if (redirect == true) {
		window.open("https://www.office.com/webapps", "_blank");
	} 
}

function sixthGrade() {
	var redirect = confirm("You are leaving amgutowski.com and heading to another webpage designed by Alex.");
	if (redirect == true) {
		window.open("https://sites.google.com/saline.k12.mi.us/gutowska", "_blank");
	} 
}

function instagram() {
	var redirect = confirm("You are leaving amgutowski.com and heading to a trusted external source.");
	if (redirect == true) {
		window.open("https://www.instagram.com/alex.the.potato.05", "_blank");
	} 
}

function twitter() {
	var redirect = confirm("You are leaving amgutowski.com and heading to a trusted external source.");
	if (redirect == true) {
		window.open("https://www.twitter.com/alexthepotato05", "_blank");
	} 
}

function youtube() {
	var redirect = confirm("You are leaving amgutowski.com and heading to a trusted external source.");
	if (redirect == true) {
		window.open("https://www.youtube.com/channel/UC0BvvbmIDaZYSTToUFG-wbg?view_as=subscriber", "_blank");
	} 
}

function vimeo() {
	var redirect = confirm("You are leaving amgutowski.com and heading to a trusted external source.");
	if (redirect == true) {
		window.open("https://www.vimeo.com/alexgutowski", "_blank");
	} 
}

var xhr= new XMLHttpRequest();	
xhr.open('GET', 'nav.html', true);
xhr.onreadystatechange= function() {
	if (this.readyState!==4) return;
	if (this.status!==200) return; // or whatever error handling you want
	document.getElementById('nav').innerHTML= this.responseText;
};
xhr.send();
