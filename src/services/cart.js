//CASOS DE USO

//adicionar item no carrinho
async function addItem(userCart, item){
    userCart.push(item)
}
//deletar todo o carrinho
async function deleteItem(userCart, name){
    const index = userCart.findIndex((item) => item.name === name);

    if(index !== -1){
        userCart.splice(index, 1);
    }
}
//remover um item
async function removeItem(userCart, item){
    //encontrar o indice
    const indexFound = userCart.findIndex((p) => p.name === item.name)

    //caso não encontre
    if(indexFound == -1){
        console.log("Item não encontrado");
        return
    }
    
    //item > 1subtrair um item
    if(userCart[indexFound].quantity > 1){
        userCart[indexFound].quantity -= 1;
        return
    }

    //caso o item = 1 deletar o item
    if(userCart[indexFound].quantity = 1){
        userCart.splice(indexFound, 1);
    }
}
//total do carrinho
async function calculateTotal(userCart){
    console.log("\nYour Market cart total is:");
    const result = userCart.reduce((total,item) => total + item.subtotal(), 0);
    console.log(`🛒Total: ${result}`);
}

async function displayCart(userCart){
    console.log("\nMarket cart list");
    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - R$ ${item.price} |${item.quantity}x | Subtotal = ${item.subtotal()}`)
    })
}


export {
    addItem,
    calculateTotal,
    deleteItem,
    removeItem,
    displayCart
}