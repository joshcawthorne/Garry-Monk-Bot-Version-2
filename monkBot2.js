// *-- Begin Monkbot Version 2.0 --* 

var chosenTeam = "";
var finalTeamTwitter = "";
var finalTeamStadium = "";
var finalLocation = "";
var choice = 0;
var finalTeamFullName = "";
var teamNickname = "";
var teamNicknameAvailable = false;
var multipleTeamNicknameAvailable = false;
var nicknameInappropriate = false;

var teams = ["Aston Villa", "Villa", 
"Barnsley", 
"Birmingham City", "Birmingham", 
"Bolton Wanderers", "Bolton", 
"Brentford", 
"Bristol City", "Bristol", 
"Burton Albion", "Burton", 
"Cardiff City", "Cardiff",
"Derby County", "Derby", 
"Fulham", 
"Hull City", "Hull", 
"Ipswich Town", "Ipswich", 
"Leeds United", "Leeds", 
"Millwall", 
"Norwich City", "Norwich", 
"Nottingham Forest", "Nottingham", 
"Preston North End",
"Queens Park Rangers", "QPR", 
"Reading", 
"Sheffield United", 
"Sheffield Wednesday", 
"Sunderland", 
"Wolverhampton", "Wolves"];

var teamTwitters = ["@AVFCOfficial",
"@bfc_official", 
"@bcfc", "@OfficialBWFC", 
"@brentfordfc", 
"@bcfctweets", 
"@burtonalbionfc", 
"@CardiffCityFC", 
"@dcfcofficial", 
"@fulhamfc", 
"@hullcity", 
"@Official_ITFC",
"@lufc", 
"@MillwallFC", 
"@NorwichCityFC", 
"@nffc", 
"@pnefc", 
"@qprfc", 
"@ReadingFC", 
"@SUFC_Tweets", 
"@swfc",
"@sunderlandAFC", 
"@wolves"];

var stadiums = ["Villa Park", 
"Oakwell", 
"St Andrew's", 
"The Macron Stadium", 
"Griffin Park", 
"Ashton Gate", 
"The Pirelli Stadium", 
"Cardiff City Stadium", 
"Pride Park Stadium", 
"Craven Cottage", 
"The KCOM Stadium", 
"Portman Road",
"Elland Road", 
"The Den", 
"Carrow Road", 
"City Ground", 
"Deepdale", 
"Loftus Road", 
"The Madejski Stadium", 
"Bramall Lane", 
"Hillsborough Stadium", 
"The Stadium of Light", 
"The Molineux"];

var locations = ["Birmingham",
"Barnsley", 
"Birmingham", 
"Bolton", 
"London", 
"Bristol", 
"Burton", 
"Cardiff", 
"Derby", 
"London", 
"Hull", 
"Ipswich", 
"Leeds", 
"London", 
"Norwich", 
"Nottingham", 
"Preston",
"London", 
"Reading", 
"Sheffield", 
"Sheffield", 
"Sunderland", 
"Wolverhampton"];

