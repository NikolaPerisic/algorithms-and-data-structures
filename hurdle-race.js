/*
Dan is playing a video game in which his character competes in a hurdle 
race. Hurdles are of varying heights, and Dan has a maximum height he can 
jump. There is a magic potion he can take that will increase his maximum 
height by 1 unit for each dose. How many doses of the potion must he take 
to be able to jump all of the hurdles.
Given an array of hurdle heights [height], and an initial maximum height Dan 
can jump 'k', determine the minimum number of doses Dan must take to be able 
to clear all the hurdles in the race.
*/

function hurdleRace(k, height) {
    let result = 0;
    height.forEach(function (hurdle) {
        if (hurdle > k) {
            if (result < (hurdle - k)) {
                result = hurdle - k;
            }
        }
    })
    return result;
}
console.log(hurdleRace(4, [1, 6, 3, 5, 2]));