let a = 10;
let b = "20";
let c = 80;

console.log(++a + +b++ + +c++ - +a++);   // 100
/*
  Examples:
  [++a]
  - Value: a=10+1=11
  - Explain:  pre increment
  [+]
  - Explain: Addition Operator
  [b++]
  - Value: b=20+1=21
  - Explain:  post increment
  [+b++]
  - Value: 20 as number 
  - Explain:  unary plus
  [+]
  - Explain: Addition Operator
  [c++]
  - Value: c=80+1=81
  - Explain:  post increment
  [+c++]
  - Value: 80
  - Explain:  unary plus
  [-]
  - Explain: Substraction Operator
  [a++]
  - Value: a=11+1=12
  - Explain:  post increment
  [+a++]
  - Value: 11 as number 
  - Explain:  unary plus

  output = 11+20+80-11=100
*/
console.log(++a + -b + +c++ - -a++ + +a);     // 100
/*
a=12 b=21 c=81
  Examples:
  [++a]
  - Value: a=12+1=13
  - Explain:  pre increment
  [+]
  - Explain: Addition Operator
  [-b]
  - Value: -21
  - Explain:  unary negation
  [+]
  - Explain: Addition Operator
  [c++]
  - Value: c=81+1=82
  - Explain:  post increment
  [+c++]
  - Value: 81
  - Explain:  unary plus
  [-]
  - Explain: Substraction Operator
  [a++]
  - Value: c=13+1=-14
  - Explain:  post increment
  [-a]
  - Value: -13
  - Explain:  unary negation
  [+]
  - Explain: Addition Operator
  [+a]
  - Value: 14
  - Explain:  unary plus

  output = 13 + (-21) + 81 - (-13) + 14 =100
  */
console.log(--c + +b + --a * +b++ - +b * a + --a - +true);     // 100
/*
a=14 b=21 c=82
  Examples:
  [--c]
  - Value: c=82-1=81
  - Explain:  pre decrement
  [+]
  - Explain: Addition Operator
  [+b]
  - Value: 21
  - Explain:  unary plus
  [+]
  - Explain: Addition Operator
  [--a]
  - Value: a=14-1=13
  - Explain:  pre decrement
  [*]
  - Explain: Multiplication Operator
  [b++]
  - Value: b=21+1=22
  - Explain:  post increment
  [+b++]
  - Value: 21
  - Explain:  unary plus
  [+b]
  - Value: 22
  - Explain:  unary plus
  [*]
  - Explain: Multiplication Operator
  [a]
  - value: a=13
  [--a]
  - Value: a=13-1=12
  - Explain:  pre decrement
  [+true]
  - Value: 1
  - Explain:  unary plus

  Output: 81  + 21 +  13 * 21 - 22 * 13 + 12 - 1 =100
  */