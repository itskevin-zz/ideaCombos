function getUser() {
    // https://spreadsheets.google.com/feeds/cells/16hLjS8YR0bm95ukZ4MnhmtyJOUidvsfW_lovREkqUi4/od6/public/basic?alt=json
    $.getJSON("https://spreadsheets.google.com/feeds/cells/16hLjS8YR0bm95ukZ4MnhmtyJOUidvsfW_lovREkqUi4/od6/public/basic?alt=json", function(data){
        var jsonUsers = data.feed.entry;
        var randomUser = jsonUsers[Math.floor(Math.random()*jsonUsers.length)];
        alert("user: " + randomUser);
        console.log(jsonUsers);
    })
    
}