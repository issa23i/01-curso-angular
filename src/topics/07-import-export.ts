import {Product, taxCalculation} from './06-function-destructuring'


const shoppingCar: Product[] = [
    {
        description: 'Nokia',
        price: 100
    },
    {
        description: 'Samsung',
        price: 250,
    }

];
    const [total, tax] = taxCalculation({
        tax: 0.15,
        products: shoppingCar
    });
    console.log(total, tax);
