
<!-- E-mail API script -->
		<script type="text/javascript" src="https://cdn.emailjs.com/dist/email.min.js"></script>
		<script type="text/javascript">
		   (function(){
			  emailjs.init("user_MJi0lvyxnqow6o973Zdpz");
		   })();
		</script>
		
		<script  src="js/match_notification.js"></script>	
		



$(document).ready(function() { 

	$('#submit_ride_request').on('click',function(){ 
			var messageName = 'BetterWay Notification';
			var messageBody = 'Wololo!';
			match_notification(messageName, messageBody);
			
			// Go to recently booked page if success
				// NEED TO IMPLEMENT
			//
		});
		
});

// Sends notification to e-mail
function match_notification(message_name, message_body) {

	var service_id = 'gmail'; // Edit
	var template_id = 'template_1B1ld9hk'; // Edit
	var template_params = {
	name: message_name,
	reply_email: 'kuhackathon2017@gmail.com',
	message: message_body
	};

	emailjs.send(service_id,template_id,template_params).then(function(response) {
	   console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
	}, function(err) {
	   console.log("FAILED. error=", err);
	});
}