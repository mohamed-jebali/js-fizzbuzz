



let message = document.querySelector("ul");
let colore = document.querySelector("container");

for(let number = 1; number <= 100; number++){
    if(number % 5 === 0 && number % 3 === 0){
        console.log("FizzBuzz");
        let messageParagraph = document.createElement("li");
        messageParagraph.innerHTML = number;
        message.append("FizzBuzz");
        colore.classList.add("blue")
    }
    else if(number % 3 === 0){
        console.log("Fizz");
        let messageParagraph = document.createElement("li");
        messageParagraph.innerHTML = number;
        message.append("Fizz");
        colore.classList.add("red")
    }
    else if (number % 5 === 0){
    console.log("Buzz");
    let messageParagraph = document.createElement("li");
    messageParagraph.innerHTML = number;
    message.append("Buzz");
    colore.classList.add("pink")
    }
    else{
        console.log(number);
    }
}

