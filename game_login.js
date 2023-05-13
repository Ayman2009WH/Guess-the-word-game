function add_User()
{
    player1=document.getElementById("Username1").value;
        player2=document.getElementById("Username2").value;
    localStorage.setItem("player1",player1);
    localStorage.setItem("player2",player2);
    window.location="game_page.html";
}