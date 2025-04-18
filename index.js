



function studentScore(score){ 
    
    if (score >= 180 ){
        console.log("Passed")
    } else {console.log("Failed")
      }
    
}

studentScore(100);

function voteAge(age){ 
    
    if (age >= 18 ){
        console.log("You're eligible to vote")
    } else{console.log("Not eligible")

    }
    
}
voteAge(17);

function gradeReport(name=" ", scores){ 
    
    if (scores >= 75 && scores <90 ){
        console.log(name, "Good")
    } else if(scores>=90) {console.log(name,"Excellent")

    }else if(scores>=50 && scores <75){console.log(name, "Average")

    }else if(scores<50){console.log(name, "Fail")}
    
}
gradeReport("insertname", 7)

function Adult(hasID, isAbove18){
    if(hasID && isAbove18){ 
        console.log("Access granted")

    }else{console.log("Access Denied")}
}
Adult(true, true)

for(i=0; i>0; i++){
    const studentScore =[28, 30, 90, 80, 65, 120, 111]
    if (studentScore<=50){
        console.log("Pass")
    }else {console.log("Fail")}
}


 let result =(math=50, English=50) => {
   if(math >= 50 && English >= 50){console.log("Yes")

   }else {console.log("No")} 
}
result(20, 50);


function checkLogIn(hasEmail, phoneNo){
    if(hasEmail || phoneNo){ 
        console.log("login successfull")

    }else{console.log("Kindly add a mail or phone number")}
}
checkLogIn(false, false)


function logIn(username, password){ 
    
    if (username==null || password==null ){
        console.log("invalid input")
    } else {console.log("valid")}
    
}
logIn()


function labour(hoursWorked){ 
    hoursWorked>=40?console.log("full-time"):console.log("part-time")
    
}

labour(20);

let number =(firstNumber, secondNumber) => {
    if(firstNumber){console.log("Yes")
 
    }else {console.log("No")} 
 }
 result(20, 50);