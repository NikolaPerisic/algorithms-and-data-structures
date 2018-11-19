//If difference between grade and the next multiple of 5
//is less than 3, round grade up to next multiple of 5.
//If the grade is less than 38, no rounding, student failed

function gradingStudents(grades) {
    let arr = [];
    for (let i = 0; i < grades.length; i++) {
        if (grades[i] < 38) {
            arr.push(grades[i]);
        } else if (grades[i] % 5 === 3) {
            arr.push(grades[i] + 2);
        } else if (grades[i] % 5 < 3) {
            arr.push(grades[i]);
        } else if (grades[i] % 5 > 3) {
            arr.push(grades[i] + 1);
        }
    }
    return arr;
}
console.log(gradingStudents([34,67,88,98,100]));