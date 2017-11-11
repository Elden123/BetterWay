// JavaScript Document
//alert("Hello World");
var config = {
	apiKey: "AIzaSyDW30Yc2FAmY8Dq_uqyNQ5G9SZtqLboFBE",
	authDomain: "better-way-a8f71.firebaseapp.com",
	databaseURL: "https://better-way-a8f71.firebaseio.com",
	projectId: "better-way-a8f71",
	storageBucket: "",
	messagingSenderId: "692619217213"
};
firebase.initializeApp(config);

function signIn(userEmail, userPassword) {
	firebase.auth().createUserWithEmailAndPassword(userEmail, userPassword).catch(function(error) {
		// Handle Errors here.
		//var errorCode = error.code;
		//var errorMessage = error.message;
		//alert(error.code);
		//alert(error.message);
	});
}
//alert(4);