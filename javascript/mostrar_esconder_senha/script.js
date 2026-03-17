let input = document.querySelector("#senha");
let btn = document.querySelector("#btn");
btn.addEventListener("click", function() {
    if (input.type === "password") {
        input.type = "text";
        btn.classList.replace("bi-eye","bi-eye-slash");
    }
    else {
        input.type = "password";
        btn.classList.replace("bi-eye-slash", "bi-eye");
    }


});