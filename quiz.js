function send() {
    number1 = document.getElementById("number").value = "";
    number2 = document.getElementById("number2").value = "";
    actual_answer= parseInt(number1)*parseInt(number2)
    question_number = "<h4>" + number + " X "+ number2 +"</h4>";
    input_box= "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-danger' onclick='check()'>Check</button>";
row= question_number + input_box + check_button ;

}

