var $ = function (id) {
	
	return document.getElementById(id);
	
}

var joinList = function () {
	var emailAddress1 = $("emailaddress1").value;
	var emailAddress2 = $("emailaddress2").value;
	var isValid = true;

	if (emailAddress1 == "") {
		$("email_address1_error").firstChild.nodeValue = "This field is required.";
		isValid = false;
	} else {$("email_address1_error").fistChild.nodeValue = "";}
	
	if (emailAddress1 !== emailAddress2) {
		$("email_address2_error").firstChild.nodeValue = "This entry must equal first entry."; isValid = false;
		
	} else {$(email_address2_error).firstChild.nodeValue = "";}
	}