function teamSelection() {
    finalTeamFullName = "";
    teamNickname = "";
    teamNicknameAvailable = false;
    chosenTeam = teams[Math.floor(Math.random() * teams.length)];
    if(chosenTeam == teams[0] || chosenTeam == teams[1]){
        //Aston Villa
        finalTeamTwitter = teamTwitters[0];
        finalTeamStadium = stadiums[0];
        finalLocation = locations[0];
        finalTeamFullName = "Aston Villa";
        teamNickname = "Villa";
        teamNicknameAvailable = true;
    } else if(chosenTeam == teams[2]){
        //Barnsley
        finalTeamTwitter = teamTwitters[1];
        finalTeamStadium = stadiums[1];
        finalLocation = locations[1];
        finalTeamFullName = "Barnsley FC";
        teamNickname = "Barnsley";
        teamNicknameAvailable = true;
        nicknameInappropriate = true;
    } else if(chosenTeam == teams[3] || chosenTeam == teams[4]){
        //Birmingham City
        finalTeamTwitter = teamTwitters[2];
        finalTeamStadium = stadiums[2];
        finalLocation = locations[2];
        finalTeamFullName = "Birmingham City";
        teamNickname = "Birmingham";
        teamNicknameAvailable = true;
        nicknameInappropriate = true;
    } else if(chosenTeam == teams[5] || chosenTeam == teams[6]){
        //Bolton Wanders
        finalTeamTwitter = teamTwitters[3];
        finalTeamStadium = stadiums[3];
        finalLocation = locations[3];
        finalTeamFullName = "Bolton Wanderers";
        teamNickname = "Bolton";
        teamNicknameAvailable = true;
        nicknameInappropriate = true;
    } else if(chosenTeam == teams[7]){
        //Brentford
        finalTeamTwitter = teamTwitters[4];
        finalTeamStadium = stadiums[4];
        finalLocation = locations[4];
        finalTeamFullName = "Brentford FC";
        teamNicknameAvailable = true;
        teamNickname = "Brentford"
        nicknameInappropriate = true;
    } else if(chosenTeam == teams[8] || chosenTeam == [9]) {
        //Bristol City
        finalTeamTwitter = teamTwitters[5];
        finalTeamStadium = stadiums[5];
        finalLocation = locations[5];
        finalTeamFullName = "Bristol City";
        teamNickname = "Bristol";
        teamNicknameAvailable = true;
        nicknameInappropriate = true;
    } else if(chosenTeam == teams[10] || chosenTeam == teams[11]){
        //Burton
        finalTeamTwitter = teamTwitters[6];
        finalTeamStadium = stadiums[6];
        finalLocation = locations[6];
        finalTeamFullName = "Burton Albion";
        teamNickname = "Burton";
        teamNicknameAvailable = true;
        nicknameInappropriate = true;
    } else if(chosenTeam == teams[12] || chosenTeam == teams[13]){
        //Cardiff
        finalTeamTwitter = teamTwitters[7];
        finalTeamStadium = stadiums[7];
        finalLocation = locations[7];
        finalTeamFullName = "Cardiff City";
        teamNickname = "Cardiff";
        teamNicknameAvailable = true;
        nicknameInappropriate = true;
    } else if(chosenTeam == teams[14] || chosenTeam == teams[15]) {
        //Derby
        finalTeamTwitter = teamTwitters[8];
        finalTeamStadium = stadiums[8];
        finalLocation = locations[8];
        finalTeamFullName = "Derby County";
        teamNickname = "Derby";
        teamNicknameAvailable = true;
        nicknameInappropriate = true;
    } else if(chosenTeam == teams[16]) {
        //Fulham
        finalTeamTwitter = teamTwitters[9];
        finalTeamStadium = stadiums[9];
        finalLocation = locations[9];
        finalTeamFullName = "Fulham FC";
        teamNickname = "Fulham";
        teamNicknameAvailable = true;
        nicknameInappropriate = true;
    } else if(chosenTeam == teams[17] || chosenTeam == teams[18]){
        //Hull City
        finalTeamTwitter = teamTwitters[10];
        finalTeamStadium = stadiums[10];
        finalLocation = locations[10];
        finalTeamFullName = "Hull City";
        teamNickname = "Hull";
        teamNicknameAvailable = true;
        nicknameInappropriate = true;
    } else if(chosenTeam == teams[19] || chosenTeam == teams[20]) {
        //Ipswich Town
        finalTeamTwitter = teamTwitters[11];
        finalTeamStadium = stadiums[11];
        finalLocation = locations[11];
        finalTeamFullName = "Ipswich Town";
        teamNickname = "Ipswich";
        teamNicknameAvailable = true;
        nicknameInappropriate = true;
    } else if(chosenTeam == teams[21] || chosenTeam == teams[22]){
        //Leeds United
        finalTeamTwitter = teamTwitters[12];
        finalTeamStadium = stadiums[12];
        finalLocation = locations[12];
        finalTeamFullName = "Leeds United";
        teamNickname = "Leeds";
        teamNicknameAvailable = true;
        nicknameInappropriate = true;
    } else if(chosenTeam == teams[23]){
        //Millwall
        finalTeamTwitter = teamTwitters[13];
        finalTeamStadium = stadiums[13];
        finalLocation = locations[13];
        finalTeamFullName = "Millwall FC";
        teamNickname = "Millwall";
        teamNicknameAvailable = true;
        nicknameInappropriate = true;
    } else if(chosenTeam == teams[24] || chosenTeam == teams[25]) {
        //Norwich
        finalTeamTwitter = teamTwitters[14];
        finalTeamStadium = stadiums[14];
        finalLocation = locations[14];
        finalTeamFullName = "Norwich City";
        teamNickname = "Norwich";
        teamNicknameAvailable = true;
        nicknameInappropriate = true;
    } else if(chosenTeam == teams[26] || chosenTeam == teams[27]) {
        //Nottingham
        finalTeamTwitter = teamTwitters[15];
        finalTeamStadium = stadiums[15];
        finalLocation = locations[15];
        finalTeamFullName = "Nottingham Forest";
        teamNicknames = ["Nottingham", "Forest"];
        teamNicknameAvailable = true;
        multipleTeamNicknameAvailable = true;
        nicknameInappropriate = true;
    } else if(chosenTeam == teams[28]) {
        //Preston
        finalTeamTwitter = teamTwitters[16];
        finalTeamStadium = stadiums[16];
        finalLocation = locations[16];
        finalTeamFullName = "Preston North End";
        teamNickname = "Preston"
        teamNicknameAvailable = true;
        nicknameInappropriate = true;
    } else if(chosenTeam == teams[29] || chosenTeam == teams[30]) {
        //QPR
        finalTeamTwitter = teamTwitters[17];
        finalTeamStadium = stadiums[17];
        finalLocation = locations[17];
        finalTeamFullName = "Queens Park Rangers";
        teamNickname = "QPR";
        teamNicknameAvailable = true;
    } else if(chosenTeam == teams[31]) {
        //Reading
        finalTeamTwitter = teamTwitters[18]; 
        finalTeamStadium = stadiums[18];
        finalLocation = locations[18];
        finalTeamFullName = "Reading FC";
        teamNickname = "Reading";
        teamNicknameAvailable = true;
        nicknameInappropriate = true;        
    } else if(chosenTeam == teams[32]) {
        //Sheffield United
        finalTeamTwitter = teamTwitters[19];
        finalTeamStadium = stadiums[19];
        finalLocation = locations[19];
        finalTeamFullName = "Sheffield United";
    } else if(chosenTeam == teams[33]) {
        //Sheffield Wednesday
        finalTeamTwitter = teamTwitters[20];
        finalTeamStadium = stadiums[20];
        finalLocation = locations[20];
        finalTeamFullName = "Sheffield Wednesday";
    } else if(chosenTeam == teams[34]) {
        //Sunderland
        finalTeamTwitter = teamTwitters[21];
        finalTeamStadium = stadiums[21];
        finalLocation = locations[21];
        finalTeamFullName = "Sunderland FC";
        teamNickname = "Sunderland";
        teamNicknameAvailable = true;
        nicknameInappropriate = true;
    } else if(chosenTeam == teams[35] || chosenTeam == teams[36]){
        //Wolves
        finalTeamTwitter = teamTwitters[22];
        finalTeamStadium = stadiums[22];
        finalLocation = locations[22];
        finalTeamFullName = "Wolverhampton Wanderers";
        teamNickname = "Wolves";
        teamNicknameAvailable = true;
    }
    console.log("DEBUG: Simulation details | Team: " + chosenTeam + " | Stadium: " + finalTeamStadium + " | Team Twitter: " + finalTeamTwitter + " |");
    //console.log(finalTeamTwitter);
    //console.log(finalTeamStadium);
}

