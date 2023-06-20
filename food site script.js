$(document).ready(function () {
    // Add smooth scrolling to all links
    $("a").on("click", function (event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $("html, body").animate(
                {
                    scrollTop: $(hash).offset().top,
                },
                800,
                function () {
                    // Add hash (#) to URL when done scrolling (default click behavior)
                    window.location.hash = hash;
                }
            );
        } // End if
    });
});
//script for icons go to page

function icons2(){
    var a=confirm("do you want to visit facebook page");

    if(a==true){
        window.open("https://www.facebook.com/kapil.pawar.792197");
        return true;
    }
    else{
        alert("user dont want to visit page")
    }
}
function icons1(){
    var a=confirm("do you want to visit instagram page");

    if(a==true){
        window.open("https://www.instagram.com/kapil.pawar007/");
        return true;
    }
    else{
        alert("user dont want to visit page")
    }
}
function icons3(){
    var a=confirm("do you want to visit twitter page");

    if(a==true){
        window.open("https://twitter.com/");
        return true;
    }
    else{
        alert("user dont want to visit page")
    }
}
function icons4(){
    var a=confirm("do you want to vist youtube page");

    if(a==true){
        window.open("https://www.youtube.com/");
        return true;
    }
    else{
        alert("user dont want to visit page")
    }
}

