/*
You wish to buy video games from the famous online video game store Mist.
Usually, all games are sold at the same price, p dollars. However, they are planning
to have the seasonal Halloween Sale next month in which you can buy games at a cheaper 
price. Specifically, the first game you buy during the sale will be sold at p dollars, 
but every subsequent game you buy will be sold at exactly d dollars less than the cost 
of the previous one you bought. This will continue until the cost becomes less than or 
equal to m dollars, after which every game you buy will cost m dollars each.
For example, if p = 20, d = 3 and m = 6, then the following are the costs of the first 
11 games you buy, in order: [20,17,14,11,8,6,6,6,6,6,6]
You have s dollars in your Mist wallet. How many games can you buy during the sale?
*/

function howManyGames(p, d, m, s) {
    let games = 0;
    while (s - p >= 0) {
        s -= p;
        p - d > m ? p -= d : p = m;
        games++;
    }
    return games;
}
console.log(howManyGames(20, 3, 6, 85));