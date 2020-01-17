$(document).ready(function(){
    getUser();
    getTechnology();
    getScenario();
});

function getUser() {
    var userURL = "https://spreadsheets.google.com/feeds/cells/16hLjS8YR0bm95ukZ4MnhmtyJOUidvsfW_lovREkqUi4/1/public/basic?alt=json";
    // https://spreadsheets.google.com/feeds/cells/16hLjS8YR0bm95ukZ4MnhmtyJOUidvsfW_lovREkqUi4/od6/public/basic?alt=json
    $.getJSON(userURL, function(data){

        var usersTypes = data.feed.entry;
        var users = []; // store users

        for (var i = 0; i < usersTypes.length; i++) {
            users.push(usersTypes[i].content.$t);
        }
        var randomUser = Math.floor(Math.random()*users.length);
        document.getElementById("random-user").innerHTML = users[randomUser];

    });
}

function getTechnology() {
    var techURL = "https://spreadsheets.google.com/feeds/cells/16hLjS8YR0bm95ukZ4MnhmtyJOUidvsfW_lovREkqUi4/2/public/basic?alt=json"
    $.getJSON(techURL, function(data){
        var techTypes = data.feed.entry;
        var techName = []; //every even row
        var techDesc = []; // every odd row

        for (var i = 0; i < techTypes.length; i++){
            if (i%2 === 0){
                techName.push(techTypes[i].content.$t);
            }
            else {
                techDesc.push(techTypes[i].content.$t);
            }
        }
        var randomTech = Math.floor(Math.random()*techName.length);
        document.getElementById("random-tech-name").innerHTML = techName[randomTech];
        document.getElementById("random-tech-desc").innerHTML = techDesc[randomTech];
    });
}

function getScenario(){
    var scenarioURL = "https://spreadsheets.google.com/feeds/cells/16hLjS8YR0bm95ukZ4MnhmtyJOUidvsfW_lovREkqUi4/3/public/basic?alt=json"
    $.getJSON(scenarioURL, function(data){
        var scenarioTypes = data.feed.entry;
        var scenario = [];

        for (var i = 0; i < scenarioTypes.length; i++){
            scenario.push(scenarioTypes[i].content.$t);
        }
        var randomScenario = Math.floor(Math.random()*scenarioTypes.length);
        document.getElementById("random-scenario").innerHTML = scenario[randomScenario];
    });
}

function getIdeas() {
    getUser();
    getTechnology();
    getScenario();
}
