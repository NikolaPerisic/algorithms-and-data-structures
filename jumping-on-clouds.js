/*
Aerith is playing a cloud hopping game. In this game, there are 
sequentially numbered clouds that can be thunderheads or cumulus 
clouds. Her character must jump from cloud to cloud until it 
reaches the start again.
To play, Aerith is given an array of clouds, c and an energy level 
energy=100. She starts from c[0] and uses 1 unit of energy to make 
a jump of size k to cloud c[i+k]%n. If Aerith lands on a thundercloud,
c[i] == 1 , her energy level
decreases by 2 additional units. The game ends when Aerith lands 
back on cloud 0. Given the values of n, k, and the configuration of 
the clouds as an array c, can you determine the final value of  
energy after the game ends?
*/
function jumpingOnClouds(c, k) {
    let energy = 100;
    let i = k;
    let minJumps = Math.floor((c.length - 1) / k) - 1;
    while (energy > 0) {
        if (minJumps < 0 && c[i] === 0) {
            energy--;
            return energy;
        }
        if (c[i] === 0) {
            energy--;
            minJumps--;
            i = (i + k) % c.length;
        }
        if (c[i] === 1) {
            energy -= 3;
            i = (i + k) % c.length;
            minJumps--;
        }
    }
    return energy;
}
console.log(jumpingOnClouds([1, 1, 1, 0, 1, 1, 0, 0, 0, 0], 3));