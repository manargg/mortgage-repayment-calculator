document.getElementById("clear-btn").addEventListener("click", function() {
    // Reset the form
    var form = document.getElementById("calc-form");
    form.reset();
    
    // Reset border and background styles
    document.getElementById("m-amount-num").style.border = "";
    document.getElementById("years").style.border = "";
    document.getElementById("rate").style.border = "";
    
    // Reset the background color for all input fields
    document.querySelectorAll(".red").forEach(function(input) {
        input.style.backgroundColor = "";
        input.style.borderColor = "";
    });
    
    // Hide all error messages
    var error = document.querySelectorAll(".error-alert");
    error.forEach(function(el) {
        el.classList.add("hidden");
    });
    
    // Reset radio button error message
    error[3].classList.add("hidden");

    document.getElementById("content2").classList.add("hidden");
   document.getElementById("content").classList.remove("hidden");
});

/*======================================================== */

document.getElementById("calc-Repayment").addEventListener("click", function(){
    const num1 = parseInt(document.getElementById("m-amount-num").value);
    const num2 = parseInt(document.getElementById("years").value);
    const num3 = parseFloat(document.getElementById("rate").value);
    var error = document.querySelectorAll(".error-alert");
    
    let valid = true;
     // Check if num1 is NaN or <= 0
     if (isNaN(num1) || num1 <= 0) {
        error[0].classList.remove("hidden");
        document.getElementById("m-amount-num").style.border ="1px solid red";
        document.querySelectorAll(".red")[0].style.backgroundColor ="red";
        document.querySelectorAll(".red")[0].style.borderColor = "red";
        
        valid= false;
    } else {
        error[0].classList.add("hidden");
        document.getElementById("m-amount-num").style.border ="";
        document.getElementById("m-amount-num").style.border = "";
        document.getElementById("m-amount-num").style.backgroundColor = "";
    }

    // Check if num2 is NaN or <= 0
    if (isNaN(num2) || num2 <= 0) {
        error[1].classList.remove("hidden");
        document.getElementById("years").style.border ="1px solid red";
        document.querySelectorAll(".red")[1].style.backgroundColor ="red";
        document.querySelectorAll(".red")[1].style.borderColor = "red";
        valid= false;
    } else {
        error[1].classList.add("hidden");
        document.getElementById("years").style.border ="";
        document.getElementById("years").style.border = "";
        document.getElementById("years").style.backgroundColor = "";
    }

    // Check if num3 is NaN or <= 0
    if (isNaN(num3) || num3 <= 0) {
        error[2].classList.remove("hidden");
        document.getElementById("rate").style.border ="1px solid red";
        document.querySelectorAll(".red")[2].style.backgroundColor ="red";
        document.querySelectorAll(".red")[2].style.borderColor = "red";
        valid= false;
    } else {
        error[2].classList.add("hidden");
        document.getElementById("rate").style.border ="";
        document.querySelectorAll(".red")[2].style.backgroundColor ="";
        document.querySelectorAll(".red")[2].style.borderColor = "";
    }


   // Check if a radio button is selected
   const radioButtons = document.getElementsByName("option");
   let radioChecked = false;

   for (let i = 0; i < radioButtons.length; i++) {
       if (radioButtons[i].checked) {
           radioChecked = true;
           break;
       }
   }

   // Show the error if no radio button is selected
   if (!radioChecked) {
       error[3].classList.remove("hidden");
   } else {
       error[3].classList.add("hidden");
   }

   
   if (valid) {
    var sum = num1 + num2;
    document.getElementById("content").classList.add("hidden");
    document.getElementById("content2").classList.remove("hidden");
    document.getElementById("monthly-rep").innerHTML = sum;
    document.getElementById("term-rep").innerHTML = sum;

   }
});
    
