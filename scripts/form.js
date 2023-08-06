//getting the data
const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const reserveDate = document.querySelector("#reservedate");
const theTime = document.querySelector("#thetime");
const success = document.querySelector("#success");
const errorNodes = document.querySelectorAll(".error");
const minus = document.querySelector(".minus");
const peopleNum = document.querySelector(".people-num");
const peeps = document.querySelector(".peeps");
const plus = document.querySelector(".plus");

//validate data
function validateForm(){

    clearMessages();
    let errorFlag = false;

    if(nameInput.value.length < 1){
        errorNodes[0].innerText = "Name cannot be blank!";
        nameInput.classList.add("error-border");
        errorFlag = true;
    };

    if(!validateEmail(email.value)){
        errorNodes[1].innerText = "Thats an invalid email!";
        email.classList.add("error-border");
        errorFlag = true;
    };

    // ------fix------
    if(!validDate()){
        errorNodes[2].innerText = "Please Enter A Valid Date";
        reserveDate.classList.add("error-border");
        errorFlag = true;
    }
    if(theTime.value.length < 1){
        errorNodes[3].innerText = "Please Enter A Valid Time";
        reserveDate.classList.add("error-border");
        errorFlag = true;
    }
    //------fix end---------

    if(peopleNum.value == 0){
        errorNodes[4].innerText = "select number of people coming"
        peeps.classList.add("error-border")
        errorFlag = true;
    }
    

    if(!errorFlag){
        success.innerText = "Thankyou for making a reservation!";
    };

};

//function to clear error/success messages

function clearMessages(){
    for(let i = 0; i < errorNodes.length; i++){
        errorNodes[i].innerText = "";
    }
    success.innerText = "";
    nameInput.classList.remove("error-border");
    email.classList.remove("error-border");
    reserveDate.classList.remove("error-border");
    theTime.classList.remove("error-border");
}

//function to validate email
// function emailIsValid(email){
//     let pattern = /\s+@\s+\.\s+/;
//     return pattern.test(email);
// }

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

//function to validate date
const validDate = ()=>{
    var q = new Date();
    var date = new Date(q.getFullYear(),q.getMonth(),q.getDate());
    var userDate = new Date(reserveDate.value);

    if(userDate > date && userDate.getFullYear() < q.getFullYear() +1 ){
        return true
    }
}

//code for the number of people
let count = 0;

plus.addEventListener("click", ()=>{
    if(count < 5){
        count++;
    }
    if(count == 1){
        peeps.innerText = "person";
    }
    else{
        peeps.innerText = "people";
    }
    peopleNum.innerText = count;
})
minus.addEventListener("click", ()=>{
    if(count > 0){
        count--;
    }
    if(count == 1){
        peeps.innerText = "person";
    }
    else{
        peeps.innerText = "people";
    }
    peopleNum.innerText = count;
})





