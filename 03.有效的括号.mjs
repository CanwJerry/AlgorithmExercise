import ArrayStack from './01.基于数组封装栈.mjs';

function isValid(str) {
  const Stack = new ArrayStack();

  for(let i = 0; i < str.length; i++) {
    let s = str[i];

    switch(s) {
      case '(':
        Stack.push(')');
        break;
      case '{':
        Stack.push('}');
        break;
      case '[':
        Stack.push(']');
        break;
      default:
        if(s !== Stack.pop()) return false;
        break;
    }
  }

  return Stack.size === 0;
}

console.log(isValid('()'));
console.log(isValid('{()}'));
console.log(isValid('{(})'));
console.log(isValid('[]'));
console.log(isValid('[}]'));
