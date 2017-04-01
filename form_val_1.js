
function showHide(){
	if(document.getElementById("formdiv").style.display=="block")
		document.getElementById("formdiv").style.display="none";
	else
		document.getElementById("formdiv").style.display="block";
}


function validateForm(){
	var fn= document.getElementById ("firstname").value;
	var ln= document.getElementById ("lastname").value;
	var uname = document.getElementById("username").value;
	var pwd = document.getElementById("password").value;
	var rpw = document.getElementById("reenterpassword").value;
	var em= document.getElementById ("email").value;
	
	
	
	if(uname=="" && pwd=="" && em=="" && fn==""  &&  ln==""  && rpw=="" ){		
		alert("Error: You did not enter a Username or Password or Email or Firstname or Lastname or Re-enterpassword ");
		return false;
	}else if(uname==""){			
		alert("Error: You did not enter a Username");
		return false;
	}else if(pwd==""){			
		alert("Error: You did not enter a Password");
		return false;
	}else if(em=="") {
	    alert ("Error: You did not enter a Email");	
		return false;
	}else if(fn==""){			
		alert("Error: You did not enter a Firstname");
		return false;
	}else if(ln==""){			
		alert("Error: You did not enter a Lastname");
		return false;
	}else if(rpw==""){			
		alert("Error: You did not enter a Re-enterpassword");
		return false;
	}else{	
	
		return true;
	}
}


function toggle_div_fun(id) {
	var divelement = document.getElementById(id);
	
	if(divelement.style.display == 'none')
		divelement.style.display = 'block';
	else	
		divelement.style.display = 'none';
}
function toggle_div_fun1(id) {
	var divelement = document.getElementById(id);
	
	if(divelement.style.display == 'none')
		divelement.style.display = 'block';
	else	
		divelement.style.display = 'none';
}
function toggle_div_fun2(id) {
	var divelement = document.getElementById(id);
	
	if(divelement.style.display == 'none')
		divelement.style.display = 'block';
	else	
		divelement.style.display = 'none';
}
function toggle_div_fun3(id) {
	var divelement = document.getElementById(id);
	
	if(divelement.style.display == 'none')
		divelement.style.display = 'block';
	else	
		divelement.style.display = 'none';
}
function toggle_div_fun4(id) {
	var divelement = document.getElementById(id);
	
	if(divelement.style.display == 'none')
		divelement.style.display = 'block';
	else	
		divelement.style.display = 'none';
}


function toggle_div_fun5(id) {
	var divelement = document.getElementById(id);
	
	if(divelement.style.display == 'none')
		divelement.style.display = 'block';
	else	
		divelement.style.display = 'none';
}
function login(){
	var uname = document.getElementById("username").value;
	var pwd = document.getElementById("password").value;

	if(uname=="" && pwd==""  ){		
		alert("Error: You did not enter a Username or Password ");
		return false;
	}else if(uname==""){			
		alert("Error: You did not enter a Username");
		return false;
	}else if(pwd==""){			
		alert("Error: You did not enter a Password");
		return false;
	}else{	
	
		return true;
	}
}
function aboutForm(){
	var nm= document.getElementById ("name").value;
	var ad= document.getElementById ("address").value;
	var em= document.getElementById ("email").value;
	var pn= document.getElementById ("number").value;
	var cm= document.getElementById ("comments").value;
	
if(nm=="" && ad=="" && em=="" && pn=="" && cm==""  ){		
		alert("Error: You did not enter a Name or Address or Email or Phone Number or a Comment ");
		return false;
	}else if(nm==""){			
		alert("Error: You did not enter a Name");
		return false;
	}else if(ad==""){			
		alert("Error: You did not enter a Address");
		return false;
	}else if(em==""){			
		alert("Error: You did not enter a Email");
		return false;
	}else if(pn==""){			
		alert("Error: You did not enter a Phone Number");
		return false;
	}else if(cm==""){			
		alert("Error: You did not enter a Comment");
		return false;
	}else{	
	
		return true;
	}
}