let penjumlahan = (num1, num2) => {
    return `Hasil penjumlahan dari ${num1} + ${num2} = ${num1 + num2}`;
}

let pengurangan = (num1, num2) => {
    return `Hasil pengurangan dari ${num1} - ${num2} = ${num1 - num2}`;
}

let perkalian = (num1, num2) => {
    return `Hasil perkalian dari ${num1} * ${num2} = ${num1 * num2}`;
}

let pembagian = (num1, num2) => {
    return `Hasil pembagian dari ${num1} : ${num2} = ${num1 / num2}`;
}

let perpangkatan = (num1, num2) => {
    return `Hasil perpangkatan dari ${num1} ^ ${num2} = ${num1 ** num2}`;
}

module.exports = {
    tambah: penjumlahan,
    kurang: pengurangan,
    kali: perkalian,
    bagi: pembagian,
    pangkat: perpangkatan
}