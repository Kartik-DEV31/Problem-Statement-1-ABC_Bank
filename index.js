	var flag=1;




function contactus(){
alert("Phone no.: xxx-xxx-xxxx  email : xyz@abcbank.co.in")	
}

function validation() {
	var user = document.bank_login.email.value
	var pass = document.bank_login.password.value
	

	if (user==""||user==null) {
		flag=flag+1;
		alert("email cannot be empty");
		return false;
	}


	if(pass!=null||pass!="")
	{
			

		if (pass.length<8)
		{

			
			alert("please enter a correct password. you're password length was wrong i.e. "+pass.length);
			return false;
		}

	}

		
}

function hover(){

		if ( flag==2)
		{
			alert("Please fill all the fields !!!");
			document.getElementById("pre").style.color="RED";
			return true;
		}

		else{
			document.getElementById("pre").style.color="green";
		}
	}	

function nothover(){

			document.getElementById("pre").style.color="darkslategrey";
			
		
	}


function hoverABC(){
	document.getElementById("ABC").style.color="orange"; 

}	
function nothoverABC(){

	document.getElementById("ABC").style.color="blue";
}