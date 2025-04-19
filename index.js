
    //PASS IF 180 AND ABOVE, ELSE FAIL
function studentScore(score){ 
    if (score >= 180 ){
        console.log("Passed")
    } else {console.log("Failed")
      }   
}
studentScore(100);

    //CHECKS VOTING AGE TO BE ABOVE 18
function voteAge(age){   
    if (age >= 18 ){
        console.log("You're eligible to vote")
    } else{console.log("Not eligible")
    }  
}
voteAge(17);

    //FUNCTION TAKES A NAME AND SCORE
function gradeReport(name=" ", scores){  
    if (scores >= 75 && scores <90 ){
        console.log(name, "Good")
    } else if(scores>=90) {console.log(name,"Excellent")

    }else if(scores>=50 && scores <75){console.log(name, "Average")

    }else if(scores<50){console.log(name, "Fail")}
    
}
gradeReport("insertname", 7)

    //FUNCTION RETURNS ACCESS GRANTED IF BOTH BOOLEANS ARE TRUE
function Adult(hasID, isAbove18){
    if(hasID && isAbove18){ 
        console.log("Access granted")

    }else{console.log("Access Denied")} //IF EITHER OR BOTH BOOL ARE FALSE
}
Adult(true, true)

    //A FOR LOOP (VARIETY) THAT LOOPS THROUGH ARRAY 
const studentGrade =[28, 30, 90, 80, 47, 102, 111, 15, 38] //EACH ELEMENT IS ITERATED
studentGrade.forEach(function (mark){ //A FUNCTION TO GRADE 50 ABOVE AS "PASS" IS APPLIED ON EACH ELEMENT
    if (mark>=50){
       console.log("Pass") 
    }else {console.log("Fail")}
    
}
)
//console.log(mark)

/*for(i=0; i>0; i++){
    
    if (studentScore<=50){
        console.log("Pass")
    }else {console.log("Fail")}
}*/

        //FUNCTIONS RETURNS YES ONLY IF ENGLISH AND MATHS ARE ABOVE 50
 let result =(math=50, English=50) => {
   if(math >= 50 && English >= 50){console.log("Yes")

   }else {console.log("No")} 
}
result(20, 50);

        //FUNCTIONS USES BOOLEAN IN CHECKING LOGIN DEAILS
function checkLogIn(hasEmail, phoneNo){
    if(hasEmail || phoneNo){ 
        console.log("login successfull")

    }else{console.log("Kindly add a mail or phone number")}
}
checkLogIn(false, false)

        //CHECKS FOR EMPTY FIELDS FOR USERNAME AND PASSWORD
function logIn(username, password){ 
    
    if (username==null || password==null ){
        console.log("invalid input")
    } else {console.log("valid")}
    
}
logIn()

        //ASCERTAINS LABOUR HOURS AND CLASSIFIES
function labour(hoursWorked){ 
    hoursWorked>=40?console.log("full-time"):console.log("part-time")
    
}
labour(20);

        //FUNCTION RETURNS THE BIGGER OF TWO NUMBERS
let number =(firstNumber, secondNumber) => {
    if(firstNumber>secondNumber){console.log(firstNumber)
 
    }else if(secondNumber>firstNumber){console.log(secondNumber) 

    } else{console.log("numbers are equal")} //RETURNS REPONSE IF BOTH NUMBERS ARE EQUAL
 }
 number(70, 50);
