// TUGAS 2

let calculator = (operasi, num1, num2) => {
    if(operasi == "penjumlahan"){
        console.log(`Hasil ${operasi} dari ${num1} dan ${num2} adalah ${num1 + num2}`);
    } else if (operasi == "pengurangan"){
        console.log(`Hasil ${operasi} dari ${num1} dan ${num2} adalah ${num1 - num2}`);        
    } else if (operasi == "perkalian"){
        console.log(`Hasil ${operasi} dari ${num1} dan ${num2} adalah ${num1 * num2}`);        
    } else if (operasi == "pembagian"){
        console.log(`Hasil ${operasi} dari ${num1} dan ${num2} adalah ${num1 / num2}`);  
    } else if (operasi == "eksponensial"){
        console.log(`Hasil ${operasi} dari ${num1} adalah ${Math.exp(num1)}`);
        console.log(`Hasil ${operasi} dari ${num2} adalah ${Math.exp(num2)}`);
    }
}
calculator("eksponensial", 6, 2);