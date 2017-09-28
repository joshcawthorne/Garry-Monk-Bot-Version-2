var homeTeam, awayTeam, gameWeek, gameDate, goalsHomeTeam, goalsAwayTeam, goalsHomeTeamHalfTime, goalsAwayTeamHalfTime, homeGame, result;

function boot() {

    alert('Performing attempt');

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
        console.log("Creating XMLHttpRequest...");
        console.log("JOSH MAKE SURE THIS IS SECURED VIA PROTOCALL BEFORE PUSHING TO LIVE SERVER!");
        console.log("xhr has opened get request for URL");
        console.log("Data is now under the possesion of the federation.")
        console.log("Requesting LATEST score...") 

        x = 0;
        var latest;
        
        while(data.fixtures[x].status !== "TIMED") {
            x++;
        }

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
        console.log("Successfully gathered latest result!");
        console.log("Working out if the 'boro were at home, or away...");

        if(homeTeam == "Middlesbrough FC") {
            homeGame = true;
            console.log("Turns out they were at home.")
        } else {
            homeGame = false;
            console.log("Turns out they were away.")            
        }

        console.log("Proceding to spunk the data everywhere...");
        console.log("Matchday: " + gameWeek);
        console.log("Date: " + gameDate);
        console.log(homeTeam + " vs " + awayTeam);
        console.log("Half Time Result: " + homeTeam + " " + goalsHomeTeamHalfTime + " - " + goalsAwayTeamHalfTime + " " + awayTeam);
        console.log("Full Time Result: " + homeTeam + " " + goalsHomeTeam + " - " + goalsAwayTeam + " " + awayTeam);   
        console.log("Cost me a fuckin fiver, that did.")
        
        console.log("Getting together my emotions...")

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

        if(result == 1) {
            console.log("We won. Therefore, I'm happy.")
        } else if(result == 2) {
            console.log("We drew. Meh.")
        } else if(result == 3) {
            console.log("We lost. Fuck it all.")
        }

        if(data.fixtures[x].status == "FINISHED") {
 
        }
      }
    });
}
