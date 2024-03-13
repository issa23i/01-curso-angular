interface Product {
    description: string,
    price: number
}


const phone: Product = {
    description: 'iPhone 12',
    price: 1200
}

const tablet: Product = {
    description: 'iPad Pro',
    price: 1000.2
}

const shoppingCar = [phone, tablet];

const tax = 0.15;



interface TaxCalculationOptions {
    tax: number,
    products: Product[]
}



function taxCalculation(options: TaxCalculationOptions): [number, number] {
    let total = 0;
    const {tax, products} = options;
    products.forEach(product => {
        const {price} = product;
        total += price;
    });
    
    return [total,total * tax];
}

const result = taxCalculation({
    products: shoppingCar,
    tax
})

const [totalProducts, totalTax] = result;
console.log(totalProducts, totalTax)
export{}