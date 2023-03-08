function fizzBuzz() {
    let inputValue = document.getElementById('textInput').value;
    let outputValue = "";
    for (let i = 1; i <= inputValue; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
            outputValue += "FizzBuzz" + "<br>";
        } else if (i % 3 === 0) {
            console.log("Fizz");
            outputValue += "Fizz" + "<br>";
        } else if (i % 5 === 0) {
            console.log("Buzz");
            outputValue += "Buzz" + "<br>";
        } else {
            console.log(i);
            outputValue += i + "<br>";
        }
    }
    document.getElementById('output').innerHTML = outputValue;
  }