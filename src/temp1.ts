var button = document.querySelector('button')!;
var inp1 = document.getElementById('num1')! as HTMLInputElement;
var inp2 = document.getElementById('num2')! as HTMLInputElement;

function addTwoNumbers(n1:number, n2:number) {
    return n1 + n2;
}

button.addEventListener('click', () => {
    let sum = addTwoNumbers(parseInt(inp1.value), parseInt(inp2.value));
});
