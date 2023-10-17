function validateInput(event){
    event.preventDefault();
    let firstName = document.getElementById("fname").value;
    console.log(firstName);
    let lastName = document.getElementById("lname").value;
    console.log(lastName);
    let zip = document.getElementById("zip").value;
    console.log(zip);

     let firstlast = firstName + " " + lastName;
    console.log(firstlast);

    console.log(firstlast.length);
    //changed to 10 characters because my name is only 12 characters should be 20 characters
    if(firstlast.length < 10){
        alert("Not enough characters., Your first and last name must have at least 10 characters");
        return;
    }
    console.log("First last valid");

    if(zip.length != 5 || (!Number.isInteger(zip) && parseInt(zip) < 9999)) {
        alert("Invalid Zip, Must be 5 numbers");
        console.log(typeof zip);
        return ;
    }
    console.log("valid zip")
}


window.addEventListener("DOMContentLoaded", (event) => {
    const form = document.getElementById("myForm")
    if(form){
        form.addEventListener('submit', validateInput);
    }

});    