function randomTweet() {
    choice = Math.floor(Math.random() * 6) + 1;    
}

function tweetType1() {
    console.log("1");
    choice = 1;
    upcomingGame();
}

function tweetType2() {
    console.log("2");
    choice = 2;
    upcomingGame();
}

function tweetType3() {
    console.log("3");
    choice = 3;
    upcomingGame();
}

function tweetType4() {
    console.log("4");
    choice = 4;
    upcomingGame();
}

function tweetType5() {
    console.log("5");
    choice = 5;
    upcomingGame();
}

function tweetType6() {
    console.log("6");
    choice = 6;
    upcomingGame();
}


function upcomingGame() {
    var introSections = ["We're ready for our trip to ", "We're ready for our game against ", "We're prepared for the game against ", "We're preparing for our game against ",
    "We're focused on the game against ", "We're focusing on our trip to ", "We're getting ready for our game against ",];
    var followingSection = [" aren't an easy team to beat.", " aren't going to be an easy team to play against.", " are a good team, and won't be a guaranteed result."];
    var fillerSection = ["There isn't such a thing as an easy game in this league, ", "Every game in this league is a challenge, ", "You can't underestimate any team in this league, ",
    "Regardless of position in the table, no game is easy in this league, ", "Every game in this league is highly competitive, ", "Every game in this league is ultra competitive, "];
    var endingSection = ["we need the fans to make the stadium a cauldron of noise.", "we need the supporters to make as much noise as possible.", "and as ever, our great support will be key.",
    "and great support will be the key."];
    var introTravel = ["We're on our way to ", "We're travelling to ", "We've set off for ", "We've arrived at ", "We're in "];
    var travelGame = [", for our game against ", ", for the game against ", ", ready for the game against ", ", ready to face "];
    var interlinkedA = ["We already know that ", "We know that ", "It's evident that "];
    var interlinkedBTeam = ["are a good team. ", "are a tough team. ", "will give us a tough game. ", "will be a tough game. ", "will be a hard game for us. "];
    var interlinkedBLocation = ["is a tough place to visit. ", "will be a tough place to visit. ", "is a hard place to visit. "]
    
    var nickname = "";
    var teamName = "";

    console.log("Tweet type: " + choice);
    console.log(nicknameInappropriate);

    if(multipleTeamNicknameAvailable == true) {
        nickname = teamNickname[Math.floor(Math.random() * teamNickname.length)];        
    } else if(teamNicknameAvailable == true && multipleTeamNicknameAvailable == false){
        nickname = teamNickname;
    } else {
        if(choice == 3) {
            choice == 4;
        }
    }

    if(finalLocation == "London"){
        teamName = teamNickname
    } else{
        if(nicknameInappropriate = true){
            console.log("Registered");
            var numb = Math.floor(Math.random() * 2) + 1;
            console.log(numb)
            if(numb == 1){
                console.log("Registered 1");                
                teamName = finalTeamFullName;
            } else {
                console.log("Registered 2");                
                teamName = finalTeamFullName
            }
        } else {
            teamName = teamNickname;
        }
    }
    
    console.log(teamName);

    if(choice == 1){
        tweet = introSections[Math.floor(Math.random() * introSections.length)] + finalTeamTwitter +". "+ fillerSection[Math.floor(Math.random() * fillerSection.length)] + endingSection[Math.floor(Math.random() * endingSection.length)];
        console.log('Pre-game Tweet: "' + tweet + ' #UTB"');
    } else if(choice == 2){
        tweet = "." + finalTeamTwitter + followingSection[Math.floor(Math.random() * followingSection.length)] +" "+ fillerSection[Math.floor(Math.random() * fillerSection.length)] + endingSection[Math.floor(Math.random() * endingSection.length)];
        console.log('Pre-game Tweet: "' + tweet + ' #UTB"');
    } else if(choice == 3){
        tweet = introTravel[Math.floor(Math.random() * introTravel.length)] + finalLocation + "" + travelGame[Math.floor(Math.random() * travelGame.length)] + teamName + ". " + fillerSection[Math.floor(Math.random() * fillerSection.length)] + endingSection[Math.floor(Math.random() * endingSection.length)];
        console.log('Pre-game Tweet: "' + tweet + ' #UTB"');
    } else if(choice == 4){
        tweet = introTravel[Math.floor(Math.random() * introTravel.length)] + finalTeamStadium + "" + travelGame[Math.floor(Math.random() * travelGame.length)] + chosenTeam + ". " + fillerSection[Math.floor(Math.random() * fillerSection.length)] + endingSection[Math.floor(Math.random() * endingSection.length)];        
        console.log('Pre-game Tweet: "' + tweet + ' #UTB"');
    } else if(choice == 5){
        var numb = Math.floor(Math.random() * 2) + 1;
        if(numb == 1){
            tweet = interlinkedA[Math.floor(Math.random() * interlinkedA.length)] + chosenTeam + " " + interlinkedBTeam[Math.floor(Math.random() * interlinkedBTeam.length)]+ fillerSection[Math.floor(Math.random() * fillerSection.length)] + endingSection[Math.floor(Math.random() * endingSection.length)];  
            console.log('Pre-game Tweet: "' + tweet + ' #UTB"');    
        } else {
            tweet = interlinkedA[Math.floor(Math.random() * interlinkedA.length)] + finalTeamTwitter + " " + interlinkedBTeam[Math.floor(Math.random() * interlinkedBTeam.length)]+ fillerSection[Math.floor(Math.random() * fillerSection.length)] + endingSection[Math.floor(Math.random() * endingSection.length)];              
            console.log('Pre-game Tweet: "' + tweet + ' #UTB"');            
        }
    } else if(choice == 6){
        var numb = Math.floor(Math.random() * 2) + 1;
        if(numb == 1){
            tweet = interlinkedA[Math.floor(Math.random() * interlinkedA.length)] + finalLocation + " " + interlinkedBLocation[Math.floor(Math.random() * interlinkedBLocation.length)]+ fillerSection[Math.floor(Math.random() * fillerSection.length)] + endingSection[Math.floor(Math.random() * endingSection.length)];  
            console.log('Pre-game Tweet: "' + tweet + ' #UTB"');            
        } else {
            tweet = interlinkedA[Math.floor(Math.random() * interlinkedA.length)] + finalTeamTwitter + " " + interlinkedBLocation[Math.floor(Math.random() * interlinkedBLocation.length)]+ fillerSection[Math.floor(Math.random() * fillerSection.length)] + endingSection[Math.floor(Math.random() * endingSection.length)];              
            console.log('Pre-game Tweet: "' + tweet + ' #UTB"');            
        }
    }

    document.getElementById('pregame').innerHTML = 'Pre-game Tweet: "' + tweet + ' #UTB"';
    //if(tweet.lenth > 140) {
        //upcomingGame();
    //} else {
        //tweetIt();
    //}
    game();
};

