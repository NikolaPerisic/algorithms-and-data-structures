/*
A Discrete Mathematics professor has a class of students. Frustrated with 
their lack of discipline, he decides to cancel class if fewer than some 
number of students are present when class starts. Arrival times go from on 
time (arrivalTime <= 0) to arrived late (arrivalTime > 0). Given the arrival 
time of each student array 'a' and a threshhold number of attendees 'k', 
determine if the class is canceled.
*/
function angryProfessor(k, a) {
    let counter = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] <= 0) {
            counter++;
        }
    }
    if (counter >= k) {
        return "NO";
    }
    return "YES";
}
console.log(angryProfessor(3, [-1, -3, 4, 2]));