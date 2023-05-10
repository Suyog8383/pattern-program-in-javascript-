let str = "";
for (let i = 0; i <= 5; i++) {
  for (let j = 0; j < i; j++) {
    str += String.fromCharCode(j + 65);
  }
  str += "\n";
}
console.log(str);
