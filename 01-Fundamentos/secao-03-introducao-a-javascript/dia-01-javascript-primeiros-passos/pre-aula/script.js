let myName = "Gabriel";
let birtyCity = "Osasco";
let birtyYear = 1999;

console.log(myName, birtyCity, birtyYear);


let a = 0;
console.log(a++); // 0, pois o console.log ocorre antes do incremento.
// menos nítido

let b = 0;
console.log(b += 1); // 1, pois a atribuição ocorre antes

let c = 0;
c += 1;
console.log(c); // leitura mais nítida */

let patientId = 50;
let isEnrolled = true;
let patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
let patientEmail = 'ana@email.com'; */

let base = 5;
let height = 8;
let area = (base * height);

console.log(area);

let perimeter = 5 + 5 + 8 + 8;

console.log(perimeter);

let nota = 59;

if(nota >= 80){
  console.log("Parabéns, você faz parte do grupo de pessoas aprovadas!");
}
else if(nota < 79 && nota >= 60){
  console.log("Você está na nossa lista de espera.");
}
else{
  console.log("Infelizmente, você reprovou.");
} 

let currentHour = 15;
let message = "";

if (currentHour >= 22) {

  message = "Não deveríamos comer nada, é hora de dormir";

} else if (currentHour >= 18 && currentHour < 22) {

  message = "Rango da noite, vamos jantar :D";

} else if (currentHour >= 14 && currentHour < 18) {

  message = "Vamos fazer um bolo pro café da tarde?";

} else if (currentHour >= 11 && currentHour < 14) {

  message = "Hora do almoço!!!";

} else if (currentHour >= 4 && currentHour < 11) {

  message = "Hmmm, cheiro de café recém-passado";

}

console.log(message); 


let weekDay = "domingo";

if(weekDay === "segunda-feira" || weekDay === "terca-feira" || weekDay === "quarta-feira" || weekDay === "quinta-feira" || weekDay === "sexta-feira"){

  console.log("Oba, mais um dia de aprendizado na Trybe >:D");

}else if(weekDay === "sabado" || weekDay === "domingo"){

  console.log("FINALMENTE, descanso merecido! UwU!");

}


let status = "aprovada";

switch (status) {
  case "aprovada":
    console.log("Parabéns, você está no grupo de pessoas aprovadas!");
    break;

  case "lista":
    console.log("Você está na nossa lista de espera.");
    break;

  case "reprovada":
    console.log("Infelizmente, você reprovou.");
    break;
  
  default:
    console.log("Informação incorreta.");  
}