//Execute this function when index page render is complete.
$(document).ready(function(){
    console.log('Document is ready');
    //Binding button to click function
    $('#calcbtn').click(function(){
        //Creating variables to store the numbers given by user
        var number1 = $('#one').val();
        var number2 = $('#two').val();
        //Packing the 2 numbers into 1 variable
        var number = {
            number_1 : number1,
            number_2 : number2
        };
        //Sending the data to localhost:4000/addition
        $.get("http://localhost:4000/addition",number,function(data){
            console.log('Data has returned'+ data);
            //send result to result text field
            $('#result').val(data);
          });
    })
})
