var LPAWS = {};

		// Initialize the Amazon Cognito credentials provider
		AWS.config.region = 'eu-west-1'; // Region
		AWS.config.credentials = new AWS.CognitoIdentityCredentials({
			IdentityPoolId: 'eu-west-1:e8639739-d371-4a7c-bc4f-dd5af9538336',
		});

        LPAWS.sendToTopic = function() {
            var sns = new AWS.SNS();
			var	name = document.querySelector('#name').value;
			var	email = document.querySelector('#email').value;
            var msg = document.querySelector('#message').value;
            var params = {
                //Message: 'Hello topic', /* required */
                Message: email + "\n\n " + msg,
                Subject: 'Message on your website from ' + name,
                TopicArn: 'arn:aws:sns:eu-west-1:261305297524:com-website-contact-form'
            };
            sns.publish(params, function(err, data) {
                if (err) {
					console.log(err, err.stack);
					window.alert("Error, the message was not sent.");
				} // an error occurred
                else   {  
					console.log(data);
					window.alert("The message was succesfully sent.");
					document.querySelector('#name').value = "";
					document.querySelector('#email').value = "";
					document.querySelector('#message').value = "";				
				};           // successful response
            });
        };