const vowels = ['a', 'e', 'i', 'o', 'u'];

function convertToWhale(input) {
    const resultArray = [];
    input = input.toLowerCase();
    for (let i = 0; i < input.length; i++) {
        if (input[i] === 'e' || input[i] === 'u') {
            resultArray.push(input[i]);
        }
        for (let j = 0; j < vowels.length; j++) {
            if (input[i] === vowels[j]) {
                resultArray.push(input[i]);
            }
        }
    }
    const resultString = resultArray.join('').toUpperCase();
    document.getElementById('whale-talk').textContent = resultString;
}

function handleClick() {
    const $userInput = document.querySelector('#user-input').value;
    convertToWhale($userInput);
    clearInput();
}

function clearInput() {
    document.getElementById('user-input').value = '';
}

document.querySelector('#btn').addEventListener('click', handleClick);
clearInput();