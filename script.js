var homeTeam, awayTeam, gameWeek, gameDate, goalsHomeTeam, goalsAwayTeam, goalsHomeTeamHalfTime, goalsAwayTeamHalfTime, homeGame, result;

function boot() {

    var old = console.log;
    var logger = document.getElementById('log');
    console.log = function (message) {
        if (typeof message == 'object') {
            logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(message) : message) + '<br />';
        } else {
            logger.innerHTML += message + '<br />';
        }
    }

    console.log("Garry Monk Bot Version 2.1.4");
    console.log("Last Major Bot Revision: 28.09.17");
    console.log("Booting...");
    console.log("   Gathering required files");
    console.log("   Requesting connection to Twitter API");
    console.log("   Confirming API credentials and performing handshake...");

    //The following code is for the Server verification, and shouldn't be run on the local demo edition
    
    /*
    var Twit = require('twit')
    
    var T = new Twit({
     consumer_key:         'replaceme',
     consumer_secret:      'replaceme',
     access_token:         'replaceme-replaceme',
     access_token_secret:  'replaceme',
     timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests. 
    })
    
    console.log("   Successfully applied Twitter Account credentials");
    console.log("   Gathering latest game data...");
    console.log("   Message: Josh, ensure you run 'npm install xmlhttprequest' on the server if an error is thrown beyond this message.")
    
    var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    var xhr = new XMLHttpRequest();
    
    //Get Data
    var getJSON = function(url, callback) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = 'json';
        xhr.onload = function() {
            var status = xhr.status;
            if (status === 200) {
            callback(null, JSON.parse(xhr.responseText));
            } else {
            callback(status, JSON.parse(xhr.responseText));
            }
        };
        xhr.send();
    };
    
    //Use Data
    getJSON('http://api.football-data.org/v1/teams/343/fixtures',
    function(err, data) {
        if (err !== null) {
        console.log("   An error has occured.")
        } else { 
    */

    console.log("   Skipping out Twitter verification for offline demo purposes")
    console.log("   Successfully applied Twitter Account credentials");
    console.log("   Gathering latest game data...");
    
    //Get Data
    var getJSON = function(url, callback) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = 'json';
        xhr.onload = function() {
          var status = xhr.status;
          if (status === 200) {
            callback(null, xhr.response);
          } else {
            callback(status, xhr.response);
          }
        };
        xhr.send();
    };

    //Use Data
    getJSON('https://api.football-data.org/v1/teams/343/fixtures',
    function(err, data) {
      if (err !== null) {
        alert('Error: ' + err);
    } else {
        var latest;
    
        for(x = 0; data.fixtures[x].status !== "TIMED"; x++) {
            latest = data.fixtures[x].matchday - 1;
        }
    
        homeTeam = data.fixtures[latest].homeTeamName;
        awayTeam = data.fixtures[latest].awayTeamName;
        gameDate = data.fixtures[latest].date;
        gameWeek = data.fixtures[latest].matchday;
        goalsHomeTeam = data.fixtures[latest].result.goalsHomeTeam;
        goalsAwayTeam = data.fixtures[latest].result.goalsAwayTeam;
        goalsHomeTeamHalfTime = data.fixtures[latest].result.halfTime.goalsHomeTeam;
        goalsAwayTeamHalfTime = data.fixtures[latest].result.halfTime.goalsAwayTeam;
    
    
        if(homeTeam == "Middlesbrough FC") {
            homeGame = true;
        } else {
            homeGame = false;         
        }
    
        console.log("   Successfully gathered game data!");
        console.log("...Booted - Configuration Complete for this Server config.")
        console.log("MonkBot created by Josh Cawthorne, (c) 2017.")
        console.log("All data sourced from open-source API's.")
    
        console.log("---------------------------------------")
    
        console.log("Generating Tweet data based on latest results...")
    
    
        // Tweet Parts ------------------------------------------------------------------------------------------
    
        var startLoss = ["Tough for the players to leave with nothing today. ", "Tough for us to leave with nothing tonight. ", "Tough to be leaving with nothing today. ",
        "Felt the players deserved something today, disappointed in the outcome. ", "Felt we deserved something tonight. ", "Disappointed to leave with nothing today. ", "Disappointed we left with nothing today. ",
        "I don't feel that we deserved to lose today. ", "There's no time for regrets, we have to pick ourselves up straight away and focus on the next game. ", "An unfortunate result after performing well against a tough side. ", 
        "Disappointed with the outcome of that game, we're committed to getting a result for our fans. "];
    
        var endLoss = ["Support from the fans brilliant as always.", "The support from the fans was great once again.", "Credit to the players and our incredible fans.", "On to the next game.", "We're focusing on the next game now.",
        "We're ready to give our all.", "We're ready to give our maximum.", "We're ready to give it all next game.", "Thanks for the great support.", "Our focus turns to the next game.", "We're preparing for the tough challenge ahead.",
        "We're ready for the tough challenge ahead.", "If we maintain our desire & focus, I'm sure we'll be ready for the challenges to come.", "We're already focused on bouncing back next game",
        "We're focused on bouncing back like we have before", "We must now regroup and quickly turn our focus to the next game.", "Disappointed with the result, buit the performance deserved more. "];
    
        var startDraw = ["A hard fought, well earning point against a tough opposition. ", "A well won point in what we expected to be a tough game. ", "A tough game, but we've come away with another well won point. ",
            "Another important point, well earned against tough opposition. ", "Credit to the team for overcoming another test and winning an valuable point. ", "Dissapointing first half but we reacted well to claim an important point. ",
            "Proud of the players, and how well they executed the plan together. We were unlucky not to win. ", "Another great point and another great performance tonight. ","The team showed real character & spirit today to earn a crucial point. ",
            "Not the complete performance we wanted, but we're pleased with the point. ", "Our determination drove us on to grab a point today. ", "We now need to use the coming days to keep on improving. ",
            "A valuable point today, but I feel the performance deserved more. ", "A well-earned point that shows our character. ", "A hard-fought point that proves our chartacter. ", "Today's second half is the way forward. ",
            ""];
    
        var endDraw = ["There's still a long wayto go. Thanks for the support!", "Thanks to the support for making such a great atomsphere tonight.", "We have to remain focused and do our best in every game. ",
        "Thanks to the fans for making such a brilliant noise today.", "Credit to the supporters as ever.", "Together, we're taking small steps in the right direction.", "We're continuing to progress as a team.",
            "We must build on this positive foundation.", "A positive foundation for us to build on. "];
    
        var startTraining = ["A big test in our next game. We need to keep on improving if we're to continue to achieve good results. ", "A productive day's work at Rockliffe Park today. ", "Keeping up the intensity in training today. ",
                "Preparing for a difficult game, big challenge but we plan on giving it our best. ", "Ready for our next game at the Riverside. ", "Training with the focus on our tought next game. ",
                "We're competing in every game and want to continue improving for our next game. ", "The players are working hard to improve. ", "Hoping to produce a positive display in our next game. ", 
                "We have to make the Riverside a fortress. ", "Focused on tomorrows game. ", "We're motiviated by the challenge ahead. ", "A good session at the Riverside today. "];
    
        var endTraining = ["We must maintain our focus and desire.", "We must continue to show desire, and focus in our next games.", "Looking forward to putting the plan into action.", "We will continue to progress and develop.",
            "Everyone will continue to work hard.", "We're ready to give our all.",  "We're taking steps in the right direction.", "We must continue to work hard and stick together as a team.",
            "We have to show our desire.", "We have to show our focus.", "A tough season ahead, but we're ready to give it our all."];
    
        var startWin = ["We executed the game plan perfectly and it shows. ", "Important to show a reaction tonight. ", "Producing a reaction was key today and we did just that. ", "A performance of real heart today, giving us another important 3 points. ",
            "Great win in-front of a brilliant crowd. ", "Key win for us and an important 3 points today. ", "Great win and a fantastic effort from the players. ", "Great win and a fantastic effort from the players. ",
            "Another good win today. Now time to focus on our next game. ", "We now need to use the coming days to keep on improving. ", "A good win proving that the Riverside is a fortress. ", "Todays win gives us a boost for the rest of the season. "];
    
        var endWin = ["Thanks to the fans for creating such a great atmosphere.", "Thanks to the fans for creating such a brilliant atmosphere.", "Thanks to the fans for creating such a terrific atmosphere!", 
            "Credit to the fans.", "Credit to the brilliant fans!", "Credit to the fans for creating such a great atmosphere.", "Credit to the fans for creating such a brilliant atmosphere.", 
            "Credit to the fans for creating such a terrific atmosphere.", "The support was just incredible as per usual.", "Our determination drove us on to take 3 points today. ", "Glad to get a deserved win today. ",
            "A good reaction to build our confidence as we continue improving. Thanks to the fans.", "Thanks to the fans.", "Credit to the fans."];
    
        // Tweet Generation ------------------------------------------------------------------------------------------
    
        var Tweet = null;
            
        if(homeGame && goalsHomeTeam > goalsAwayTeam) {
            result = 1;
        } else if (homeGame && goalsHomeTeam == goalsAwayTeam) {
            result = 2;
        } else if (homeGame && goalsHomeTeam < goalsAwayTeam) {
            result = 3;
        } else if (!homeGame && goalsHomeTeam > goalsAwayTeam) {
            result = 3;
        } else if (!homeGame && goalsHomeTeam == goalsAwayTeam) {
            result = 2;
        } else {
            result = 3;
        }

        console.log(" ");
        console.log("The last game Middlesbrough played was on: " + gameDate);
        console.log("The game was during Gameweek: " + gameWeek);
        console.log("The game was: " + homeTeam + " vs " + awayTeam);
        console.log("The game finished: " + homeTeam + " " + goalsHomeTeam + " : " + goalsAwayTeam + " " + awayTeam);
        
        if(result == 1) {
            var startChoice = startWin[Math.floor(Math.random() * startWin.length)];
            var endChoice = endWin[Math.floor(Math.random() * endWin.length)];
            tweet = startChoice + endChoice
        } else if(result == 2) {
            var startChoice = startDraw[Math.floor(Math.random() * startDraw.length)];
            var endChoice = endDraw[Math.floor(Math.random() * endDraw.length)];
            tweet = startChoice + endChoice
        } else if(result == 3) {
            var startChoice = startLoss[Math.floor(Math.random() * startLoss.length)];
            var endChoice = endLoss[Math.floor(Math.random() * endLoss.length)];
            tweet = startChoice + endChoice + " #UTB"        
        }
        console.log(" ");
        console.log("***NOTE: Tweet Engine is still V1.0 for the moment. Engine 2.0 is yet to be merged.***");
        console.log(" ");
        console.log('"' + tweet + '"');
        console.log(" ");
        console.log("Tweet Generated by Engine V1.12 (Updated August 2017)");
        console.log(" ");
        console.log("Sending Tweet...");
        console.log("NOTE: Development Mode active; no Tweets will be sent out.");
        console.log("Tweet sent!");
        console.log("---------------------------------------");
        console.log("Shutting down...");
        console.log("Completed all remaining tasks.");
        }
    });
    
    
}