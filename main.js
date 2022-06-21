// Consegna:
// Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.


const shoppingList = ['latte','uova','pane','formaggio','pasta','carne']



const shoppingCart = document.getElementById('cart')
console.log(shoppingList)

let i = 0

while(i < shoppingList.length){


    cartElement = document.createElement('li');
    cartElement.innerText = shoppingList[i];
    console.log(cartElement);
    shoppingCart.append(cartElement);

    i++


}

