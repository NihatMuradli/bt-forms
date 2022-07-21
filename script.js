$(document).ready(function () {

    $("#submit").submit(function (e) {
        let email = $("#email").val().length
        let pass = $("#pass").val().length
        e.preventDefault()
        console.log(email);
        if (email <= 6 && pass <= 6) {
            if (document.getElementById("email").classList.contains("is-valid") && document.getElementById("pass").classList.contains("is-valid")) {
                $("#email").removeClass("is-valid")
                $("#pass").removeClass("is-valid")
            }else{
                $("#email").addClass("is-invalid")
                $("#pass").addClass("is-invalid")
            }
        } else {
            if (document.getElementById("email").classList.contains("is-invalid") && document.getElementById("pass").classList.contains("is-invalid")) {
                $("#email").removeClass("is-invalid")
                $("#pass").removeClass("is-invalid")
            }else{
                $("#email").addClass("is-valid")
                $("#pass").addClass("is-valid")
            }
        }
    })
    // $("#email").change(function(){
    //     let email = $("#email").val().length
    //     let pass = $("#pass").val().length
    //     if (email >=6 && pass >=6 ) {
    //         // $("#email").removeClass("is-invalid")
    //         // $("#pass").removeClass("is-invalid")
    //         $("#email").addClass("is-valid")
    //         $("#pass").addClass("is-valid")
    //         console.log("x");
    //     }
    // })
})