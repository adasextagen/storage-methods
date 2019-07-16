/*
{ id: "0004", name: "Ensalada mixta", type: "Guarnición", price: 120, promo: "1" },
{ id: "0005", name: "Papas fritas", type: "Guarnición", price: 75, promo: "2" },
{ id: "0006", name: "Puré de zapallo", type: "Guarnición", price: 100, promo: "3" },
{ id: "0007", name: "Flan con crema", type: "Postre", price: 90, promo: "1" },
{ id: "0050", name: "Queso y dulce", type: "Postre", price: 90, promo: "2" },
{ id: "0020", name: "Mousse de chocolate", type: "Postre", price: 90, promo: "3" },
{ id: "0010", name: "Coca común", type: "Bebida", price: 50, promo: "1" },
{ id: "0011", name: "Paso de los toros", type: "Bebida", price: 50, promo: "2" },
*/

let data = [
    { id: "0001", name: "Tarta de jamón y queso", type: "Principal", price: 100, promo: "1" },
    { id: "0002", name: "Ensalada caprese", type: "Principal", price: 150, promo: "2" },
    { id: "0003", name: "Milanesa", type: "Principal", price: 200, promo: "3" },
]

const checkExistingData = () => {
    let storedData = window.localStorage.getItem('platos')
    data = storedData ? JSON.parse(storedData) : data
    //if (storedData) data = storedData
}

checkExistingData()

let prices = data.map( e => e.price)
let text = ['h','o','l','a']
let total = data.reduce((a,b) => a.price > b.price ? a : b)
console.log(total)

const newPlate = (plate) => {
    data.push(plate)
    saveToStore()
}

const saveToStore = () => {
    let parsedData = JSON.stringify(data)
    window.localStorage.setItem('platos', parsedData)
}