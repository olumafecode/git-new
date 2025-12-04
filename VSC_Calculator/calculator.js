//let num1 = parseInt(prompt("Type in a number."));
//let num2 = parseInt(prompt("Type in another number."));

//function add (x,y) {
    //return x + y;
//}
//alert("The sum is " + add(num1, num2));
const passing = 75;
function getCurrent () {
    return parseInt(prompt("Type in your current grade."));
}
function getWeight () {
    return parseInt(prompt("Type in the weight of the final exam."));
}
function calculate (c, w) {
    let finalScore = ((passing - (1-(w/100))*c)/(w/100))
    let rounded = Math.round(finalScore);
    return `You must get a score of ${rounded}% on the final exam to pass this course.`;
}
alert( calculate(getCurrent(), getWeight()));