function generate(length, charset) {
   let password = '';
   for(let i = 0, i < length, ++i){
      password += charset[
          Math.floor(
              math.random() * charset.length
         )
     ];
   }
   return password;
}

console.log(generate(8, 'abcd123456'));