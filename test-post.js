//set a reference to the request module
var request = require('request'),
	//create an object to send as POST data
    postObject = {
        name:'Don Draper',
        title:'Creative Director',
        company: 'Sterling Cooper'
    };

//make the POST request
request.post({url:'http://localhost:5000/form', form: postObject}, function (err, httpResponse, body) {
	console.log('JSON response from server: ' + body);
});




