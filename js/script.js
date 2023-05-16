
let message = document.querySelector("ul");

for(let number = 1; number <= 100; number++){

    let messageParagraph = document.createElement("li");


    if(number % 5 === 0 && number % 3 === 0){
        console.log("FizzBuzz");
        messageParagraph.innerHTML = "FizzBuzz";
        message.append(messageParagraph);
        messageParagraph.classList.add("green");
    }
    else if(number % 3 === 0){
        console.log("Fizz");
        messageParagraph.innerHTML = "Fizz";
        message.append(messageParagraph);
        messageParagraph.classList.add("red");
    }
    else if (number % 5 === 0){
        console.log("Buzz");
        messageParagraph.innerHTML = "Buzz";
        message.append(messageParagraph);
        messageParagraph.classList.add("blue");
    }
    else{
        console.log(number);
    }
}

