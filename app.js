// alert("hello")
// console.log(document.getElementById("welcome"));

// function Sum(x, y){
//     return "totalSum" + (x + y)
// }

// let number1=4
// let number2 = 6

// let result = Sum(number1,number2 )
// console.log(result)
// let month = 4
// if (month <= 3) {
//     console.log("spring");
// }
// else if (month >3 && month <=6) {
//     console.log("summer");
// }
// else if (month >6 && month <=9) {
//     console.log("autumn");
// }
// else if (month <=12) {
//     console.log("winter");
// }
// let email ="soheila.afzali@gmail.com"
// let pass = "1234"
// if (email == "soheila.afzali@gmail.com") {
//     console.log("you can login");
    
// }
// if (email != "soheila.afzali@gmail.com") {
//     console.log("you can't login");
// }

// if (pass == "1234") {
//     console.log("you can login");
// }
// if (pass != "1234") {
//     console.log("you can't login");
// }
// //1 3 5 7 9...//
// for (let i=0; i <20; i++) {
//     console.log(i*2+1);
    
// }

// // 1 4 9 16 25 36....//
// for (let i=1; i <10; i++) {
//     console.log(i*i);
    
// }
// for (let i=1; i <=20; i++) {
//     console.log(i + 1);
// }
// let t=1
// while (t<=20) {
//     console.log(t + 1);
//     t++
// }
let numbers = [19, 12, 13, 14, 10, 20, 15.6, 17]

// <<<< replace 17 to 18>>>>

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i]!==17) {
        console.log(18); 
    }
    
}

// <<<< length>>>>

// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
    
// }


// <<<< average>>>>
// let sum = 0
// for (let i = 0; i < numbers.length; i++) {
//     console.log(sum+=numbers[i]);

let sum = 0; 
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
    console.log(sum);
}
    

    

    


