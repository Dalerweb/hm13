let x;
let tryCount = 0;

do {
    x = +prompt();
    tryCount++;
} while (x !== 7777 && tryCount < 5);

if (x === 7777) {
    console.log("Vzlomal bratishka");
} else {
    console.log("Ne poluchilos ne fortunulo ");
}
