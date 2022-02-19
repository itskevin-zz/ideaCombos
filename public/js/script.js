$(document).ready(function(){
    getUser();
    //getTechnology();
    getScenario();
});

function getUser() {
    var userURL = "https://sheets.googleapis.com/v4/spreadsheets/19TJnUIukeJFCX9r9sBTrq1vkHnN8UBJnNXQ0xRTc8wE/values/Users?majorDimension=COLUMNS&key=AIzaSyACja4DfjxBU-fbqFvE6hlGEUqgxsxOFvU";
    $.getJSON(userURL, function(data){

        var usersTypes = data.values[0]
        var users = []; // store users

        var randomUser = Math.floor(Math.random()*usersTypes.length);
        document.getElementById("random-user").innerHTML = usersTypes[randomUser];
    });
}

function getTechnology() {
    var techURL = "https://sheets.googleapis.com/v4/spreadsheets/19TJnUIukeJFCX9r9sBTrq1vkHnN8UBJnNXQ0xRTc8wE/values/Technology?majorDimension=COLUMNS&key=AIzaSyACja4DfjxBU-fbqFvE6hlGEUqgxsxOFvU"
    $.getJSON(techURL, function(data){

        var techName = data.values[0]; 
        //var techDesc = data.values[1];

        var randomTech = Math.floor(Math.random()*techName.length);
        document.getElementById("random-tech-name").innerHTML = techName[randomTech];
        //document.getElementById("random-tech-desc").innerHTML = techDesc[randomTech];
    });
}

function getScenario(){
    var scenarioURL = "https://sheets.googleapis.com/v4/spreadsheets/19TJnUIukeJFCX9r9sBTrq1vkHnN8UBJnNXQ0xRTc8wE/values/Scenarios?majorDimension=COLUMNS&key=AIzaSyACja4DfjxBU-fbqFvE6hlGEUqgxsxOFvU"
    $.getJSON(scenarioURL, function(data){
        var scenarioTypes = data.values[0];

        var randomScenario = Math.floor(Math.random()*scenarioTypes.length);
        document.getElementById("random-scenario").innerHTML = scenarioTypes[randomScenario];
    });
}
 
function getIdeas() {
    getUser();
    getTechnology();
    getScenario();
}
