window.onload = function (){
    document.getElementById("start").onclick = start;
    document.getElementById("stop").onclick = stop;
    document.getElementById("stop").disabled = true;
    document.getElementById("text-area").disabled = true;
};
var excounter , jugcounter, bikecounter, divecounter;
function stop() {
    document.getElementById("stop").disabled =  true;
    document.getElementById("start").disabled  = false;
}
function start()
{
    excounter = 0; jugcounter = 0; bikecounter = 0; divecounter = 0;
    document.getElementById("stop").disabled =  false;
    document.getElementById("start").disabled  = true;
    // document.getElementById("text-area").style.width = "1000px";
    excersise();
}
function excersise() {
    var animation;
    if (document.getElementById("start").disabled === true  && document.getElementById("stop").disabled ===false)
    {
        document.getElementById("text-area").style.fontSize = document.getElementById("fontsize").value.toString();
        if (document.getElementById("animation").value === "Exercise") {
            animation = EXERCISE.split("=====\n");
            document.getElementById("text-area").value = animation[excounter];
            if (excounter + 1 >= animation.length)
                excounter = 0;
            else
                excounter += 1;
        }
        else if (document.getElementById("animation").value === "Juggler") {
            animation = JUGGLER.split("=====\n");
            document.getElementById("text-area").value = animation[jugcounter];
            if (jugcounter + 1 >= animation.length)
                jugcounter = 0;
            else
                jugcounter += 1;
        }
        else if (document.getElementById("animation").value === "Bike") {
            animation = BIKE.split("=====\n");
            document.getElementById("text-area").value = animation[bikecounter];
            if (bikecounter + 1 >= animation.length)
                bikecounter = 0;
            else
                bikecounter += 1;
        }
        else if (document.getElementById("animation").value === "Dive") {
            animation = DIVE.split("=====\n");
            document.getElementById("text-area").value = animation[divecounter];
            if (divecounter + 1 >= animation.length)
                divecounter = 0;
            else
                divecounter += 1;
        }

        if (document.getElementById("turbo").checked === true)
            setTimeout(excersise, 50);
        else
            setTimeout(excersise, 250);
    }
}
