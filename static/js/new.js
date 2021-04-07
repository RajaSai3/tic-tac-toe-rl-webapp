/*
---->  Algorithm for javascript

on click of new game button: start the game
disable new game button
choose a random filename
initialize state='123456789'
display state
check state
if move possible
{
    if user turn 
    {
        ask user to enter input value
    }

    else if computer move
    {
        translate current state to f and s
        pass translated state and filename to the server
        get the approriate value for the state
    }
    replace value in state 
    goto line 8
}
else
{
    declare result
    enable new game button
    goto line 4
}
*/






function new_game(){


    while(true){

        var files = ["min_first_pos1_imp1.json", 
                    "min_first_pos3_imp1.json",
                    "min_first_pos5_imp1.json", 
                    "min_first_pos7_imp1.json",
                    "min_first_pos9_imp1.json"];

        var index = Math.floor((Math.random()*files.length));


        var filename = files[index];
        var symbol = "";
        var state = "123456789";
        var index = -1;

        while(true){

            display_board(state);
            symbol = (symbol == "X") ? "O":"X"; 
            if (!check_terminal_state(state, symbol)){

                if(symbol == "O"){
                       index = return_user_clicked_index(state);
                       state = add_input
                }



                }
                // else if()

            }

        }
}

