/*
HackerLand Enterprise is adopting a new viral advertising 
strategy. When they launch a new product, they advertise 
it to exactly 5 people on social media. On the first day, 
half of those 5 people (i.e. floor(5/2) = 2) like the 
advertisement and each shares it with 3 of their friends.
Each day, floor(recipients/2) of the recipients like the 
advertisement and will share it with 3 friends on the following 
day. Assuming nobody receives the advertisement twice, determine 
how many people have liked the ad by the end of a given day, 
beginning with launch day as day 1. 
*/
function viralAdvertising(n) {
    if (n < 1) {
        return 0;
    }
    let liked = 2;
    let sum = 2;
    for (let i = 2; i <= n; i++) {
        liked = Math.floor((liked * 3) / 2);
        sum += liked;
    }
    return sum;
}
console.log(viralAdvertising(5));