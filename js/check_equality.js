let integer1;
let integer2;
integer1 = window.prompt("Please add the First integer", "0");
integer2 = window.prompt("Please add the Second integer", "0");

if (integer1 > integer2) {
    alert("The larger of " + integer1 + " and " + integer2 + " is Interger1 " + integer1);
    console.log("The larger of " + integer1 + " and " + integer2 + " is Interger1 " + integer1);
} else if (integer1 < integer2) {
    alert("The larger of " + integer1 + " and " + integer2 + " is Interger2" + integer2);
    console.log("The larger of " + integer1 + " and " + integer2 + " is Interger2" + integer2);
} else {
    alert("The values " + integer1 + " and " + integer2 + " are equal.");
    console.log("The values " + integer1 + " and " + integer2 + " are equal.");
}