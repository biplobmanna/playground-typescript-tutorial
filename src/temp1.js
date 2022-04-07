var button = document.querySelector('button');
var inp1 = document.getElementById('num1');
var inp2 = document.getElementById('num2');
function addTwoNumbers(n1, n2) {
    return n1 + n2;
}
button.addEventListener('click', function () {
    var sum = addTwoNumbers(parseInt(inp1.value), parseInt(inp2.value));
});
