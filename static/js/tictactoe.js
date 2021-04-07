
export var circle_tag = "<img src='../../static/img/svg/006-circle-shape-outline.svg' alt='circle' class='clicked-cell-img'>";
export var cross_tag = "<img src='../../static/img/svg/001-close.svg' alt='cross' class='clicked-cell-img'>";
var result_string = "Click on the New Game Button to start a new game";
// export let is_game_over = false;

var state = "123456789";
var score_x = 0;
var score_o = 0;


$("#game-result p").text(result_string);

function reset_scores(){
    score_x = 0;
    score_o = 0;
    
    $("#score-x").text(score_x);
    $("#score-o").text(score_o);
}
reset_scores();
$("#reset-score").click(reset_scores);


function add_input_to_the_board(state, index, symbol){
    // Add given index value to the current state
    
    var new_state = '';
    for(var i of state){
        if (i == index){
            new_state+=symbol;
        }
        else{
            new_state+=i;
        }
    }

    return new_state;
}


function display_board(state){
    // Display the given state on to the page
    $(".cell").empty();

    let count = 0;
    for (let i of state){

        count+=1;
        if ((i == "X") || (i == "O")){

            let cellval = "#cell"+count;

            if (i == "X"){
                $(cellval).append(cross_tag);
            }
            else if(i=="O"){
                $(cellval).append(circle_tag);
            }
        }
    }
}



function check_terminal_state(state, symbol){
    // Check whethter the given state is a terminal state
    
    let indices = [];
    let numbers = [];

    for (let i=0; i<9; i++){
        if (state[i] == symbol){
            indices.push(i+1);
        }
      else if(state[i]>=1 && state[i]<=9)
        {
          numbers.push(i+1);
        }
    }

    if(check_row(indices) || check_column(indices) || check_diagonal(indices)){// Game won or lost

        if (symbol == "O"){
            result_string = "You have won the game";
            score_o++;
        }
        else if(symbol == "X"){
            result_string = "Computer has won the game";
            score_x++;
        }

            console.log(result_string);
            $("#game-result p").text(result_string);            
            $("#score-x").text(score_x);
            $("#score-o").text(score_o);

            return true;
    }
    
    else if(numbers.length == 0){// Game draw
        result_string = "Game is a draw";
        console.log(result_string);
        $("#game-result p").text(result_string);
        return true;
    }
    return false;

}

function check_row(indices){

    if(indices.includes(1) && indices.includes(2) && indices.includes(3)){
        return true;
    }
  
    if(indices.includes(4) && indices.includes(5) && indices.includes(6)){
        return true;
    }

    if(indices.includes(7) && indices.includes(8) && indices.includes(9)){
        return true;
    }
    return false;    
}

function check_column(indices){

    if(indices.includes(1) && indices.includes(4) && indices.includes(7)){
        return true;
    }
  
    if(indices.includes(2) && indices.includes(5) && indices.includes(8)){
        return true;
    }

    if(indices.includes(3) && indices.includes(6) && indices.includes(9)){
        return true;
    }
    return false;    
}

function check_diagonal(indices){

    if(indices.includes(1) && indices.includes(5) && indices.includes(9)){
        return true;
    }
  
    if(indices.includes(3) && indices.includes(5) && indices.includes(7)){
        return true;
    }
    return false;    
}






function new_game_mod(filedata){


        
        var state = "123456789";
        var new_state = state;
        var symbol = "X";
        var index = -1;
        
        index = filedata[new_state];
        state = add_input_to_the_board(state, index, symbol);
        display_board(state);


        $(".cell").click(function (){


            if(!check_terminal_state(state, symbol)){

                symbol = (symbol == "X") ? "O":"X";
                index = $(this).attr("value");
                state = add_input_to_the_board(state, index, symbol);
                display_board(state);

            }

            if(!check_terminal_state(state, symbol)){

                symbol = (symbol == "X") ? "O":"X";
                new_state = state.replaceAll("X", "f").replaceAll("O", "s");
                index = filedata[new_state];
                state = add_input_to_the_board(state, index, symbol);
                display_board(state);
            }        

                if(check_terminal_state(state, symbol))
                {
                    $(".cell").off("click");
                    return;
                }
        });

}

function select_random_json_file(){


    var files = ["min_first_pos1_imp1.json", 
                "min_first_pos3_imp1.json",
                "min_first_pos5_imp1.json", 
                "min_first_pos7_imp1.json",
                "min_first_pos9_imp1.json"];

    var filesIndex = Math.floor((Math.random()*files.length));


    var filename = files[filesIndex];
    
    fetch("/getjsonfile/"+filename+"/")
    .then(function (response){
        return response.json();
    })
    .then(function(data){
        $("#game-result p").text('');
        new_game_mod(data);
    });
    
}

$("#new-game").click(function(){
    $("#game-result p").text('Please wait till this message disappears...');
    $(".cell").empty();
    $(".cell").off("click");
    select_random_json_file();
})