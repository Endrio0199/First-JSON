let invoice = {
    name: "Endrio",
    age: 24,
    products : {
        0: ["mouse 2xwm", 29.90],
        1: ["teclado mecânico", 129.99],
        2: ["monitor gamer", 899.99] 
    },
    taxes: "98.90"

}
generateinvoice (invoice)

function generateinvoice(invoice){
    console.log(`o comprador é ${invoice.name}`)
    console.log (`A idade é ${invoice.age}`)
    console.log ("-------------------")
    
    for (let index in invoice.products){
        let [productName, productPrice]= invoice.products[index]
        console.log(`- ${productName}: R$ ${productPrice}`)
    }
}