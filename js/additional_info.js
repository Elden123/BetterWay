$(document).ready(function() { 

	document.getElementById("title_button_id").disabled = true;

	$('#register_button_id').on('click',function(){ 
		
			$("#register_button_id").css("background-color","#a09486");
			$("#login_button_id").css("background-color","#ABA194");
			$("#login_form_content").hide();
			$("#register_form_content").fadeIn(500);
			
			$("#form_submit_login").hide();
			$("#form_submit_register").fadeIn(500);
		});
		
	$('#form_submit_register').on('click',function(){ 
		
			window.location.href = "home.html";
	});
		
	
});