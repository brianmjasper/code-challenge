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
	let newobj = {
		lastname : obj[i].last_name,
		firstname : obj[i].first_name,
		email : obj[i].email_address,
		specialty : obj[i].specialty,
		practice : obj[i].practice_name
		};
	
	PRACTICES.push(newobj);
	
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
	