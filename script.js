function add(x, y) {
	return x + y;
}
document.write("<h2>Addition function:<br/></h2>");
document.write(2 + " + " + 4 + " = ");
document.write(add(2, 4));

function multiply(x, y) {
	return x * y;
}
document.write("<h2>Multiplication function:<br/></h2>");
document.write(6 + " * " + 8 + " = ");
document.write(multiply(6, 8));

function power(x, n) {
	var answer = 1;

	for (let i = 0; i < n; i++) {
		answer = multiply(answer, x);
	}
	return answer;
}
document.write("<h2>Powers function:<br/></h2>");
document.write(2 + " ^ " + 8 + " = ");
document.write(power(2, 8));

function factorial(x) {
	answer1 = 1;

	for (let i = 1; i <= x; i++) {
		answer1 = multiply(answer1, i);
	}
	return answer1;
}
document.write("<h2>Factorial function:<br/></h2>");
document.write(4 + "! " + " = ");
document.write(factorial(4));

function fibonacci(x) {
	var answer2 = x;
	answer2 = add(answer2 - 1, answer2 - 2);
	return answer2;
}
document.write("<h2>Fibonacci function:<br/></h2>");
document.write("(8 - 1) + (8 - 2) =");
document.write(fibonacci(8));