function game() {
    var finalResult = "";
    var resultStart = Math.floor(Math.random() * 3) + 0;
    if(resultStart == 1){
        //LOSS
        var resultCont = Math.floor(Math.random() * 3) + 1;     
        if(resultCont == 1 || resultCont == 2){
            console.log("This score should be a loss.")
            var finalResultBoro = Math.floor(Math.random() * 3) + 0;
            var finalResultOpposition = Math.floor(Math.random() * 3) + 0;  
            console.log("Score (first run): Boro " + finalResultBoro + " - " + finalResultOpposition + " Opposition");
            while(finalResultBoro == finalResultOpposition || finalResultBoro > finalResultOpposition){
                finalResultOpposition ++;
                console.log("Score (in while): Boro " + finalResultBoro + " - " + finalResultOpposition + " Opposition");                                
            }          
            console.log("Score (Complete): Boro " + finalResultBoro + " - " + finalResultOpposition + " Opposition");
        } else if(resultCont == 3){
            console.log("This score should be a loss.")            
            var finalResultBoro = Math.floor(Math.random() * 6) + 0;
            var finalResultOpposition = Math.floor(Math.random() * 6) + 0;  
            console.log("Score (first run): Boro " + finalResultBoro + " - " + finalResultOpposition + " Opposition");
            while(finalResultBoro == finalResultOpposition || finalResultBoro > finalResultOpposition){
                finalResultOpposition ++;
                console.log("Score (in while): Boro " + finalResultBoro + " - " + finalResultOpposition + " Opposition");                                
            }          
            console.log("Score (Complete): Boro " + finalResultBoro + " - " + finalResultOpposition + " Opposition");
        }
    } else if (resultStart == 2){
        //WIN
        console.log("This score should be a win.")        
        var resultCont = Math.floor(Math.random() * 3) + 1;    
        if(resultCont == 1 || resultCont == 2){
            var finalResultBoro = Math.floor(Math.random() * 3) + 0;
            var finalResultOpposition = Math.floor(Math.random() * 3) + 0;  
            console.log("Score (first run): Boro " + finalResultBoro + " - " + finalResultOpposition + " Opposition");
            while(finalResultOpposition == finalResultBoro || finalResultOpposition > finalResultBoro){
                finalResultBoro ++;
                console.log("Score (in while): Boro " + finalResultBoro + " - " + finalResultOpposition + " Opposition");                
            }          
            console.log("Score (Complete): Boro " + finalResultBoro + " - " + finalResultOpposition + " Opposition");
        } else if(resultCont == 3){
            console.log("This score should be a win.")            
            var finalResultBoro = Math.floor(Math.random() * 6) + 0;
            var finalResultOpposition = Math.floor(Math.random() * 6) + 0;  
            console.log("Score (first run): Boro " + finalResultBoro + " - " + finalResultOpposition + " Opposition");
            while(finalResultOpposition == finalResultBoro || finalResultOpposition > finalResultBoro){
                finalResultBoro ++;
                console.log("Score (in while): Boro " + finalResultBoro + " - " + finalResultOpposition + " Opposition");                                
            }          
            console.log("Full Time Score: Boro " + finalResultBoro + " - " + finalResultOpposition + " Opposition");
        }
    } else {
        draw();
    }
}

