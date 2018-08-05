//The Encrypt libary is made by Rye Terrell (wwwtyro), and can be found here: https://github.com/wwwtyro/cryptico
//The sjcl.js is made by bitwiseshiftleft, and can be found here: https://github.com/bitwiseshiftleft/sjcl
	//get the date in miliseconds
	var  url, usr, pass, chiper, hashed, plain, mpass
	var bits = 1024
	var Private = localStorage.getItem("encoder")
	var login = 0;
	//let login = 0

	function hash(){
		hashed = SHA1(localStorage.getItem(impass))
		localStorage.setItem('HASH', hashed)
	}

	
	function AddLogin(){
		login++
		url = document.getElementById("URL").value
		usr = document.getElementById("usr").value
		plain = document.getElementById("pass").value
		chiper = sjcl.encrypt(Private, plain)
		localStorage.setItem(url, chiper);
		localStorage.setItem(login + 'l', usr)
		localStorage.setItem(login + 'u',  url)
		localStorage.setItem("login",login)
		document.getElementById(login).style.display 	= "block";

	}
	document.getElementById("submit").onclick = AddLogin;
  
	function display(website, user, password, number){
		document.getElementById(number + '-1').innerHTML = website//URL
		document.getElementById(number + '-2').innerHTML = user//usr
		document.getElementById(number + '-3').innerHTML = password//pass
	}
	function displayCreds(number){
		url = localStorage.getItem(number + 'u')
		usr = localStorage.getItem(number + 'l')
		pass = localStorage.getItem(url)
		plain = sjcl.decrypt(Private, pass)
		display(url, usr, plain, number)
	}
// Get the modal
	var modal = document.getElementById('id01');
	
	function randomPassword(length) {
		var chars = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()-+<>ABCDEFGHIJKLMNOP1234567890";
		var pass124 = "";
		for (var x = 0; x < length; x++) {
			var i = Math.floor(Math.random() * chars.length);
			pass124 += chars.charAt(i);
		}
		return pass124;
	}

	function generate() {
		document.getElementById("pass").value = randomPassword(15)
	}

// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
		if (event.target == modal) {
			modal.style.display = "none";
		}
	}
	function showPassword(){
		var x = document.getElementById("pass");
		if (x.type === "password") {
			x.type = "text";
		} 	else {
			x.type = "password";
		}

	}
