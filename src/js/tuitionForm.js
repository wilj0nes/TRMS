window.onload = function () {
    console.log("loaded");

    var submit = document.getElementById("submit");
    var location = document.getElementById("location");

    submit.addEventListener("click", function(){
        console.log(location.value);
    });

};
