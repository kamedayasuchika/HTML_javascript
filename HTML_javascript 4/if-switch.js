console.log(45 + 18);

console.log(45 > 18);

console.log('5' == 5);

console.log('5' === 5);

let num = Math.floor(Math.random() * 5);

console.log(num);

if(num === 4){
    console.log('大当たりです');
}
else if(num === 3){
    console.log('当たりです');
} 
else {
    console.log('はずれです');
}

num = 20;

if(num === 10 && num === 30){
    console.log('変数numは10より大きく、30より小さいです');
}
else {
    console.log('条件が成り立ちませんでした');
}

num = 30;

if(num === 10 || num === 30){
    console.log('変数numは10または30です');
}
else {
    console.log('条件が成り立ちませんでした');
}

