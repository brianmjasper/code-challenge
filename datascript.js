var mydata = '[' +
	'{"last_name": "Harris", "first_name": "Mike", "email_address": "mharris@updox.com", "specialty": "Pediatrics", "practice_name": "Harris Pediatrics"},' +
	'{"last_name": "Wijoyo", "first_name": "Bimo", "email_address": "bwijoyo@updox.com", "specialty": "Podiatry", "practice_name": "Wijoyo Podiatry"},' +
	'{"last_name": "Rose", "first_name": "Nate", "email_address": "nrose@updox.com", "specialty": "Surgery", "practice_name": "Rose Cutters"},' +
	'{"last_name": "Carlson", "first_name": "Mike", "email_address": "mcarlson@updox.com", "specialty": "Orthopedics", "practice_name": "Carlson Orthopedics"},' +
	'{"last_name": "Witting", "first_name": "Mike", "email_address": "mwitting@updox.com", "specialty": "Pediatrics", "practice_name": "Witting’s Well Kids Pediatrics"},' +
	'{"last_name": "Juday", "first_name": "Tobin", "email_address": "tjuday@updox.com", "specialty": "General Medicine", "practice_name": "Juday Family Practice"}]';

// parse above data
var obj = JSON.parse(mydata);

// organize data into objects we can play with, all held in an array

document.getElementById("provider-list").innerHTML = "";

var PRACTICES = [];

for (var i = 0; i < obj.length; i++){
	createobj(obj[i].last_name, obj[i].first_name, obj[i].email_address, obj[i].specialty, obj[i].practice_name);
}

function createobj(last, first, email, spc, prac){
	let newobj = {
		lastname : last,
		firstname : first,
		email : email,
		specialty : spc,
		practice : prac
		};
	
	PRACTICES.unshift(newobj);
	
	addtolist(newobj);
}

function addtolist(itm) {
	let providerlist = document.getElementById("provider-list");
	let providerHTML = providerlist.innerHTML;
	
	let newline = "<label><table><tr><td><input type='checkbox' /></td><td><h2>" + itm.lastname + ", " + itm.firstname + "</h2>";
	
	newline += "<p>" + itm.email + "</p></td>";
	
	newline += "<td><h3>" + itm.specialty + "</h3>";
	
	newline += "<p>" + itm.practice + "</p></td></tr></table></label>";
	
	providerlist.innerHTML = newline + providerHTML;
}

function removed(){
	let CHECKS = [].slice.call( document.querySelectorAll( "#provider-list input[type=checkbox]" ) );
	
	let allChecks = [];
	
	for (var i = 0; i < CHECKS.length; i++){
		if (CHECKS[i].checked){
			allChecks.push(i);
		}
	}
	
	if (allChecks.length > 0){
		cleanlist(allChecks);
	}
		
}

function cleanlist(arr){
	
	for (var i = arr.length-1; i > -1; --i){
		PRACTICES.splice(arr[i],1);
	}
	
	document.getElementById("provider-list").innerHTML = "";
	
	for (var i = PRACTICES.length-1; i >= 0; --i){
		addtolist(PRACTICES[i]);
	}
	
}

function sorted() {
	document.getElementById("provider-list").innerHTML = "";
	
	let val = document.getElementById("myselect").value;
	
	switch (val){
		case "Name (A-Z)":
			PRACTICES.sort(function(a,b){
				let nameA = a.lastname.toLowerCase();
				let nameB = b.lastname.toLowerCase();
				if (nameA < nameB)
					return -1
				if (nameA > nameB)
					return 1
				return 0
			});
			break;
			
		case "Name (Z-A)":
			PRACTICES.sort(function(a,b){
				let nameA = a.lastname.toLowerCase();
				let nameB = b.lastname.toLowerCase();
				if (nameA < nameB)
					return 1
				if (nameA > nameB)
					return -1
				return 0
			});
			break;
			
		case "Email (A-Z)":
			PRACTICES.sort(function(a,b){
				let nameA = a.email.toLowerCase();
				let nameB = b.email.toLowerCase();
				if (nameA < nameB)
					return -1
				if (nameA > nameB)
					return 1
				return 0
			});
			break;
			
		case "Email (Z-A)":
			PRACTICES.sort(function(a,b){
				let nameA = a.email.toLowerCase();
				let nameB = b.email.toLowerCase();
				if (nameA < nameB)
					return 1
				if (nameA > nameB)
					return -1
				return 0
			});
			break;
			
		case "Specialty (A-Z)":
			PRACTICES.sort(function(a,b){
				let nameA = a.specialty.toLowerCase();
				let nameB = b.specialty.toLowerCase();
				if (nameA < nameB)
					return -1
				if (nameA > nameB)
					return 1
				return 0
			});
			break;
			
		case "Specialty (Z-A)":
			PRACTICES.sort(function(a,b){
				let nameA = a.specialty.toLowerCase();
				let nameB = b.specialty.toLowerCase();
				if (nameA < nameB)
					return 1
				if (nameA > nameB)
					return -1
				return 0
			});
			break;
		
		case "Practice (A-Z)":
			PRACTICES.sort(function(a,b){
				let nameA = a.practice.toLowerCase();
				let nameB = b.practice.toLowerCase();
				if (nameA < nameB)
					return -1
				if (nameA > nameB)
					return 1
				return 0
			});
			break;
			
		case "Practice (Z-A)":
			PRACTICES.sort(function(a,b){
				let nameA = a.practice.toLowerCase();
				let nameB = b.practice.toLowerCase();
				if (nameA < nameB)
					return 1
				if (nameA > nameB)
					return -1
				return 0
			});
			break;
	}
	
	for (var i = PRACTICES.length-1; i >= 0; --i){
		addtolist(PRACTICES[i]);
	}
}

function submitted() {
	let newLast = document.getElementById("inLastName").value;
	let newFirst = document.getElementById("inFirstName").value;
	let newEmail = document.getElementById("inEmail").value;
	let newSpecialty = document.getElementById("inSpecialty").value;
	let newPractice = document.getElementById("inPractice").value;
	
	let completed = true;
	
	if (newLast === "undefined" || newLast === "") {
		completed = false;
		document.getElementById("redxLast").classList.remove("hide");
		document.getElementById("inLastName").classList.add("redoutline");
	} else {
		document.getElementById("redxLast").classList.add("hide");
		document.getElementById("inLastName").classList.remove("redoutline");
	}
	
	if (newFirst === "undefined" || newFirst === "") {
		completed = false;
		document.getElementById("redxFirst").classList.remove("hide");
		document.getElementById("inFirstName").classList.add("redoutline");
	} else {
		document.getElementById("redxFirst").classList.add("hide");
		document.getElementById("inFirstName").classList.remove("redoutline");
	}
	
	if (newEmail === "undefined" || newEmail === "") {
		completed = false;
		document.getElementById("redxEmail").classList.remove("hide");
		document.getElementById("inEmail").classList.add("redoutline");
	} else {
		document.getElementById("redxEmail").classList.add("hide");
		document.getElementById("inEmail").classList.remove("redoutline");
	}
	
	if (newSpecialty === "undefined") {
		newSpecialty = "";
	}
	
	if (newPractice === "undefined") {
		newPractice = "";
	}
	
	if (completed) {
		createobj(newLast, newFirst, newEmail, newSpecialty, newPractice);
	}
	
}
	