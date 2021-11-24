

function openImg(n){

    document.getElementById("k1").style.display = "none";
    document.getElementById("k2").style.display = "none";
    document.getElementById("k3").style.display = "none";
    document.getElementById("k4").style.display = "none";
    document.getElementById("k5").style.display = "none";
    document.getElementById("k6").style.display = "none";
    document.getElementById("k7").style.display = "none";

    document.getElementById(n).style.display = "block";




}

function closeImg(n){

    
    document.getElementById("k1").style.display = "grid";
    document.getElementById("k2").style.display = "grid";
    document.getElementById("k3").style.display = "grid";
    document.getElementById("k4").style.display = "grid";
    document.getElementById("k5").style.display = "grid";
    document.getElementById("k6").style.display = "grid";
    document.getElementById("k7").style.display = "grid";

}