let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];

console.log(menuServices);


let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let indexOfPortfolio = menu.indexOf('Portfólio');

console.log(indexOfPortfolio);

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];

menu.push('Contato')

console.log(menu);



let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for(let printlista = 0; printlista < groceryList.length; printlista += 1) {

  console.log(groceryList[printlista]);

}


let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for(let nome of names ){
  console.log(nome);
}

