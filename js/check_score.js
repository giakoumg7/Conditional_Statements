let score;
score = window.prompt("Please add your score", "100");
if (score <= 100 && score >= 85) {
    console.log("Your grade in A")
    alert("Your grade in A")
} else if (score <= 84 && score >= 70) {
    console.log("Your grade in B")
    alert("Your grade in B")
} else if (score <= 69 && score >= 55) {
    console.log("Your grade in C")
    alert("Your grade in C")
} else if (score <= 54 && score >= 40) {
    console.log("Your grade in D")
    alert("Your grade in D")
} else if (score <= 39 && score >= 25) {
    console.log("Your grade in E")
    alert("Your grade in E")
} else {
    console.log("Your grade in F")
    alert("Your grade in F")
}