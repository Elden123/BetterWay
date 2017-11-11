
$(document).ready(function() { 

	$("#login_form_content").hide();
	$("#form_submit_login").hide();
	
	$('.btn').on('click', function () {
		$('.form').addClass('form--no');
		
	});
	
	$('#form_submit_register').on('click', function () {
		
		window.location.href = "additional_info.html";
	});
	$('#form_submit_login').on('click', function () {
		
		window.location.href = "home.html";
	});
	
	$('#register_button_id').on('click',function(){ 
	
		$("#register_button_id").css("background-color","#a09486");
		$("#login_button_id").css("background-color","#ABA194");
		$("#login_form_content").hide();
		$("#register_form_content").fadeIn(500);
		
		$("#form_submit_login").hide();
		$("#form_submit_register").fadeIn(500);
	});
	$('#login_button_id').on('click',function(){ 
	
		$('#login_button_id').css("background-color","#a09486");
		$('#register_button_id').css("background-color","#ABA194");
		$("#register_form_content").hide();
		$("#login_form_content").fadeIn(500);
		
		$("#form_submit_register").hide();
		$("#form_submit_login").fadeIn(500);
	});

	// For form transitions on button click

});
