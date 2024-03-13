

export function whatsMyType<T>(argument: T): T{
    return argument;
}


const amIStirng = whatsMyType<string>('I am a string');
const amINumber = whatsMyType<number>(1234);
const amIArray = whatsMyType<number[]>([1,2,3,4,5]);

const amIStirng2 = amIStirng.replace('a', 'b');

// console.log(amIStirng2.split(' '));

// console.log(amINumber.toPrecision());

// console.log(amIArray.join('-'));