function win() {
    var introSectionsGeneric = ["A great performance against a strong team today.","A brilliant performance against a good team today.","A superb showing against tough opposition",
    "Very good performance against a tough side today.","A brilliant performance against a good team tonight.","Very good performance against a tough side tonight."];
    var introSectionSpecific = ["An amazing perfomance today, to beat ", "A brilliant performance this evening to beat"]
    var interlinkedSpecificA = ["Absolutely delighted to be coming away from ", "Leaving ", "Very happy to play someone like "];
    var interlinkedSpecificB = [" today with 3 points.", " with another 3 points on the board. A brilliant performance.", " and still be able to get all three available points."]
    var fillerSection = [];
    var endingSection = ["Credit to the fans.", "Fans brilliant as always.", "Thanks to the brilliant away fans."];

    var type = Math.floor(Math.random() * 6) + 0;

    if(type == 1){

    } else if(type == 2){
        var linkedNum = interlinkedSpecificA[Math.floor(Math.random() * interlinkedSpecificA)];        
        tweet = interlinkedSpecificA[linkedNum] + finalLocation + " " + interlinkedSpecificB[linkedNum] + fillerSection[Math.floor(Math.random() * fillerSection.length)] + endingSection[Math.floor(Math.random() * endingSection.length)];  
    }
}

function draw() {

}

function loss() {

}