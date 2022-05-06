const btn = document.getElementById("btn");
const first_stage = document.getElementById("container");
const thank_you_stage = document.getElementById("thank_container");

btn.addEventListener('click', () => {
    first_stage.style.display = "none";
    thank_you_stage.style.display = "block";

    var score = document.getElementById("result");
    let radio = document.getElementsByName("rating");
    for(var i = 0; i < radio.length; i++){
        if(radio[i].checked){
            score.innerHTML = radio[i].value;
        }
    }
});