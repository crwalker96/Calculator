var functionString = "";
var previousAnswer = null;
function clearForm() {
    functionString = "";
    previousAnswer = null;
    $("#calculator-form").html("");
}
function compute(str) {
    var compStr = "return " + str;
    var compute = Function(compStr);
    var result = compute(str);
    previousAnswer = result;
    $("#calculator-form").html(result);
}
function handleClick(str) {
    switch(str) {
        case "AC":
            clearForm();
            break;
        case "CE":
            functionString = functionString.slice(0, functionString.length - 1);
            $("#calculator-form").html(functionString);
            break;
        case "Ans":
            if (previousAnswer === null) {
                functionString = "";
            } else {
                functionString = previousAnswer.toString();
            }
            previousAnswer = null;
            $("#calculator-form").html(functionString);
            break;
        case "=":
            compute(functionString);
            break;
        default:
            functionString += str;
            $("#calculator-form").html(functionString);
            break;
    }
}
$(document).ready(function(){
    $(".calculator-button").click(function(event) {
        handleClick($(event.target).text());
    });
});