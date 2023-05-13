var player1_name= localStorage.getItem("player1");
var player2_name= localStorage.getItem("player2");
var player1_score= 0
var player2_score= 0
document.getElementById("player1_name").innerHTML=player1_name+": "
document.getElementById("player2_name").innerHTML=player2_name+": "
document.getElementById("player1_score").innerHTML=player1_score
document.getElementById("player2_score").innerHTML=player2_score
document.getElementById("player_question").innerHTML="question turn "+ player1_name
document.getElementById("player_answer").innerHTML="answer turn "+ player2_name

function send() {
	get_word = document.getElementById("word").value;
	word = get_word.toLowerCase();
	console.log("word in lowerCase = " + word);

    charAt1 = word.charAt(1);
	console.log(charAt1);

	lenght_divide_2 = Math.floor(word.length/2);
	charAt2 = word.charAt(lenght_divide_2);
	console.log(charAt2);

    lenght_minus_1 = word.length - 1; 
    charAt3 = word.charAt(lenght_minus_1); 
	console.log(charAt3);

    remove_charAt1 = word.replace(charAt1, "_");
    remove_charAt2 = remove_charAt1.replace(charAt2, "_");
    remove_charAt3 = remove_charAt2.replace(charAt3, "_");
	console.log(remove_charAt3);

    question_word = "<h4 id='word_display'> Q. "+remove_charAt3+"</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row =  question_word + input_box + check_button ; 
    document.getElementById("output").innerHTML = row;
document.getElementById("word").value = "";
}

player_question="player1"
player_answer="player2"

function check()
{
    get_answer =document.getElementById("input_check_box").value
    answer =get_answer.toLowerCase()
    if (answer==word)
    {
    if (player_answer=="player1")
    {
        player1_score++
        document.getElementById("player1_score").innerHTML=player1_score
    }
    else
    {
        player2_score++
        document.getElementById("player2_score").innerHTML=player2_score
    }
 }

 if(player_answer=="player1")
 {
    player_answer="player2"
    document.getElementById("player_answer").innerHTML=player2_name
 }
 else
 {
    player_answer="player1"
    document.getElementById("player_answer").innerHTML=player1_name
 }


 if(player_question=="player1")
 {
    player_question="player2"
    document.getElementById("player_question").innerHTML=player2_name
 }
 else
 {
    player_question="player1"
    document.getElementById("player_question").innerHTML=player1_name
 }
 document.getElementById("output").innerHTML=""
}