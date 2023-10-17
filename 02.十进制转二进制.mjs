import ArrayStack from './01.基于数组封装栈.mjs';

function decimalToBinary(decimal) {
    const Stack = new ArrayStack();
    
    let binary = '';
    
    while(decimal > 0) {
      const result = decimal % 2;
      Stack.push(result);
      decimal = Math.floor(decimal / 2);
    }

    while(!Stack.isEmpty) {
      binary += Stack.pop();
    }

    return binary;
}

console.log(decimalToBinary(35));
console.log(decimalToBinary(100));
console.log(decimalToBinary(110));