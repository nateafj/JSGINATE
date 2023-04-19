var sentenceOne = sentenceTwo = "I am A String With Spaces"
console.log(sentenceOne.split(' ').join(''))


function divisibleBy10(number){
    if (number % 10 === 0)
        return true;
    else{
        return false;
    }
}

console.log(divisibleBy10(35))
console.log(divisibleBy10(20))
console.log(divisibleBy10(50))
console.log(divisibleBy10(80))


function vowelCheck(str){
    const vowels =['a','e','i','o','u'];
    let count = 0;
    for (let i = 0; i < str.length; i++){
        if (vowels.includes(str[i].toLowerCase())){
            count++;
        }
    }
return count;
}


console.log(vowelCheck("Wheezy F Baby"));