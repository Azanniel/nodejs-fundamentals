// Buffer -> Representação de um espaço na memória, usada para transitar dados
// Eles são armazenados para logo serem tratados e depois removidos
const buf = Buffer.from("ok");

console.log(buf); // Hexadecimal
console.log(buf.toJSON()); // Decimal