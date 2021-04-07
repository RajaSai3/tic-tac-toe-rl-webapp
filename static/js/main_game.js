// import * as ttt from './tictactoe.js';

// $("#new-game").hide();

// var is_game_over = false;


// game();

// let score_x = $("#score-x").text();
// let score_y = $("#score-o").text();


// function reset_scores(){
//     score_x = 0;
//     score_y = 0;
    
//     $("#score-x").text(score_x);
//     $("#score-o").text(score_y);
// }

// $("#reset-score").click(reset_scores);

// function game(){
//     if (!is_game_over){
//         console.log("Before play game Is game over", is_game_over);
//         is_game_over = true;
//         console.log("Modified Is game over", is_game_over);
//         $("div.cell").empty();
//         console.log("Starting game");
//         ttt.new_play_game();
//         console.log("Completed game");
//         console.log("After play game Is game over", is_game_over);
//         is_game_over = false;
//         console.log("Modified Is game over", is_game_over);
//     }
// }


// $.get("/getstate/min_first_pos1_imp1.json/fs34s6f89/", function(data){
//     alert(data);

// });


// let res = fetch("/getstate/min_first_pos1_imp1.json/fs34s6f89/")



// ------------------->

console.log("First Line");

// $.getJSON("/getstate/min_first_pos1_imp1.json/fs34s6f89/",
// async function (data){
//     var index = await data;
//     console.log("Second Line");
//     console.log("The index value is "+index);
// });

function select_random_json_file(){

    var files = ["min_first_pos1_imp1.json", 
                "min_first_pos3_imp1.json",
                "min_first_pos5_imp1.json", 
                "min_first_pos7_imp1.json",
                "min_first_pos9_imp1.json"];

    var filesIndex = Math.floor((Math.random()*files.length));


    var filename = files[filesIndex];
    console.log("Selected File is: "+filename);
    
    fetch("/getjsonfile/"+filename+"/")
    .then(function (response){
        console.log("Response line");
        console.log("The response is "+response);
        return response.json();
    })
    .then(function(data){
        console.log("Data line");
        console.log("Data is "+data['123sf6789']);
    });
    
}

select_random_json_file();

console.log("Third line");