var colour = prompt("What Is The Colour Of Road Traffic Signal Now?");
if(colour === "red" || colour === "RED"){
    alert("Must Stop");
}
else if (colour === "yellow"|| colour === "YELLOW") {
    alert("Ready To Move");
}
else if (colour === "green"|| colour === "GREEN") {
    alert("Move Now");
}
else{
    alert("This colour is not included in road traffic signals")
}