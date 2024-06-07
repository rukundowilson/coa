// perform to asci operation
function toASCII(char) {
    return char.charCodeAt(0);
}

function transformString(text) {
    const length = text.length;

    if (length % 15 === 0) {
        // If length is divisible by both 3 and 5  perform both operations.
        text= text.split('').reverse().join(''); // First reverse the string
        text= text.split('').map(toASCII).join(''); // replace each character with its ASCII code
    } else if (length % 5 === 0) {
        // If length is divisible by 5, replace each character with its ASCII code.
        text = text.split('').map(toASCII).join('');
    } else if (length % 3 === 0) {
        // If length is divisible by 3, reverse the entire string.
        text = text.split('').reverse().join('');
    }

    return text;
}
//passing an arguement 
console.log(transformString("orange")); //divisible by 3
console.log(transformString("mango")); //divisible by 5
console.log(transformString("pinneaplesaaaaa")); //dibisble by both3 and 5


