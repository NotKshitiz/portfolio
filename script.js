function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function validate(){
    let num = parseInt(document.querySelector("number"));
    const phone_number =  new Array(num);
    phone_length = phone_number.length();
    if(phone_length != 9){
        alert("Number should be of 10 digits");
    }
}