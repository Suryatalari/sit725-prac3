//Initializing and calling express application
var express = require('express');
var moment = require('moment');
var web_service = express();

//Testing moment
var log_data=function(message){
    var time=moment().format();
    //Displaying time at which the website was visited
    console.log('The server was visited at '+time+'. '+message);
}


//Addition of 2 numbers
let add_two_numbers = function(number1,number2){
    result = number1 + number2;
    return result;
}

// respond with summation of 2 numbers, when a GET request is made to the addition page.
web_service.get('/addition', function(request, response){
    log_data("Addition request");
    //Accepting values from the user, for addition operation.
    let number_1 = parseFloat(request.query.number_1);
    let number_2 = parseFloat(request.query.number_2);
    //Checking if the entered values are numbers.
    if(isNaN(number_1) || isNaN(number_2)){
        response.send("Please enter numbers.");
    }
    //Printing the first and the second number in terminal.
    console.log("The first number is:", number_1);
    console.log("The second number is:", number_2);
    //Calculating the total sum and displaying it.
    let Total = add_two_numbers(number_1, number_2);
    console.log("sending the sum of 2 numbers",Total,"to the client.");
    //Display result in the text field
    response.send(''+Total+'');
})


// listen to a particular port
var port = 4000;
web_service.listen(port);
log_data('Server is listening on: ' + port);